const mongodb = require("mongodb");

const MongoClinet = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClinet.connect("mongodb://localhost:27017");
  database = client.db("blog");
  console.log('Connection established successfully!')
}

function getDB() {
    if(!database) {
        throw{
            message:'Database connection not established!'
        }
    }
    return database;
}

module.exports = {
    connectToDatabase: connect,
    getDB: getDB
}; 