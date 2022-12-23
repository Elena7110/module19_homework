// Родительская функция с методами, которые включают/выключают прибор из розетки.
function Power(name, power) { //nfr как приборы и мощьность разные, их можно передавать, как аргумент, функцие
	this.name = name; // в объект this записывается новое свойство
	this.power = power; // в объект this записывается новое свойство
	this.isWorking = false; // работает ли прибор
}

//  делегирующая связь [[Prototype]] , создаем метод через [[Prototype]]
Power.prototype.getDeviceIsWorking = function () {
	console.log(this.name + " работает!");
	this.isWorking = true; // прибор подключен
}


Power.prototype.getSelfPower = function () {
	return this.isWorking ? this.power : 0; // если прибор подключен, получаем его мощность
}


const tableLamp = new Power('Настольная лампа', 17); // новый экземпляр функции-конструктора
const laptop = new Power('Компьютер', 100); // новый экземпляр функции-конструктора



//  включаем лампу
tableLamp.getDeviceIsWorking();
console.log(tableLamp.getSelfPower(), 'W');

//  включаем компьютер
laptop.getDeviceIsWorking();
console.log(laptop.getSelfPower(), 'W');