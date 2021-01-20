import $ from '../core';
/**
 * dropdown - 
 * что бы не вазникло бага с двойным тоглом, нужно при создании кнопок через js, не захватывать остальные кнопки
 */
$.prototype.dropdown = function(){
    for(let i = 0; i < this.length; i++){    
        let id = $(this[i]).getAttr('id');

        $(this[i]).click(()=>{
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();