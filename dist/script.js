/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * dropdown - 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    let id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * метод Modal - ему необходим триггер для вызова модального окна.
 * для этого используется атрибут data-toggle="modal"
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function () {
  function _calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  let scroll = _calcScroll();

  for (let i = 0; i < this.length; i++) {
    console.log(`scroll `, scroll);
    let target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target'); //target = #examplemodal

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';

      if (document.body.offsetHeight > document.documentElement.clientHeight) {
        //если полоса прокрутки есть на странице, то добавляем отступ, иначе страница будет дергаться
        document.body.style.marginRight = `${scroll}px`;
      }
    });
  }

  let closeElements = document.querySelectorAll('[data-close]');
  closeElements.forEach(elem => {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').fadeOut(500, () => {
        //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      });
    });
  });
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').click(e => {
    if (e.target.classList.contains('modal')) {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').fadeOut(500, () => {
        //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      });
    }
  });
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @param {selector} selector - css селектор 
 * @returns {Object} - объект, содержащий найденную колекцию
 * @example 
 * $('div');
 * //=> {0: div.container, 1: div.wrap length: 2}
 */
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  } //Необходимо проверить не является ли selector html элементом, если он является нодой, 
  //то записываем эту ноду в объект


  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this; // что бы не выполнялся дальнейший код,который работает с псевдо массивами
  } // если передан css selector, то работаем с псевдо массивом


  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype; // записываем в прототип объекта который будет возвращаться из функции init прототип главной функции

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/**
 * lib добавляет в функцию $ различные методы
 */









/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод html - принимает в себя какой то content, который мы хотим поместить во внутрь элемента
 * имеет двойной функционал:
 * 1. если content передан, тогда мы замещаем контент
 * 2. иначе, получаем содержимое этого элемента на странице
 * @param {*} content 
 * @returns Object или содержимое элемента на странице, если получено содержимое, то работать по цепочке,
 *  уже будет невозможно
 * @example
 * $('button').html());
 * //=> какой то текст из кнопки
 * 
 * $('button').html('hello');
 * //=> {0: button, length: 1}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};
