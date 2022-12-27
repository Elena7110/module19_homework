"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ключевое слово class определяет экземпляр
var ElectricalAppliance =
/*#__PURE__*/
function () {
  // constructor определяет сигнатуру функции и ее тело(то, что записывалось через this.PROPERTY для функции - конструктора)
  function ElectricalAppliance(name) {
    _classCallCheck(this, ElectricalAppliance);

    this.device = 'электроприбор', this.name = name;
  } // вкл/выкл прибор из розетки


  _createClass(ElectricalAppliance, [{
    key: "getDeviceIsWorking",
    value: function getDeviceIsWorking(power, time, on) {
      var turnOn = on;

      if (on === 1) {
        turnOn = 'Вкл';
      } else {
        turnOn = 'Выкл';
      }

      ; // вычисление потребляемой мощности

      console.log("\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: ".concat(this.name, " \u0437\u0430 ").concat(time, " \u0447\u0430\u0441. = ").concat(power * time, "\u0412\u0442. ").concat(this.name, ": ").concat(turnOn));
    }
  }]);

  return ElectricalAppliance;
}(); // чтобы установить делегирующую связь [[Prototype]] между двумя прототипами функции, используют слово extends


var Parameters =
/*#__PURE__*/
function (_ElectricalAppliance) {
  _inherits(Parameters, _ElectricalAppliance);

  function Parameters(name, color) {
    var _this;

    _classCallCheck(this, Parameters);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Parameters).call(this, name));
    _this.color = color;
    return _this;
  }

  return Parameters;
}(ElectricalAppliance);

var tableLamp = new Parameters('настольная лампа', 'yellow'); // экземпляр прибора

var laptop = new Parameters('компьютер', 'metallic'); // экземпляр прибора

console.log(tableLamp, laptop); // передаем значения мощности, времени работы, вкл/выкл прибор из розетки

tableLamp.getDeviceIsWorking(17, 2, 0);
laptop.getDeviceIsWorking(100, 6, 1);