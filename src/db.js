const mysql = require("mysql")

//responsável pela conecção, chamando as variáveis do variaveis.env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//criando a conecção
connection.connect((error) => {
    //se der erro, o throw mostrará esse erro
    if (error) throw (error)
    //se não, vai dar o seguinte console
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.exports = connection;