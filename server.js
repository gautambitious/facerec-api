const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var bcrypt = require('bcryptjs');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'root',
    database : 'facerec'
  }});
const app=express();
app.use(bodyParser.json());
app.use(cors());
// knex('login').insert({
//   email: 'gautam@gmail.com',
//   password: 'check'
// }).then(console.log);
// app.get('/', (req, res) => {
//   res.send('Nice')
// })
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  knex('login').where({email: email}).select('password')
  .then((res) => {
    const password1 = res[0].password;
    if(bcrypt.compareSync(password, password1)){
      kn
      res.json({

      });
    }
  });
  // .then((password) => console.log);
})
app.post('/register', (req, res) => {
    knex('users').insert({
      email: req.body.email,
      name: req.body.name,
      joined: new Date()
    }).then(() => {
      knex('login').insert({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      }).then(() => res.json("success"))
    })
    .catch((err) => res.status(400).send(err));
})

app.listen(5000);
