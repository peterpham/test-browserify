module.exports = Person = function(name) {
	this.name = name;
}

Person.prototype.sayHello = function(){
	document.write('Hello ' + this.name + '<br />');
}