const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const studentRoutes = require('./routes/students');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Student service running on port ${PORT}`);
});