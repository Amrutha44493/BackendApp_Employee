const express=require('express');
const router=express.Router();
router.use(express.json());
//middle ware to pass json ..
router.use(express.urlencoded({extended:true}));
//fetch images or files

const empModel = require('../model/employeeData');
//GET operation
router.get('/', async (req, res) => {
    try {
      console.log("Fetching employees...");
      const data = await empModel.find();
      console.log("Employees found:", data);
      res.status(200).send(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(404).send('Data not found');
    }
  });
//post operation
router.post('/add', async (req, res) => {
  try {
    var item=req.body;
    const data1=new empModel(item);
    await data1.save();
   res.status(200).send('successful');
  } catch (error) {
    res.status(404).send('unsuccessful');
  }
});
//update operation
router.put('/update/:id', async (req, res) => {
  try {
    const id=req.params.id;
    await empModel.findByIdAndUpdate(id,req.body);
   res.status(200).send('successful');
  } catch (error) {
    res.status(404).send('unsuccessful');
  }
});
//delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const id=req.params.id;+0
   res.status(200).send('removrd');
  } catch (error) {
    res.status(404).send('not');
  }
});
module.exports=router;