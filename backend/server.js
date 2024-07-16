const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dishRoutes = require('./routes/dishes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/dishesDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/dishes', dishRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
