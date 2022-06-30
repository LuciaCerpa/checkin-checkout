//todo esto es a la antigüita pero en la actualidad ya esto no se utiliza

//import axios from 'axios'//ES6(react)
const http = require('http');//CommonJS (nodeJs)
//vamos a utilizar la libreria http
//Dummy data?eso nose que sea pero este arreglo es el que el usuario nos está pidiendo
const users = [
    {id: 1, name: 'Max'},

    {id: 2, name: 'Luis'},
    
    {id: 3, name: 'John'},
]

const posts = [
    {id: 1, name: 'Post #1'},

    {id: 2, name: 'Post #2'},
    
    {id: 3, name: 'Post #3'},
]

const server = http.createServer((request, response)=>{
    //console.log(request.method) que es el HTTP verb
    //console.log(request.url) que es la URL
    const{method, url} = request;//desestructurar method y url
    console.log("hello from server")
    //endpoint get users es una combinacion entre verbo y url
    response.setHeader('Content-Type', 'application/json');
    if(method === 'GET' && url === '/users'){//return list of users
        response.write(JSON.stringify(users));

        
    } else if(method === 'GET' && url === '/posts'){
        response.setHeader('Content-Type', 'application/json');//el content type significa que va a decir que tipo de documento va a recibir el cliente el segundo parametro es el valor del header que queremos mandarle al usuario que en este caso es de tipo json
        response.write(JSON.stringify(posts));//este metodo escribe sobre response con la informacion que quiere el usuario para poder enviarsela
             
    }else{
        response.write(JSON.stringify({message:`${method} ${url} not found in this server`
    })
    );
    }
    response.end();    
})//creamos el servidor

//Localhost:4000
server.listen(4000);//lo ponemos a la escucha, es decir a la espera de las peticiones del cliente, listen necesita el puerto (se le puede poner el numero que sea)