const express = require('express')

//Routers
const { usersRouter } = require('./routes/users.routes')

const { postsRouter } = require('./routes/posts.routes')

//Utils
const { db } = require('./utils/dataBase.util');


// const users = [
//     {id: 1, name: 'Max'},
//     {id: 2, name: 'Lucy'},    
//     {id: 3, name: 'John'},
// ];

// const posts = [
//     {id: 1, name: 'Post #1'},
//     {id: 2, name: 'Post #2'},    
//     {id: 3, name: 'Post #3'},
// ];


// init express app (inicializar nuestra aplicacion de express)
const app = express();

app.use(express.json());//este json es diferente al de res, lo que se está haciendo aqui es decirle que yo quiero que mi aplicacion utilice formato json


//definir los endpoints antes de poner el servidor a la escucha
// http://localhost:4000/users
app.use('/users', usersRouter);



// app.get('/posts', (req, res) => {
// 	res.status(200).json({
// 		status: 'success',
// 		posts,
// 	});
// });

app.use('/posts', postsRouter);



//Define endpoints async/await
//app.get('/users', (req, res)=>{
    //process the request(return the users list) (procesar la peticion del cliente)
//    User.findAll().then(users=>{}).catch(err=>{})
 
//     app.get('/users', async(req, res)=>{
//         try{
//        const users= await User.findAll()//esto seria la parte del then y para el catch se pone un try
    
//     res.status(200).json({
//         status:'success',
//         users,
//     })//response json ya esta haciendo la respuesta final tambien
// }catch (err){
//     console.log(err);
// }
// });




// app.get('/posts', (req,res)=>{

// })

// app.post('/posts', (req, res)=>{

// })


// app.post('/users', (req, res) => {
//     //console.log(req.body)    
//     //const name = req.body.name hay quienes lo hacen asi, el profe lo maneja con desestructuracion que es la siguiente   

//     const {name} = req.body;

//     const newUser = {
//         id: Math.floor(Math.random()*1000),//esto nos va a dar un numero aleatorio de 3 digitos ya que math random nos da un numero aleatorio entre 0 y 1 pero si se multiplica por 1000 el punto se recorre 3 cifras, esto que es solo para pruebas porque el id lo maneja la base de datos
//         name
//     }
//     users.push(newUser)
//     res.status(201).json({
//         status:'success',
//         newUser,
//     });//este significa que hicimos un nuevo usuario
// });

// app.get('/posts', (req, res)=>{
    
//     res.status(200).json({
//         status:'success',
//         posts,
//     })
// });

// app.post('/posts', (req, res) => {
//     const {name} = req.body;

//     const newPost = {
//         id: Math.floor(Math.random()*1000),
//         name
//     }
//     posts.push(newPost)
//     res.status(201).json({
//         status:'success',
//         newPost,
//     });
// });

db.authenticate()
.then(()=>console.log('Db authenticated'))
.catch(err=>console.log(err));

db.sync()
.then(()=>console.log('Db synced'))
.catch(err=>console.log(err));
//fuera de una funcion no se puede utilizar el sync await y el sync es el que va a crear la tabla y nos va a devolver una promesa por eso el then y el catch

app.listen(4000, () =>{
    console.log('Express app running!');
})