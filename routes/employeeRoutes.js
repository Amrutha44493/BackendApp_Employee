const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const empModel = require('../model/employeeData');

// GET operation for display inserted data
router.get('/employeelist', async (req, res) => {
    try {
        console.log("Fetching employees...");
        const data = await empModel.find();
        console.log("Employees found:", data);
        res.status(200).json(data); // Send JSON
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).send('Internal Server Error'); // Use 500 for server errors
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

        res.status(200).json(employee); // Send JSON
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).send('Internal Server Error');
    }
});

// POST operation
router.post('/employeelist', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new empModel(item);
        await data1.save();
        res.status(201).send('Employee created successfully');
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT operation
router.put('/employeelist/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get ID from params
        await empModel.findByIdAndUpdate(id, req.body);
        res.status(200).send('Employee updated successfully');
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE operation
router.delete('/employeelist/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await empModel.findByIdAndDelete(id);
        res.status(200).send('Employee removed successfully');
    } catch (error) {
        console.error("Error removing employee:", error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;