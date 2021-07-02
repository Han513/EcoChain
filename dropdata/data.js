//node mongoDB.js 啟動server
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//_id wallet P_Name P_Content P_Image P_Date type capacity ping

const ProjectSchema = new Schema({
  _id: Number,
  wallet: String,
  P_Name: String,
  P_Address: String,
  P_Content1: String,
  P_Content2: String,
  P_Image: String,
  P_Date: String,
  type: String,
  capacity: Number,
  ping: Number,
  price: Number,
});

//module.exports = mongoose.model("Chain",ProjectSchema,'Chain');
module.exports = mongoose.model("Project2", ProjectSchema, "Project2");
