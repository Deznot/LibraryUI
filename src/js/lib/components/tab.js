import $ from '../core';
/**
 * tab - метод для работы с табами на странице. У табов должны быть item или меню, на которое
 * мы будем нажимать, контекст, который содержит информацию в зависимости от нажатого item
 * data-tabpanel необходимый атрибут по которому находим итемы на странице.
 * @example
 * пример html верстки.
 * tab-item--active - отвечает за нажатый в данный момент item
 * tab-content--active - показанный в данный момент контент
 *  <div class="tab mt-20 block-center">
 *      <div class="tab-panel" data-tabpanel>
 *          <div class="tab-item tab-item--active">Content 1</div>
 *          <div class="tab-item">Content 2</div>
 *      </div>
 *      <div class="tab-content tab-content--active">
 *          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 *      </div>
 *      <div class="tab-content">
 *          Lorem ipsum dolor sit amet consectetur 
 *      </div>
 *  </div>
 */


$.prototype.tab = function(){
    for (let i = 0; i < this.length; i++){
        //навешиваем событие click на item
        $(this[i]).on('click',() =>{
            $(this[i])
                .addClass('tab-item--active')//при нажатии на item делаем его активным, добавляем класс active
                .siblings()//получаем соседей без нажатого элемента
                .removeClass('tab-item--active')//удаляем у них класс активности
                .closest('.tab')//ищем общего родителя
                .find('.tab-content')//внутри родителя ищем все элементы содержащие какой-то контент
                .removeClass('tab-content--active')//убираем все классы активности у контента
                //необходимо узнать номер того элеменка в который мы кликнули в табах и эту цифру передать дальше
                .eq($(this[i]).index())//ищем номер элемента по порядку, на котором произошло событие
                //this[i] - эл-т на который кликнул пользователь. Т.е.среди эл-то tab-content используем элемент,по 
                //опр номеру, и передаем его в метод eq
                .addClass('tab-content--active');//добавляем класс активности нужному
        });
    }
};
$('[data-tabpanel] .tab-item').tab();