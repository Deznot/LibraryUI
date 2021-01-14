import $ from '../core';
/**
 * метод Modal - ему необходим триггер для вызова модального окна.
 * для этого используется атрибут data-toggle="modal"
 */
$.prototype.modal = function (){
    function _calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        
        return scrollWidth;

    }
    let scroll =_calcScroll();

    for(let i = 0; i < this.length; i++){
        console.log(`scroll `,scroll);
        let target = $(this[i]).getAttr('data-target');
        //target = #examplemodal

        $(this[i]).click((e)=>{
            e.preventDefault();
            $(target).fadeIn(500);
            
            document.body.style.overflow = 'hidden';
            if(document.body.offsetHeight > document.documentElement.clientHeight){
                //если полоса прокрутки есть на странице, то добавляем отступ, иначе страница будет дергаться
                document.body.style.marginRight =  `${scroll}px`;
            }
        });
    }
    let closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem =>{
        $(elem).click(() => {
            $('.modal').fadeOut(500,()=>{
                //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
                document.body.style.overflow = '';
                document.body.style.marginRight =  `0px`;
            });
            
            
        });
    });
    $('.modal').click(e =>{
        if(e.target.classList.contains('modal')){
            $('.modal').fadeOut(500,()=>{
                //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
                document.body.style.overflow = '';
                document.body.style.marginRight =  `0px`;
            });
        }
    });
};
$('[data-toggle="modal"]').modal();