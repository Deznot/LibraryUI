import $ from '../core';
/**
 * методу Modal необходим триггер для вызова модального окна.
 * для этого понадобится атрибут data-toggle="modal" что бы правильно инициализировать этот триггер,
 * data-ratget="#" - необходим для указания, какое именно модальное окно нужно вызвать.
 * @param {boolean} - отвечает за то, создано ли модальное окно программно, или нет. необязательный парамет.
 * @example
 * <a href="#" class=btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>
 */
$.prototype.modal = function (created){
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
        let closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem =>{
            $(elem).click(() => {
                $(target).fadeOut(500,()=>{
                    //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
                    document.body.style.overflow = '';
                    document.body.style.marginRight =  `0px`;
                    if(created){
                        document.querySelector(target).remove();
                    }
                });
                
                
            });
        });
        $(target).click(e =>{
            if(e.target.classList.contains('modal')){
                $(target).fadeOut(500,()=>{
                    //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
                    document.body.style.overflow = '';
                    document.body.style.marginRight =  `0px`;
                    if(created){
                        document.querySelector(target).remove();
                    }
                });
            }
        });
    }
};
$('[data-toggle="modal"]').modal();

/**
 * createModal это метод, который вызывается на определенных элементах,
 * и привязывает определенное модальное окно к этому триггеру.
 * Чаще всего createModal вызывается после того, как пользователь кликнул на какой то элемент.
 * @param {Object} {} - содержит в себе text{
 * text - содержит title для модального окна, и body - текст который будет расположен в модальном окне
 *  title: "some text",
 *  body:   "some text"
 * } и button {
 * содержит количество кнопок, которые мы хотим поместить и их настройки :
 * count: number,
 * settings:[
 *      [
 *          'text'- текст кнопки,
 *          ['',''] - массив содержащий классы стилей
 *          true/false - значение boolean - которая отвечает за то, будет ли кнопка закрывать модальное окно или нет
 *          ()=>{} - колбек функция при надобности
 *      ] 
 * ]
 * }
 *  
 * @example
 * $('#trigger').click(()=>$('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officiis. Provident reiciendis odio error et corrupti, pariatur adipisci eligendi magnam ullam sapiente fugit culpa laborum nulla rerum possimus sed asperiores?'
    },
    btns:{
        count: 3,
        settings:[
            [
                'close',    
                ['btn-danger','mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                ()=>{
                    alert('Данные сохранены');
                }
            ],
            [
                'another button',
                ['btn-warning','ml-10'],
                false,
                ()=>{
                    alert('Hello World');
                }
            ]
        ]
    }
}));
 * 
 */

$.prototype.createModal = function({text , btns} = {}){
    //создаем модальные окна при помощи js
    for(let i = 0; i < this.length; i++){
        let modal = document.createElement('div');
        //modal - оболочка для модульного окна
        modal.classList.add('modal');
        $(modal).setAttr('id', $(this[i]).getAttr('data-target').slice(1)); //устанавливаем id, берем его из 
        //текущего перебераемого элемента, и вырезаем # т.к. он выглядит как #example

        //btns = {count : num, settings: [[text, classNames=[],close,cb]]}
        //обработка кнопок которые будут в модальном окне
        let buttons = [];
        //количество кнопок базирует на переданном атрибуте count 
        for(let j = 0; j < btns.count; j++ ){
            let btn = document.createElement('button');
            let [text,className,close,cb] = btns.settings[j];
            //стилизируем кнопки, j - определяет какую кнопку мы сейчас настраиваем, classNames - это
            //массив по этому можно использовать spread оператор для превращения его, в элементы для classList
            btn.classList.add('btn', ...className);
            //устанавливаем текст внутри этой кнопке, берем из переданных данных
            btn.textContent = text;
            //необходимо узнать будет ли эта кнопка закрывать модальное окно
            if(close){
                $(btn).setAttr('data-close','true');
            }
            if(btns.cb && typeof(cb) === 'function'){
                btn.addEventListener('click', cb);
            }
            buttons.push(btn);
        }

        //наполняем модальное окно контентом, данные берем из переданных при вызове метода 
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        //т.к. в футер просто так массив вставить нельзя, можно перебрать массив превратить каждую ноду в текст,
        //и вставить ее в качестве обычного html, этот метод выведет кнопки на экран, но потеряет коллбэк, ведь мы будем
        //трансформировать ноду в страку, а там коллбэк ищезнет, по этому лучше использовать другой способ:
        //используя метод append

        modal.querySelector(".modal-footer").append(...buttons);//получаем футер на странице, и помещаем с помощью
        //spread оператора кнопки
        document.body.appendChild(modal);//помещаем modal на страницу
        // исправление бага с кучей окон
        $(this[i]).modal(true);//привязываем триггер к новосозданному модальному окну
        $($(this[i]).getAttr('data-target')).fadeIn(500);//вызываем модальное окно на странице
    }
};