var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:math/:num1/:num2', function(req, res, next) {
  var answer;
  if(req.params.math === 'add'){
  answer = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.render('answer', {
    type:'Addition!',
    num1:req.params.num1,
    num2:req.params.num2,
    operator: "+",
    answer: answer.toString()
    });
  }
  else if(req.params.math === 'subtract'){
    answer = parseInt(req.params.num1) - parseInt(req.params.num2);
    res.render('answer', {
      type:'Subtraction!',
      num1:req.params.num1,
      num2:req.params.num2,
      operator: "-",
      answer: answer.toString()
      });
  }else if(req.params.math === 'multiply'){
    answer = parseInt(req.params.num1) * parseInt(req.params.num2);
    res.render('answer', {
      type:'Multiplication!',
      num1:req.params.num1,
      num2:req.params.num2,
      operator: "x",
      answer: answer.toString()
    });
  }else if(req.params.math === 'divide'){
    answer = parseInt(req.params.num1) / parseInt(req.params.num2);
    res.render('answer', {
      type:'Division!',
      num1:req.params.num1,
      num2:req.params.num2,
      operator: "/",
      answer: answer.toString()
    });
  }
});




module.exports = router;
