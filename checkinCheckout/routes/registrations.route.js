const express = require('express');

//Controllers
const {
    getAllRegistrations,
    createRegistration,
    getRegistrationById,
    updateRegistration,
    cancelRegistration,
} = require('../controllers/registrations.controller')

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);
registrationsRouter.post('/', createRegistration);
registrationsRouter.get('/:id', getRegistrationById);
registrationsRouter.patch('/:id', updateRegistration);
registrationsRouter.delete('/:id', cancelRegistration);

module.exports = { registrationsRouter };