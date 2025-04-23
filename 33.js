const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = "mongodb://localhost:27017/"
mongoose.connect(url).then(() => {
    console.log("Connected to MongoDB");
}
).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});
const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    salary: Number  
});
const Employee = mongoose.model('Employee', employeeSchema);
app.use(express.json());
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);
app.post('/employees', async (req, res) => {
  try {
      const employee = new Employee(req.body);
      await employee.save(); 
      res.status(201).json(employee);
  } catch (err) {
    console.log(err);
      res.status(400).json({ message: err.message });
  }
});

app.delete('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);
app.put('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);
