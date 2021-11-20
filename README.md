# Node.js Blog App

This is a Nodejs Authentication Project with [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Project Setup](#project-setup)

## Overview

### The challenge

- When a user sends first_name, last_name, email and password information to '/register' route with Http POST method:

  - Get these information from request body,
  - If all fields are not filled by the user, send a message with status code 400,
  - Check if the email adress already exists in our database, if so send a message with a status code 409,
  - If User email doesn't exist in our database, create a new user with encrypted password information,
  - Create a JSON Web Token for the user,
  - Send the new User information as a JSON with status code 200.

- When a user sends email and password information to '/login' route with Http POST method:
  - Get user email and password information from request body,
  - Check if all fields are filled, if not send a message with status code 400,
  - Check our database if the user with this email exists,
  - If user exists and password is true(by comparing with bcryptjs), create JSON Web Token,
  - Send the user information as a JSON with a status code 200,

## My process

### Built with

- [Nodejs](https://nodejs.org/en/)
- [Expressjs Web Framework](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Mongoosejs ODM](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)-Development Dependency
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Author

- Portfolio - [Fatih Özoğlu](https://fatihozoglu.github.io/react-portfolio/)
- Linkedin - [Fatih Özoğlu](https://www.linkedin.com/in/fatihozoglu/)

## Project setup

- Clone this repo or download the code directly to your computer.
- Install npm packages needed to run this project with:

```
npm install
```

- You need Mongodb as a database and you should change the database connection path with your own database identifier.
- If your database is up and running, it is connected to the app then run this command in your CLI to start the app:

```
npm run dev
```

- You can send POST requests to '/register' and '/login' routes with [Postman](https://www.postman.com/) to see the responses and created JWT for the user.
