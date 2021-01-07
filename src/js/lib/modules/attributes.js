import $ from '../core';

$.prototype.setAttr = function(name,value){
    for(let i = 0; i < this.length; i++){
        if(this[i].hasAttribute){
            this[i].setAttribute(name,value);
        }
        return this;
    }
};

$.prototype.getAttr = function(attrName){
    for(let i = 0; i < this.length; i++){
        if(this[i].hasAttribute){
            return this[i].getAttribute(attrName);
        }
        return this;
    }
};

$.prototype.removeAttr = function (attrName){
    for(let i = 0; i < this.length; i++){
        if(this[i].hasAttribute){
            this[i].removeAttribute(attrName);
        }
        return this;
    }
};

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
        return this;
    }
};

//toggle without value
// $.prototype.toggleAttr = function (attrName){
//     for(let i = 0; i < this.length; i++){
//         if(this[i].toggleAttribute){
//             this[i].toggleAttribute(attrName);
//         }
//         return this;
//     }
// };

