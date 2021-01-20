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

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headActive = "accordion-head--active", contentActive = "accordion-content--active", paddings = 40) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion .accordion-head').accordion();

/***/ }),

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
 * что бы не вазникло бага с двойным тоглом, нужно при создании кнопок через js, не захватывать остальные кнопки
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
 * методу Modal необходим триггер для вызова модального окна.
 * для этого понадобится атрибут data-toggle="modal" что бы правильно инициализировать этот триггер,
 * data-ratget="#" - необходим для указания, какое именно модальное окно нужно вызвать.
 * @param {boolean} - отвечает за то, создано ли модальное окно программно, или нет. необязательный парамет.
 * @example
 * <a href="#" class=btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
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
    let closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500, () => {
          //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;

          if (created) {
            document.querySelector(target).remove();
          }
        });
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500, () => {
          //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;

          if (created) {
            document.querySelector(target).remove();
          }
        });
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();
/**
 * createModal это метод, который вызывается на определенных элементах,
 * и привязывает определенное модальное окно к этому триггеру.
 * Чаще всего createModal вызывается после того, как пользователь кликнул на какой то элемент.
 * @param {Object} {} - содержит в себе text{
 * text - содержит title для модального окна, и body - текст который будет расположен в модальном окне
 *  title: "some text",
 *  body:   "some text"
 * } и button {
 * содержит количество кнопок, которые мы хотим поместить и их настройки :
 * count: number,
 * settings:[
 *      [
 *          'text'- текст кнопки,
 *          ['',''] - массив содержащий классы стилей
 *          true/false - значение boolean - которая отвечает за то, будет ли кнопка закрывать модальное окно или нет
 *          ()=>{} - колбек функция при надобности
 *      ] 
 * ]
 * }
 *  
 * @example
 * $('#trigger').click(()=>$('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officiis. Provident reiciendis odio error et corrupti, pariatur adipisci eligendi magnam ullam sapiente fugit culpa laborum nulla rerum possimus sed asperiores?'
    },
    btns:{
        count: 3,
        settings:[
            [
                'close',    
                ['btn-danger','mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                ()=>{
                    alert('Данные сохранены');
                }
            ],
            [
                'another button',
                ['btn-warning','ml-10'],
                false,
                ()=>{
                    alert('Hello World');
                }
            ]
        ]
    }
}));
 * 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  //создаем модальные окна при помощи js
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div'); //modal - оболочка для модульного окна

    modal.classList.add('modal');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).setAttr('id', Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target').slice(1)); //устанавливаем id, берем его из 
    //текущего перебераемого элемента, и вырезаем # т.к. он выглядит как #example
    //btns = {count : num, settings: [[text, classNames=[],close,cb]]}
    //обработка кнопок которые будут в модальном окне

    let buttons = []; //количество кнопок базирует на переданном атрибуте count 

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      let [text, className, close, cb] = btns.settings[j]; //стилизируем кнопки, j - определяет какую кнопку мы сейчас настраиваем, classNames - это
      //массив по этому можно использовать spread оператор для превращения его, в элементы для classList

      btn.classList.add('btn', ...className); //устанавливаем текст внутри этой кнопке, берем из переданных данных

      btn.textContent = text; //необходимо узнать будет ли эта кнопка закрывать модальное окно

      if (close) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).setAttr('data-close', 'true');
      }

      if (btns.cb && typeof cb === 'function') {
        btn.addEventListener('click', cb);
      }

      buttons.push(btn);
    } //наполняем модальное окно контентом, данные берем из переданных при вызове метода 


    modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `; //т.к. в футер просто так массив вставить нельзя, можно перебрать массив превратить каждую ноду в текст,
    //и вставить ее в качестве обычного html, этот метод выведет кнопки на экран, но потеряет коллбэк, ведь мы будем
    //трансформировать ноду в страку, а там коллбэк ищезнет, по этому лучше использовать другой способ:
    //используя метод append

    modal.querySelector(".modal-footer").append(...buttons); //получаем футер на странице, и помещаем с помощью
    //spread оператора кнопки

    document.body.appendChild(modal); //помещаем modal на страницу
    // исправление бага с кучей окон

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true); //привязываем триггер к новосозданному модальному окну

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target')).fadeIn(500); //вызываем модальное окно на странице
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * tab - метод для работы с табами на странице. У табов должны быть item или меню, на которое
 * мы будем нажимать, контекст, который содержит информацию в зависимости от нажатого item
 * data-tabpanel необходимый атрибут по которому находим итемы на странице.
 * @example
 * пример html верстки.
 * tab-item--active - отвечает за нажатый в данный момент item
 * tab-content--active - показанный в данный момент контент
 *  <div class="tab mt-20 block-center">
 *      <div class="tab-panel" data-tabpanel>
 *          <div class="tab-item tab-item--active">Content 1</div>
 *          <div class="tab-item">Content 2</div>
 *      </div>
 *      <div class="tab-content tab-content--active">
 *          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 *      </div>
 *      <div class="tab-content">
 *          Lorem ipsum dolor sit amet consectetur 
 *      </div>
 *  </div>
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    //навешиваем событие click на item
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active') //при нажатии на item делаем его активным, добавляем класс active
      .siblings() //получаем соседей без нажатого элемента
      .removeClass('tab-item--active') //удаляем у них класс активности
      .closest('.tab') //ищем общего родителя
      .find('.tab-content') //внутри родителя ищем все элементы содержащие какой-то контент
      .removeClass('tab-content--active') //убираем все классы активности у контента
      //необходимо узнать номер того элеменка в который мы кликнули в табах и эту цифру передать дальше
      .eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()) //ищем номер элемента по порядку, на котором произошло событие
      //this[i] - эл-т на который кликнул пользователь. Т.е.среди эл-то tab-content используем элемент,по 
      //опр номеру, и передаем его в метод eq
      .addClass('tab-content--active'); //добавляем класс активности нужному
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

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
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
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

  for (let i = 0; i < this.length; i++) {
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
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap .dropdown-toggle').dropdown();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').click(() => Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officiis. Provident reiciendis odio error et corrupti, pariatur adipisci eligendi magnam ullam sapiente fugit culpa laborum nulla rerum possimus sed asperiores?'
  },
  btns: {
    count: 3,
    settings: [['close', ['btn-danger', 'mr-10'], true], ['Save changes', ['btn-success'], false, () => {
      alert('Данные сохранены');
    }], ['another button', ['btn-warning', 'ml-10'], false, () => {
      alert('Hello World');
    }]]
  }
}));
{
  /* <button class="btn btn-danger" data-close>Close</button> */
}
{
  /* <button class="btn btn-success">Save changes</button> */
} // console.log($('.btn-dark').on('click',()=>{
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