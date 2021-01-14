import $ from '../core';
/**
 * dropdown - 
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