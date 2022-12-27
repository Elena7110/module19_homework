// объект
const person = {
	name: 'Ivan',
	surname: 'Ivanov',
	age: 18,
	position: 'developer',
}

// функция, которая принимает в качестве аргумента строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем
function find(str, obj) {

	console.log(str in obj);

};

// функция должна возвращает true или false
find('surname', person);