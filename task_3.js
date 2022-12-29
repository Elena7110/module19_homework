// функция, которая создает пустой объект, но без прототипа
function createObjNull() {
	return Object.create(null);
}

const obj = createObjNull();
console.log(obj);