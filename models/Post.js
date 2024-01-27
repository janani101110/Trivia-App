const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
    },
    Summary:{
        type:String,
        required:true,
        unique:false,
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
   userId:{
       type:String,
      required:true,
   }
});

module.exports=mongoose.model('Post',PostSchema)
