const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const empModel = require('../model/employeeData');

// GET operation for display inserted data
router.get('/employeelist', async (req, res) => {
    try {
        console.log("Fetching employees");
        const data = await empModel.find();
        console.log("Employees found:", data);
        res.status(200).json(data); 
    } catch (error) {
        console.error("Error fetching employees", error);
        res.status(500).send('Internal Server Error');
    }
});

// GET operation for retrieve a single employee for editing
router.get('/employeelist/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await empModel.findById(id);

        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.status(200).json(employee); 
    } catch (error) {
        console.error("Error", error);
        res.status(500).send('Internal Server Error');
    }
});

// POST operation
router.post('/employeelist', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new empModel(item);
        await data1.save();
        res.status(200).json({ message: "Inserted successful", data1 });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(' Insertion Failed');
    }
});

// PUT operation
router.put('/employeelist/', async (req, res) => {
    try {
        if (!req.body._id) {
          return res.status(400).json({ error: "Employee ID required!" });
        }
        const updatedEmployee = await empModel.findOneAndUpdate(
          { _id: req.body._id },
          req.body,
          { new: true }
        );
    
        if (!updatedEmployee) {
          return res.status(404).json({ error: "Employee not found" });
        }
        res.status(200).json({ message: "Update successful", updatedEmployee });
      } catch (error) {
        res.status(500).send("Update failed.");
      }
});
// DELETE operation
router.delete('/employeelist/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await empModel.findByIdAndDelete(id);
        res.status(200).json({ message: "deleted successful"});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('Unsuccessful');
    }
});


module.exports = router;