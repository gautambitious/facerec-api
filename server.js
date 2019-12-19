const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app=express();

// app.use(cors);

app.get('/', (req, res) => {
  res.send('Nice')
})


app.listen(5000);
