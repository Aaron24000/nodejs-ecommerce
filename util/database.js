const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://aaronnobles:Vg2hJxZ1MMnBVWpy@cluster0.ocpqi.mongodb.net/shop?retryWrites=true&w=majority')
    .then((client) => {
      console.log("CONNECTED!!!");
      db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(db) {
    return db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;