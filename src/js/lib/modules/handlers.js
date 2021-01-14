import $ from '../core';
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
$.prototype.on = function(eventName,callback){
    //методу необходимо два аргумента
    if(!eventName || !callback){
        return this;
    }
    for(let i = 0; i < this.length; i++){
        this[i].addEventListener(eventName,callback);
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

$.prototype.off = function(eventName,callback){
    //методу необходимо два аргумента
    if(!eventName || !callback){
        return this;
    }
    for(let i = 0; i < this.length; i++){
        this[i].removeEventListener(eventName,callback);
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
$.prototype.click = function(handler){
    for(let i = 0; i < this.length; i++){
        if(handler){
            this[i].addEventListener('click',handler);
        }else{
            this[i].click();
        }
    }
    return this;
};