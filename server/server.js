const express = require ('express');
const app = express();
const dotenv = require('dotenv').config();
const goalRoutes = require('./Routes/goalRoutes');
const userRoutes = require('./Routes/userRoutes');


const PORT = 8080;
//app.use(express.json());

//middleware
app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.json());
  

//connecting the database
const mongoose = require('mongoose'); 
// const {URI} = require('./Models'); 
mongoose.connect(process.env.MONGO_URI);
const database = mongoose.connection;
database.on('error', (error) => console.error(error));
database.once('open', () => console.log('database connected')); 


//routes
app.use('/goals', goalRoutes);
app.use('/auth', userRoutes);


/* Global Error Handling */
// app.use((err, req, res) => {
//   console.error(err.message);
//   const clientError = Object.assign({
//     status: 500,
//     message: { error: 'Unknown server error. Check logs.' }
//   }, err);
//   res.status(clientError.status).json(clientError.message);
// });

//starting the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;