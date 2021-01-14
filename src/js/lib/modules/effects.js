import $ from '../core';
/**
 * метод animateOverTime - техническая функция,отвечающая за анимацию
 * @param {number} dur - как долго будет выполнятся анимация
 * @param {function} cb -коллбэк функция, необязательный параметр
 * @param {*} fin - функция которая запускается после того как анимация закончилась
 * необязательный параметр
 * @returns {function} _animateOverTime;
 */
$.prototype.animateOverTime = function(dur,cb,fin){
    let timeStart;
    // алгоритм работы requestAnimationFrame необх создать функцию, которая будет запускаться
    //до определенного условия, если условие не выполняется, анимация прекращается,
    //вычисляем начало анимации, и сравниваем с временем переданным как аргумент

    function _animateOverTime(time){
        //_animateOverTime - техническая функция для requestAnimationFrame
        if(!timeStart){
            timeStart = time;
        }   

        let timeElapsed = time - timeStart; // вычисляем сколько времени прошлоб(прогресс)
        let complection = Math.min(timeElapsed/dur,1);//отвечает за изменение параметров на странице

        cb(complection);//вызываем коллбэк

        if(timeElapsed < dur){
            requestAnimationFrame(_animateOverTime);
        }else{
            if(typeof fin === 'function'){
                fin();
            }   
        }
    }
    return _animateOverTime;
};

/**
 * метод fadeIn - добавляет элементам эффект появления
 * @param {*} dur  - обязательный аргумент, время
 * @param {*} display 
 * @param {*} fin 
 * @return Object
 * @example
 * $('.butt').fadeIn(2000);
 * //=> {0: button.butt, length : 1};
 */
$.prototype.fadeIn = function(dur,display = 'block',fin){
    for(let i = 0; i < this.length; i++){
        //нужно убедится, что элемент показан на странице
        this[i].style.display = display;

        let _fadeIn = (complection) =>{
            //техническая функция, при запуске принимает complection
            //и изменяет opacity от 0 до 1
            this[i].style.opacity = complection;
        };

        let ani = this.animateOverTime(dur,_fadeIn,fin);
        requestAnimationFrame(ani);
    
    }
    return this;
};  

/**
 * метод fadeOut - добавляет элементам эффект исчезновения 
 * @param {*} dur 
 * @param {*} fin 
 * @return Object
 * @example
 * $('.butt').fadeOut(2000);
 * //=> {0: button.butt, length : 1};
 */
$.prototype.fadeOut = function (dur,fin){
    for(let i = 0; i < this.length; i++){

        let _fadeOut = (complection) =>{
            this[i].style.opacity = 1 - complection;//уменьшаем opacity
            if(complection === 1){
                //если opacity - 0, скрываем элемент со страницы
                this[i].style.display = 'none';
            }
        };

        let ani = this.animateOverTime(dur,_fadeOut,fin);
        requestAnimationFrame(ani);
    }
    return this;
};

/**
 * метод fadeToggle - определяет, нам нужно показать или скрыть элемент, и делает это.
 * @param {*} dur - обязательный параметр
 * @param {*} display 
 * @param {*} fin 
 * @returns Object
 * @example
 * $('.active').fadeToggle(1800);
 * //=> {0: button.active, 1: button.active, length: 2}
 * 
 * $('.btn-dark').on('click',function(){
 *  $(this).fadeToggle(1000);
 * });
 * //=> {0: button.btn-dark, length: 1}
 */
$.prototype.fadeToggle = function(dur,display,fin){
    for(let i = 0; i < this.length; i++){
        //сейчас мы не можем на прямую проверить инлайн стили,т.к. в верстке обычно используются
        //не инлайн стили,а стили прописаные в css. По этому можно использовать getComputedStyle
        if(window.getComputedStyle(this[i]).display ==='none'){
            $(this[i]).fadeIn(dur,display,fin);
        }else{
            $(this[i]).fadeOut(dur,fin);
        }
        }
    return this;
};