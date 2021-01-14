/**
 * 
 * @param {selector} selector - css селектор 
 * @returns {Object} - объект, содержащий найденную колекцию
 * @example 
 * $('div');
 * //=> {0: div.container, 1: div.wrap length: 2}
 */

const $ = function (selector){
    return new $.prototype.init(selector);
};
$.prototype.init = function(selector){
    if(!selector){
        return this; //{}
    }
    //Необходимо проверить не является ли selector html элементом, если он является нодой, 
    //то записываем эту ноду в объект
    if(selector.tagName){
        this[0] = selector;
        this.length = 1;
        return this;// что бы не выполнялся дальнейший код,который работает с псевдо массивами
    }
    // если передан css selector, то работаем с псевдо массивом
    Object.assign(this,document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;
// записываем в прототип объекта который будет возвращаться из функции init прототип главной функции

window.$ = $;

export default $;