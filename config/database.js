const mongoose = require("mongoose");

const uri =
  "mongodb://diego:diego@cluster0-shard-00-00.opcsh.mongodb.net:27017,cluster0-shard-00-01.opcsh.mongodb.net:27017,cluster0-shard-00-02.opcsh.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
//const uri = "mongodb://localhost:27017/info";

mongoose.connect(uri);

module.exports = mongoose;
