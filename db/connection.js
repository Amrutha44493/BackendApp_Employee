
const mongoose=require('mongoose');
//console.log("Connection String:", process.env.mongoDB_URL); // Add this line

mongoose.connect(process.env.mongoDB_URL).then(()=>{
    
console.log('Connection is estabilshed');
}).catch((err)=>{
    console.error('Connection error:', err)
});

