var express = require('express');
var router = express.Router();

//Sample data

function getCurrentDay() {
  let today = new Date()
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let newDate = month + "/" + date + "/" + year;
  return newDate
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: getCurrentDay()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: getCurrentDay()
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
  messages.push({text: req.body.msg, user: req.body.name, added: getCurrentDay()})

  res.redirect('/') 
});

module.exports = router;
