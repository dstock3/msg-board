var express = require('express');
var router = express.Router();

//Sample data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A Very Official Message Board', messages: messages });
});

/* GET new messages */
router.get('/new', function(req, res, next) {
  res.render('form');
});

//Post messages
router.post('/new', function(req, res, next) {
  let today = new Date()
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let newDate = month + "/" + date + "/" + year;
  messages.push({text: req.body.msg, user: req.body.name, added: newDate})

  res.redirect('/') 
});

module.exports = router;
