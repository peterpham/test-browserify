var _ = require('lodash');
var math = require('./math.js'); // math.js is relative to index.js
var Person = require('./person.js');

_.each([2,3,4,5,6,1234], function(i){
	document.write(i + '<br />');
});

var result = math.multiply(5, 6);
document.write('Math multiply = ' + result + '<br />');

var student = new Person('Peter');
var teacher = new Person('Susan');
student.sayHello();
teacher.sayHello();
