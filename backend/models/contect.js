const mongoose = require('mongoose')


const contectSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    subject:String,
    message:String
},{
    timestamps:true
})



module.exports = mongoose.model('Contect',contectSchema)