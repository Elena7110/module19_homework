// Родительская функция с методами, которые включают/выключают прибор из розетки.
// function Power(name, power) { //nfr как приборы и мощьность разные, их можно передавать, как аргумент, функцие
// 	this.name = name; // в объект this записывается новое свойство
// 	this.power = power; // в объект this записывается новое свойство
// 	this.isWorking = false; // работает ли прибор
// }

// //  делегирующая связь [[Prototype]] , создаем метод через [[Prototype]]
// Power.prototype.getDeviceIsWorking = function () {
// 	console.log(this.name + " работает!");
// 	this.isWorking = true; // прибор подключен
// }


// Power.prototype.getSelfPower = function () {
// 	return this.isWorking ? this.power : 0; // если прибор подключен, получаем его мощность
// }


// const tableLamp = new Power('Настольная лампа', 17); // новый экземпляр функции-конструктора
// const laptop = new Power('Компьютер', 100); // новый экземпляр функции-конструктора



// //  включаем лампу
// tableLamp.getDeviceIsWorking();
// console.log(tableLamp.getSelfPower(), 'W');

// //  включаем компьютер
// laptop.getDeviceIsWorking();
// console.log(laptop.getSelfPower(), 'W');

// -- -- -- -- -

// родительскую функцию
function ElectricalAppliance(name) {
	this.device = 'электроприбор',
		this.name = name

}

// функция с методами, которые включают/выключают прибор из розетки.
ElectricalAppliance.prototype.getDeviceIsWorking = function (power, time, on) {
	let turnOn = on;
	if (on === 1) {
		turnOn = 'Вкл';
	} else {
		turnOn = 'Выкл';
	};

	// вычисление потребляемой мощности
	console.log(`Потребляемая мощность: ${this.name} за ${time} час. = ${power * time}Вт. ${this.name}: ${turnOn}`);
};

// собственные свойства
function Parameters(name, color) {
	this.name = name,
		this.color = color
}

// делегирующая связь [[Prototype]]
Parameters.prototype = new ElectricalAppliance();

const tableLamp = new Parameters('настольная лампа', 'yellow'); // экземпляр прибора
const laptop = new Parameters('компьютер', 'metallic'); // экземпляр прибора

console.log(tableLamp, laptop);

// передаем значения мощности, времени работы, вкл/выкл прибор из розетки
tableLamp.getDeviceIsWorking(17, 2, 0);
laptop.getDeviceIsWorking(100, 6, 1);