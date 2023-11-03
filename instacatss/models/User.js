// 1º Importar DataTypes Sequelize
const {DataTypes} = require('sequelize')
// 2º Importar arquivo e connect database
const db = require('../db/conn')

// 3º Estrutura essa tabela
const User = db.define('User', {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    }
});

module.exports = User