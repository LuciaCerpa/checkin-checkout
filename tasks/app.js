const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.route')

const { tasksRouter } = require('./routes/tasks.route')

// Init express app
const app = express();

app.use(express.json());

//Define endpoints