/**
 * Метод eq - получает определенный элемент по номеру.
 * @param {*} i - номер необходимого элемента из выборки, нумерация нач с 0
 * @returns Object
 * @example
 * $('div').eq(2).addClass('active');
 * //=> {}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  return Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]); // let swap = this[i],
  //     objLength = Object.keys(this).length;
  // for(let i = 0; i < objLength; i++){
  //     delete this[i];
  // }
  // this[0] = swap;
  // this.length = 1;
  // return this;
};
/**
 * Метод index - используется на одном элементе. Получает номер элемента по
 * порядку, среди тех элементов, которые имеют общего родителя.
 * т.е. узнает какой элемент по порядку, среди своих сверстников, элементов 
 * которые подходят по тому же селектору и имеют общего родителя
 * @returns {number}
 * @example
 * $(div).click(function(){
 *      console.log($(this).index());
 * })
 * //=> 2 - номер нажатого div по порядку
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  let parent = this[0].parentNode,
      childs = [...parent.children]; //превращаем псевдо массив в массив
  //parent получает родителя
  //childs - содержит всех детей родителя

  let findMyIndex = item => {
    //в перебираемсых items ищем нужный нам
    return item == this[0];
  };

  return childs.findIndex(findMyIndex); //когда функция вернет true, то findIndex вернет номер этого эл-та 
};
/**
 * Метод find - находит определенные элементы по селектору, внутри уже найденных
 * @param {*} selector 
 * @returns Object - который сод. найд элементы по селектору
 * @example
 * $('div').eq(2).find('.active');
 * //=> {0: div.active, 1: div.active, length:2}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; //общее количество найденных элеменетов

  let copy = Object.assign({}, this); // что бы избежать багов делаем копию

  let counter = 0; //количество новых записанных элементов в this

  for (let i = 0; i < copy.length; i++) {
    let arr = copy[i].querySelectorAll(selector); //если не одного элемента arr не найдено

    if (arr.length == 0) {
      continue;
    } // если элементы найдены, то перезаписываем их в главный объект this
    //начиная с 0


    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems; // Обновляем количество элементов в главном объекте

  let objLength = Object.keys(this).length; //узнаем кол-во элементов в главном объекте
  //Необходимо удалить свойства, которые не были перезаписаны

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
/**
 * метод closest - ищет ближайший родительский элемент (или сам элемент), 
 * который соответствует заданному CSS-селектору, для всех элементов объекта из $() 
 * @param {*} selector 
 * @returns Object
 * @example
 * $('.some').closest('.find');
 * //=> {0: div.find, 1:div.find, length: 2}
 * 
 * $('.some').closest('.findqw');
 * //=>{0: empty, 1: empty, length: 2}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) === null) {
      this[i] = 'empty';
      counter++;
    } else {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  let objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};
/**
 * Метод siblings - получает все соседние элементы, не включая сам элемент
 * @returns Object - содержащий все соседние элементы
 * @example 
 * $('.some').eq(0).siblings());
 * //=> {0: div.some, 1: div.some length: 2}
 * 
 * $('.find').siblings());
 * //=>{0: div, 2: div.active, length: 2};
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let counter = 0,
      numbersOfItems = 0,
      copy = Object.assign({}, this);

  for (let i = 0; i < 1; i++) {
    // i < 1, для того что бы не дублировать соседей
    let arr = copy[i].parentNode.children; // получаем всех детей родителя

    for (let j = 0; j < arr.length; j++) {
      if (copy[i] === arr[j]) {
        continue; //исключаем из выборки copy[i] элемент чьих соседей мы искали
      }

      this[counter] = arr[j];
      counter++;
    }

    numbersOfItems += arr.length - 1; //- 1 т.к. мы убрали элемент из выборки
  }

  this.length = numbersOfItems;
  let objLength = Object.keys(this).length;

  for (; numbersOfItems < objLength; numbersOfItems++) {
    delete this[numbersOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод - setAttr устанавливает атрибут, каждому элементу из $()
 * @param {string} name 
 * @param {*} value 
 * @returns Object - с объектом можно работать дальше
 * @example 
 * $('button').setAttr("disabled", "disabled");
 * //=> {0: button, length: 1}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    //если перебераемый элемент, имеет свойство hasAttribute, устанавливаем ему атрибут
    if (this[i].hasAttribute) {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};
/**
 * метод getAttr проверяет есть ли атрибут у элементов из $()
 * Подумать над этим методом!!!!!!!!!!!!!
 * @param {string} attrName 
 * @returns {string} - id
 * @example 
 * $('button').getAttr('disabled');
 * //=> disabled или null
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (attrName) {
  //возвращает id для одного элемента
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute) {
      return this[i].getAttribute(attrName);
    }
  }
}; // $.prototype.getAttr = function(attrName){
//     //возвращает объект с id если они имеются
//     for(let i = 0; i < this.length; i++){
//         if(this[i].hasAttribute){
//             this[i] = this[i].getAttribute(attrName);
//         }
//     }
//     return this;
// };
// результат для этого варианта//=> {0: null, 1: disabled, length: 2}

/**
 * Метод removeAttr удаляет переданный в него атрибут из всех элементов ${}
 * @param {*} attrName 
 * @returns Object с объектом можно работать дальше
 * @example
 * $('button').removeAttr('disabled');
 * //=>{0:button, 1:button, length: 2}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute) {
      this[i].removeAttribute(attrName);
    }
  }

  return this;
};
/**
 * Метод toggleAttr принимает имя атрибуда и его значение, и проверяет элементы объекта $(), если они уже содержат 
 * переданный атрибут, то удаляет его, если нет, то добавляет
 * @param {*} attrName 
 * @param {*} value 
 * @returns Object - c которым можно работать дальше
 * @example
 * $('button').toggleAttr('disabled','disabled');
 * //{0:button, 1:button, length: 2}
 */
