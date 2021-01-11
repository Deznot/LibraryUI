import $ from '../core';


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

$.prototype.eq = function(i){
    let swap = this[i],
        objLength = Object.keys(this).length;

    for(let i = 0; i< objLength; i++){
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function(){
    let parent = this[0].parentNode,
        childs = [...parent.children];
    
    let findMyIndex = (index) =>{
        return index == this[0];
    };

    return childs.findIndex(findMyIndex);

};

$.prototype.find = function(selector){
    let numberOfItems = 0; //общее количество найденных элеменетов
    let copy = Object.assign({},this);
    let counter = 0; //количество новых записанных элементов в this

    for (let i = 0; i < copy.length; i++){
        let arr = copy[i].querySelectorAll(selector);
        if (arr.length == 0){
            continue;
        }

        for(let j = 0; j < arr.length; j++){
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    let objLength = Object.keys(this).length;

    for(;numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }

    return this;
};

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


$.prototype.siblings = function(){
    let counter = 0,
        numbersOfItems = 0,
        copy = Object.assign({},this);

    for(let i = 0; i < 1; i++){
        let arr = copy[i].parentNode.children;

        for(let j = 0; j < arr.length; j++){
            if(copy[i] === arr[j]){
                continue;
                //исключаем из выборки copy[i] элемент чьих соседей мы искали
            }
            this[counter] = arr[j];
            counter++;
        }
        numbersOfItems += arr.length - 1;
    }

    this.length = numbersOfItems;

    let objLength = Object.keys(this).length;
    for(;numbersOfItems < objLength;numbersOfItems++){
        delete this[numbersOfItems];
    }
    return this;
};