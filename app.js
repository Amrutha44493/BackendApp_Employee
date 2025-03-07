// Task1: initiate app and run server at 3000
const express=require("express");
const morgan=require('morgan');
const app=new express();
require('dotenv').config();
require('./db/connection');

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
const baseRoute=require('./routes/employeeRoutes');
app.use('/api',baseRoute);

app.listen(process.env.PORT,()=>
{
    console.log(`Server is listening ${process.env.PORT}`);
})
// Task2: create mongoDB connection 


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



