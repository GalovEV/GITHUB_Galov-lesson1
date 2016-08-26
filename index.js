var beeper = require('beeper');
var colors = require('colors');
 
console.log('Привет!'.green.bold); 
console.log(colors.red.bold.underline('стaрт'));
var timerId = setInterval(function() {
  console.log(colors.random('бип'));
  beeper();
}, 1000);
setTimeout(function() {
 clearInterval(timerId);
 console.log(colors.red.bold.underline('стоп'));
}, 5000);