var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY h:mm:ss a'));

//10:35 am

console.log(date.format('h:mm a'));
