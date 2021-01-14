import $ from '../core';

/**
 * show - метод, который перебирает элементы в $() и отображает их на экране
 * 
 */
$.prototype.show = function(){
    for(let i = 0; i < this.length; i++){
        //если, у элемента, нету свойства style, то пропускаем итерацию
        if (!this[i].style){
            continue;
        }else{
            this[i].style.display = '';
        }
    }
    //возвращаем this, чтобы с этим объектом, можно было работать дальше по цепочке chaining
    return this;
};

/**
 * hide - метод, который перебирает элементы в $() и скрывает их.
 */
$.prototype.hide = function(){
    for(let i = 0; i < this.length; i++){
        if (!this[i].style){
            continue;
        }else{
            this[i].style.display = 'none';
        }
    }

    return this;
};

/**
 * toggle - метод, переключающий состояние элемента, из скрытого в отображаемый и наоборот
 */
$.prototype.toggle = function(){
    for(let i = 0; i < this.length; i++){
        if (!this[i].style){
            continue;
        }

        if(this[i].style.display ==='none'){
            this[i].style.display ='';
        }else{
            this[i].style.display ='none';
        }
    }
    return this;
};