"use strict";

// объект
var person = {
  name: 'Ivan',
  surname: 'Ivanov',
  age: 18,
  position: 'developer'
}; // функция, которая принимает в качестве аргумента объект

function returnKeysAndValues(person) {
  // Итерация по объекту
  for (var key in person) {
    if (person.hasOwnProperty(key)) {
      // вывод в консоль всех ключей и значений только собственных свойств
      console.log("".concat(key, ": ").concat(person[key]));
    }

    ;
  }

  ;
}

;
returnKeysAndValues(person);