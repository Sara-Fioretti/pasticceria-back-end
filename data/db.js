const mysql2 =require('mysql2')
const connection = mysql2.createConnection({
    host: DB_HOST ||'localhost',
    user: DB_USER ||'root',
    password: DB_PASSWORD ||'Andrea_250618!',
    database: DB_NAME ||'pastry_shop_db'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to MySql')
})

module.exports=connection;