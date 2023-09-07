const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to the Simpsons Voice API.');
});


app.get('/api/voice/:characterName', async (req, res) => {
 
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
