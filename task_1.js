// объект
const person = {
	name: 'Ivan',
	surname: 'Ivanov',
	age: 18,
	position: 'developer',
}

// функция, которая принимает в качестве аргумента объект
function returnKeysAndValues(person) {
	// Итерация по объекту
	for (let key in person) {

		if (person.hasOwnProperty(key)) {
			// вывод в консоль всех ключей и значений только собственных свойств
			console.log(`${key}: ${person[key]}`);
		};
	};
};

returnKeysAndValues(person);