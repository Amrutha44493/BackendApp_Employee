//this for create schema 
const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema(
    {
        employeeName:String,
        empLocation:String,
        empPosition:String,
        empSalary:Number,

    }
)
const employeeData=mongoose.model('employee',employeeSchema);//mapping schema to collection
module.exports=employeeData;