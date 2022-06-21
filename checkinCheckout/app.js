const express = require ('express')

// Routers
const { registrationsRouter } = require('./routes/registrations.route');

// Utils
const { db } = require('./utils/dataBase.util')

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use('/api/v1/registrations', registrationsRouter);


db.authenticate()
    .then(()=>console.log('Db authenticated'))
    .catch(err=>console.log(err));

db.sync()
    .then(()=>console.log('Db synced'))
    .catch(err=>console.log(err));

app.listen(4001, ()=>{
    console.log('Express app running!');
})