const mongoose=require('mongoose')

const ContactSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Contacts=mongoose.model('Contact',ContactSchema)

module.exports=Contacts;