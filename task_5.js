// ключевое слово class определяет экземпляр
class ElectricalAppliance {
	// constructor определяет сигнатуру функции и ее тело(то, что записывалось через this.PROPERTY для функции - конструктора)
	constructor(name) {
		this.device = 'электроприбор',
			this.name = name;
	}

	// вкл/выкл прибор из розетки
	getDeviceIsWorking(power, time, on) {
		let turnOn = on;
		if (on === 1) {
			turnOn = 'Вкл';
		} else {
			turnOn = 'Выкл';
		};

		// вычисление потребляемой мощности
		console.log(`Потребляемая мощность: ${this.name} за ${time} час. = ${power * time}Вт. ${this.name}: ${turnOn}`);
	}
}

// чтобы установить делегирующую связь [[Prototype]] между двумя прототипами функции, используют слово extends
class Parameters extends ElectricalAppliance {
	constructor(name, color) {
		super(name);
		this.color = color;
	}
}

const tableLamp = new Parameters('настольная лампа', 'yellow'); // экземпляр прибора
const laptop = new Parameters('компьютер', 'metallic'); // экземпляр прибора

console.log(tableLamp, laptop);

// передаем значения мощности, времени работы, вкл/выкл прибор из розетки
tableLamp.getDeviceIsWorking(17, 2, 0);
laptop.getDeviceIsWorking(100, 6, 1);