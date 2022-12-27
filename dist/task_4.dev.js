"use strict";

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
  this.device = 'электроприбор', this.name = name;
} // функция с методами, которые включают/выключают прибор из розетки.


ElectricalAppliance.prototype.getDeviceIsWorking = function (power, time, on) {
  var turnOn = on;

  if (on === 1) {
    turnOn = 'Вкл';
  } else {
    turnOn = 'Выкл';
  }

  ; // вычисление потребляемой мощности

  console.log("\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: ".concat(this.name, " \u0437\u0430 ").concat(time, " \u0447\u0430\u0441. = ").concat(power * time, "\u0412\u0442. ").concat(this.name, ": ").concat(turnOn));
}; // собственные свойства


function Parameters(name, color) {
  this.name = name, this.color = color;
} // делегирующая связь [[Prototype]]


Parameters.prototype = new ElectricalAppliance();
var tableLamp = new Parameters('настольная лампа', 'yellow'); // экземпляр прибора

var laptop = new Parameters('компьютер', 'metallic'); // экземпляр прибора

console.log(tableLamp, laptop); // передаем значения мощности, времени работы, вкл/выкл прибор из розетки

tableLamp.getDeviceIsWorking(17, 2, 0);
laptop.getDeviceIsWorking(100, 6, 1);