const mongoose = require("mongoose");
        Schema = mongoose.Schema,
  personSchema= new Schema({
   name:String,
   age :Number,
  gender:String,
  mobileNumber:Number,
});
 
module.exports=mongoose.model("Person",personSchema);

