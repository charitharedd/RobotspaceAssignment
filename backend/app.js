const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', taskRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));