//toggle с уст. значения value


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (attrName, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute) {
      if (this[i].hasAttribute(attrName)) {
        this[i].removeAttribute(attrName);
      } else {
        this[i].setAttribute(attrName, value);
      }
    }
  }

  return this;
}; //toggle without value
// $.prototype.toggleAttr = function (attrName){
//     for(let i = 0; i < this.length; i++){
//         if(this[i].toggleAttribute){
//             this[i].toggleAttribute(attrName);
//         }
//     }
//     return this;
// };

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод addClass добавляет классы к элементам из $()
 * @param  {...any} classes 
 * @returns Object - с уже добавленными классами к элементам 
 * @example
 * $('.btn').addClass('red','blue','green');
 * //=>{0:button.btn.red.blue.green, length: 1}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...classes);
    }
  }

  return this;
};
/**
 * Метод - removeClass удаляет классы у элементов из $()
 * @param  {...any} classes 
 * @returns Object - с элементами, без удаленных классов
 * @example
 * $('.btn').removeClass('red','blue','green');
 * //=>{0:button.btn, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...classes);
    }
  }

  return this;
};
/**
 * Метод toggleClass проверяет, если переданный класс у элемента присутствует,
 * то удаляет его, иначе добавляет
 * @param {*} classes 
 * @returns Object - c элементами, без удаленных или с добавленными классами
 * @example
 * $('.btn-dark').toggleClass('red');
 * //=> {0:button.btn.red, length: 1}
 * или, если класс уже был
 * //=> {0:button.btn, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.toggle(classes);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * show - метод, который перебирает элементы в $() и отображает их на экране
 * 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    //если, у элемента, нету свойства style, то пропускаем итерацию
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = '';
    }
  } //возвращаем this, чтобы с этим объектом, можно было работать дальше по цепочке chaining


  return this;
};
/**
 * hide - метод, который перебирает элементы в $() и скрывает их.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};
/**
 * toggle - метод, переключающий состояние элемента, из скрытого в отображаемый и наоборот
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * метод animateOverTime - техническая функция,отвечающая за анимацию
 * @param {number} dur - как долго будет выполнятся анимация
 * @param {function} cb -коллбэк функция, необязательный параметр
 * @param {*} fin - функция которая запускается после того как анимация закончилась
 * необязательный параметр
 * @returns {function} _animateOverTime;
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart; // алгоритм работы requestAnimationFrame необх создать функцию, которая будет запускаться
  //до определенного условия, если условие не выполняется, анимация прекращается,
  //вычисляем начало анимации, и сравниваем с временем переданным как аргумент

  function _animateOverTime(time) {
    //_animateOverTime - техническая функция для requestAnimationFrame
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart; // вычисляем сколько времени прошлоб(прогресс)

    let complection = Math.min(timeElapsed / dur, 1); //отвечает за изменение параметров на странице

    cb(complection); //вызываем коллбэк

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};
/**
 * метод fadeIn - добавляет элементам эффект появления
 * @param {*} dur  - обязательный аргумент, время
 * @param {*} display 
 * @param {*} fin 
 * @return Object
 * @example
 * $('.butt').fadeIn(2000);
 * //=> {0: button.butt, length : 1};
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display = 'block', fin) {
  for (let i = 0; i < this.length; i++) {
    //нужно убедится, что элемент показан на странице
    this[i].style.display = display;

    let _fadeIn = complection => {
      //техническая функция, при запуске принимает complection
      //и изменяет opacity от 0 до 1
      this[i].style.opacity = complection;
    };

    let ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};
/**
 * метод fadeOut - добавляет элементам эффект исчезновения 
 * @param {*} dur 
 * @param {*} fin 
 * @return Object
 * @example
 * $('.butt').fadeOut(2000);
 * //=> {0: button.butt, length : 1};
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    let _fadeOut = complection => {
      this[i].style.opacity = 1 - complection; //уменьшаем opacity

      if (complection === 1) {
        //если opacity - 0, скрываем элемент со страницы
        this[i].style.display = 'none';
      }
    };

    let ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};
/**
 * метод fadeToggle - определяет, нам нужно показать или скрыть элемент, и делает это.
 * @param {*} dur - обязательный параметр
 * @param {*} display 
 * @param {*} fin 
 * @returns Object
 * @example
 * $('.active').fadeToggle(1800);
 * //=> {0: button.active, 1: button.active, length: 2}
 * 
 * $('.btn-dark').on('click',function(){
 *  $(this).fadeToggle(1000);
 * });
 * //=> {0: button.btn-dark, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    //сейчас мы не можем на прямую проверить инлайн стили,т.к. в верстке обычно используются
    //не инлайн стили,а стили прописаные в css. По этому можно использовать getComputedStyle
    if (window.getComputedStyle(this[i]).display === 'none') {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(dur, display, fin);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(dur, fin);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод on - добавляет обработчики событий к элементам в $(), принимает в себя название события и callback-функцию
 * @param {*} eventName 
 * @param {*} callback 
 * @returns Object 
 * @example
 * $('.btn-dark').on('click',()=>{
 *   alert('click');
 * });
 * //=> {0:button.btn-dark, length: 1}
 * или 
 * $('button').on('click', function(){
 *      $(this).toggleClass('active');
 * //this кнопка на которую нажали
 * //метод toggleClass не может работать с обычной кнопкой, ему нужен объект из $()
 * })
 * 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  //методу необходимо два аргумента
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};
/**
 * Метод off - убирает обработчик события с элементов, что бы убрать событие,
 *  в него нужно передать строго то же самое событие
 * @param {*} eventName 
 * @param {*} callback 
 * @returns Object
 * @example
 * $('.btn-dark').on('click',sayHello);
 * function sayHello(){alert('Hello')}
 * $('.btn-dark').off('click',sayHello);
 * функция передаётся одна и таже, по этому мы сможем убрать обработчик
 * //=> {0:button.btn-dark, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  //методу необходимо два аргумента
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};
/**
 * Метод click - имеет двойной функционал:
 * 1.когда обработчик был передан, тогда на элемент навешивается событие клика
 * с выполнением переданной функции
 * 2.когда метод используется без передачи аргументов, 
 * тогда будет произведен клик по этому элементу
 * @param {*} handler
 * @returns Object
 * @example 
 * function sayHello(){alert('Hello')}
 * $('.btn-dark').click(sayHello);
 * или
 * $('.btn-dark').click(()=>{console.log('hello')});
 * результат:
 * //=>{0:button.btn-dark, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap').html(`
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action#2</a>
            <a href="#" class="dropdown-item">Action#3</a>
        </div>
    </div>
    `);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown(); // console.log($('.btn-dark').on('click',()=>{
//     console.log(this);
//     $(this).fadeToggle(1000);
// }));
// $('#first').on('click',()=>{
//     $('div').eq(1).fadeToggle(800);
// });
// $('[data-count="second"]').on('click',()=>{
//     $('div').eq(2).fadeToggle(800);
// });
// $('button').eq(2).on('click',()=>{
//     $('.w-500').fadeToggle(800);
// });
// $('button').on('click', function(){
//     $('div').eq(1).toggleClass('active');
// });
// $('img').setAttr('src','qweqweqe');
// $('img').on('click',function(){
//     $(this).toggleAttr('src','Den');
// });
// $('div').click(function(){
//     console.log($(this).index());
// });
// console.log($('div').find('.more'));
// console.log($('.some').closest('.findmeq').addClass('qweqw'));
// console.log($('.some').siblings()); - рассмотреть вариант когда искомый объект не один на странице
// console.log($('.some').siblings());
// $('.findme').fadeOut(1800); //анимация исчезновения
// setTimeout(()=>{$('.findme').fadeIn(1800);},2000);// анимация появления

/***/ })

/******/ });
//# sourceMappingURL=script.js.map