// Models
const { Registration } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
	try {
		const registrations = await Registration.findAll();

		res.status(200).json({
			status: 'success',
			registrations,
		});
	} catch (err) {
		console.log(err);
	}
};

const createRegistration = async (req, res) => {
	try {
		
		const newRegistration = await Registration.create({
			entranceTime: Date.now(),			
		});

		res.status(201).json({
			status: 'success',
			newRegistration,
		});
	} catch (err) {
		console.log(err);
	}
};

const getRegistrationById = async (req, res) => {
	const { id } = req.params;

	const registration = await Registration.findOne({ where: { id } });

	if (!registration) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	res.status(200).json({
		status: 'success',
		registration,
	});
};

const updateRegistration = async (req, res) => {
	const { id } = req.params;
		
	const registration = await Registration.findOne({ where: { id } });

	if (!registration) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	await registration.update({ exitTime:Date.now(), status: 'out', });
	

	res.status(204).json({ status: 'success' });
};

const cancelRegistration = async (req, res) => {
	const { id } = req.params;

	const registration = await Registration.findOne({ where: { id } });

	if (!registration) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	
	await registration.update({ status: 'canceled' });

	res.status(204).json({ status: 'success' });
};

module.exports = {
	getAllRegistrations,
	createRegistration,
	getRegistrationById,
	updateRegistration,
	cancelRegistration,
};
