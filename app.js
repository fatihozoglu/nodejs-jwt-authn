require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const User = require("./model/user");

const app = express();

app.use(express.json());

// App Logic will be here
app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(first_name && last_name && email && password)) {
      res.status(400).send("All fields are required.");
    }

    const oldUser = await User.find({ email });

    if (oldUser) {
      res.status(409).send("User Already Exist. Please Login");
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/login", (req, res) => {});

module.exports = app;
