const { db, DataTypes } = require('../utils/dataBase.util')

//create our first model (table)
const User = db.define('user', {
    //la primera letra es mayuscula para identificar que esta variable es un modelo, una clase que se puede utilizar si me quiero comunicar con la tabla user
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,//esto forza a que el correo nunca se repita
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',//sino me pasan un status este valor es por default y es mejor manejarlo con string a con booleano
    }
})

module.exports = { User };