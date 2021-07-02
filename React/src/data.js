const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//_id wallet P_Name P_Content P_Image P_Date type capacity ping

const ProjectSchema = new Schema(
  // {
  //   _id: Number,
  //   name1: String,
  //   name2: String,
  //   email: String,
  //   interest: String,
  //   address: String,
  //   phone: String,
  //   birthday: String,
  //   sex: String,
  //   isnonoe: String,
  // }
  {
    _id: Number,
    wallet: String,
    name1: String,
    name2: String,
    username: String,
    password: String,
    email: String,
    address: String,
    phone: String,
    birthday: String,
    sex: String,
    img: String,
    like: Array,
  }
  //{ timestamps: true }
);

//module.exports = mongoose.model("Chain",ProjectSchema,'Chain');
module.exports = mongoose.model("customer", ProjectSchema, "customer");
