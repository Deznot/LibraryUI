import $ from '../core';
/**
 * Метод - setAttr устанавливает атрибут, каждому элементу из $()
 * @param {string} name 
 * @param {*} value 
 * @returns Object - с объектом можно работать дальше
 * @example 
 * $('button').setAttr("disabled", "disabled");
 * //=> {0: button, length: 1}
 */
$.prototype.setAttr = function(name,value){
    for(let i = 0; i < this.length; i++){
        //если перебераемый элемент, имеет свойство hasAttribute, устанавливаем ему атрибут
        if(this[i].hasAttribute){
            this[i].setAttribute(name,value);
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

$.prototype.getAttr = function(attrName){
    //возвращает id для одного элемента
    for(let i = 0; i < this.length; i++){
        if(this[i].hasAttribute){
            return this[i].getAttribute(attrName);
        }
    }
};

// $.prototype.getAttr = function(attrName){
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
$.prototype.removeAttr = function (attrName){
    for(let i = 0; i < this.length; i++){
        if(this[i].hasAttribute){
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
$.prototype.toggleAttr = function (attrName,value){
    for(let i = 0; i < this.length; i++){
        if(this[i].hasAttribute){
            if(this[i].hasAttribute(attrName)){
                this[i].removeAttribute(attrName);
            }else{
                this[i].setAttribute(attrName,value);
            }
        }
    }
    return this;
};

//toggle without value
// $.prototype.toggleAttr = function (attrName){
//     for(let i = 0; i < this.length; i++){
//         if(this[i].toggleAttribute){
//             this[i].toggleAttribute(attrName);
//         }
//     }
//     return this;
// };

