import $ from '../core';

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
$.prototype.html = function(content){
    for (let i = 0; i < this.length; i++){
        if(content){
            this[i].innerHTML = content;
        }else{
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
$.prototype.eq = function(i){
    return $(this[i]);
    // let swap = this[i],
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
$.prototype.index = function(){
    let parent = this[0].parentNode,
        childs = [...parent.children];//превращаем псевдо массив в массив
    //parent получает родителя
    //childs - содержит всех детей родителя

    let findMyIndex = (item) =>{
        //в перебираемсых items ищем нужный нам
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
    //когда функция вернет true, то findIndex вернет номер этого эл-та 

};

/**
 * Метод find - находит определенные элементы по селектору, внутри уже найденных
 * @param {*} selector 
 * @returns Object - который сод. найд элементы по селектору
 * @example
 * $('div').eq(2).find('.active');
 * //=> {0: div.active, 1: div.active, length:2}
 */
$.prototype.find = function(selector){
    let numberOfItems = 0; //общее количество найденных элеменетов
    let copy = Object.assign({},this);// что бы избежать багов делаем копию
    let counter = 0; //количество новых записанных элементов в this

    for (let i = 0; i < copy.length; i++){
        let arr = copy[i].querySelectorAll(selector);
        //если не одного элемента arr не найдено
        if (arr.length == 0){
            continue;
        }
        // если элементы найдены, то перезаписываем их в главный объект this
        //начиная с 0
        for(let j = 0; j < arr.length; j++){
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems; // Обновляем количество элементов в главном объекте

    let objLength = Object.keys(this).length; //узнаем кол-во элементов в главном объекте

    //Необходимо удалить свойства, которые не были перезаписаны
    for(;numberOfItems < objLength; numberOfItems++){
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
$.prototype.closest = function(selector){
    let counter = 0;

    for (let i = 0; i < this.length; i++){
        if(this[i].closest(selector) === null){
            this[i] = 'empty';
            counter++;
        }else{
            this[i] = this[i].closest(selector);
            counter++;
        }
        
    }

    let objLength = Object.keys(this).length;
    
    for(;counter < objLength; counter++){
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
$.prototype.siblings = function(){
    let counter = 0,
        numbersOfItems = 0,
        copy = Object.assign({},this);

    for(let i = 0; i < 1; i++){
        // i < 1, для того что бы не дублировать соседей
        let arr = copy[i].parentNode.children; // получаем всех детей родителя

        for(let j = 0; j < arr.length; j++){
            if(copy[i] === arr[j]){
                continue;
                //исключаем из выборки copy[i] элемент чьих соседей мы искали
            }
            this[counter] = arr[j];
            counter++;
        }
        numbersOfItems += arr.length - 1;//- 1 т.к. мы убрали элемент из выборки
    }

    this.length = numbersOfItems;

    let objLength = Object.keys(this).length;
    for(;numbersOfItems < objLength;numbersOfItems++){
        delete this[numbersOfItems];
    }
    return this;
};