"use strict";

// функция, которая создает пустой объект, но без прототипа
function createObjNull() {
  return Object.create(null);
}

var obj = createObjNull();
console.log(obj);