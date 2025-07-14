const express = require('express');
const cors = require('cors');
require('dotenv').config();

var usersRouter = require('./routes/users');
var userRouter = require('./routes/user-R');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://semikushea:cEXtwZdRfy8c3JOA@cluster0.6jqaihq.mongodb.net/Pokker')
// mongoose.connect('mongodb://localhost:27017/Pokker')
  .then(() => console.log('DB Connected!'));

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h1 style="text-align: center; margin-top: 300px; font-family: Arial, sans-serif; color: #008000;">Pokker Server is now live!</h1>`);
});

app.use('/users', usersRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on : ${PORT}`);
});
