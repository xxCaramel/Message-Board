const express = require('express');
const router = express.Router();
const time = require('../public/javascripts/formatTime');

//Determines class
let right_left = true;

//Messages array
const messages = []

//Message factory
const message = (text,user,added) => {
  const date = added;
  let class_name = '';

  const formatTime = () => {
    let hourMinute = [date.getHours(),date.getMinutes()];
    hourMinute = time.format(hourMinute);

    return hourMinute.join(':');
  }
  const css_class = () => {
    right_left = !right_left;
    class_name = (right_left) ? 'right':'left';
    return class_name;
  }

  const css = css_class();
  return {text,user,added,formatTime,css};
}


const filler_message = message('Hello!', 'Admin',new Date());
messages.push(filler_message);

//Object properties to define variables for the view


/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', {title:'Messages',messages:messages});
});

/* POST user message*/
router.post('/new',(req,res,next)=> {
  const body = req.body;
  const msg = message(body.message,body.user,new Date())
  messages.push(msg);
  
  res.redirect('/');
})

module.exports = router;
