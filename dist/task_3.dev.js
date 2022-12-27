"use strict";

// функция, которая создает пустой объект, но без прототипа
function create(obj) {
  var emptyFunction = {};
  return obj = emptyFunction;
} // пустой объект


var object = create('obj');
console.log(object);