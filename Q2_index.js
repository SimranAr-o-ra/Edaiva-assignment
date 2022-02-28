const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{useUnifiedTopology: true,
useNewUrlParser: true});


const userSchema = new Schema({
  
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    profilePhoto: String,
    password: String,
    
  });

  var userModel = mongoose.model("user", userSchema, "user");

//   due to lack of time availabilty ,can not able to complete..
