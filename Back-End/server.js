const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo_list_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Body parser middleware
app.use(express.json());

// Define routes
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 6600;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
