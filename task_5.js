class Power {
	constructor(name, power) {
		this.name = name;
		this.power = power;
		this.isPlugged = false;
	}

	getDeviceIsWorking() {
		console.log(this.name + " работает!");
		this.isPlugged = true;
	}

	getSelfPower() {
		return this.isPlugged ? this.power : 0;
	}
}

const tableLamp = new Power('Настольная лампа', 17);
const laptop = new Power('Компьютер', 100);


tableLamp.getDeviceIsWorking();
console.log(tableLamp.getSelfPower(), 'W');

laptop.getDeviceIsWorking();
console.log(laptop.getSelfPower(), 'W');