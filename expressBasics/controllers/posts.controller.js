// Models
const { Post } = require('../models/post.model')


const getAllPosts =  async(req, res)=>{
    try {
		const posts = await User.findAll();

		res.status(200).json({
			status: 'success',
			posts,
		});
	} catch (err) {
		console.log(err);
	}
};

const createPost = async (req, res)=>{
    
	try{
		const { title, content, id } = req.body;

		const newPost = await Post.create({
			title, 
			content, 
			id, 
			
		});

		res.status(201).json({
			status: 'success',
			newPost,
		});
	}catch(err){
		console.log(err)
	}

};

const getPostById = async ( req, res ) => {
	const { id } = req.params;

	const post = await Post.findOne({
		where: { id } 
	});

	if(!post) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	res.status(200).json({
		status:'success',
		post,
	});
};

const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title } = req. body;

	const post = await Post.findOne({
		where: { id } });

		if(!post){
			return res.status(404).json({
				status: 'error',
				message: 'User not found',
			});
		}

		await post.update({ title });

		res.status(204).json({
			status: 'success'
		});
	}

	const deletePost = async ( req, res )=>{
		const { id } = req.params;

		const post = await Post.findOne({
			where:{ id } 
		});

		if(!post) {
			return res.status(404).json({
				status: 'error',
				message:'User not found',
			});
		}
		// await user.destroy();
		await post.update({ status: 'deleted'});

		res.status(204).json({ status: 'success'});
	};

module.exports = { 
	getAllPosts, 
	createPost,
	getPostById,
	updatePost,
	deletePost,
 };