const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8001; 

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '', 
    database: 'volvo',
};

async function getDatabaseConnection() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        return connection;
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error;
    }
}

app.use(express.json());

app.all('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(PORT, () => { 
    console.log("Server is Running") 
})

