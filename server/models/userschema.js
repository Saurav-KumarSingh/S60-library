const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/users')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection to MongoDB failed:', err));

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type:String,
        default:null
    }
})

const userModel = mongoose.model('users',userSchema);

module.exports= userModel;