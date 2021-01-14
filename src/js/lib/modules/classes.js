import $ from '../core';

/**
 * Метод addClass добавляет классы к элементам из $()
 * @param  {...any} classes 
 * @returns Object - с уже добавленными классами к элементам 
 * @example
 * $('.btn').addClass('red','blue','green');
 * //=>{0:button.btn.red.blue.green, length: 1}
 */
$.prototype.addClass = function(...classes){
    for(let i = 0; i < this.length; i++){
        if(this[i].classList){
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
$.prototype.removeClass = function(...classes){
    for(let i = 0; i < this.length; i++){
        if(this[i].classList){
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
$.prototype.toggleClass = function(classes){
    for(let i = 0; i < this.length; i++){
        if(this[i].classList){
            this[i].classList.toggle(classes);
        }
    }
    return this;
};