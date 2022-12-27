// функция, которая создает пустой объект, но без прототипа
function create(obj) {
	const emptyFunction = {};
	return obj = emptyFunction;
}

// пустой объект
let object = create('obj');

console.log((object));