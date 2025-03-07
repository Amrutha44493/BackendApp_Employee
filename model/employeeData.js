//this for create schema 
const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema(
    {
        name:String,
        location:String,
        position:String,
        salary:Number,

    }
)
const employeeData=mongoose.model('employee',employeeSchema);//mapping schema to collection
module.exports=employeeData;