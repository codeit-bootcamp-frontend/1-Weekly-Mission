import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    title : {type: String, default : ''},
    url : {type: String, default : ''},
  },
  {
    timestamps : true,
  }
);

const test = 
  mongoose.models['test'] || mongoose.model('test', testSchema);

export default test;