const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const tasksRouter = require('./routes/tasks');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});