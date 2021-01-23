import $ from '../core';
//data-slide-to - позволяет ориентироваться к какому слайду перемещаться при клике на элемент
/**
 * 
 */
$.prototype.carousel = function(auto = false, autoTime = 3000){
    for(let i = 0; i < this.length; i++){
        
        //получаем ширину окна показа слайдов carousel-inner
        let width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
            slides = this[i].querySelectorAll('.carousel-item'),// сами слайды
            slidesField = this[i].querySelector('.carousel-slides'), // получаем блок который содержит в себе все слайды
            dots = this[i].querySelectorAll('.carousel-indicators li');//получаем точки на странице
            

            slidesField.style.width = 100 * slides.length + '%';//высчитываем ширину окна где будут распологаться слайды
        slides.forEach(slide => {
            slide.style.width = width; //устанавливаем всем слайдам одинаковую ширину
        });

        let offset = 0; //отслеживает какой слайд активный, и на сколько смещать slidesField
        let slideIndex = 0;
        let paused;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            //привязываем событие клика кнопке next
            e.preventDefault();
            //проверяем граничные условия,
            //если текущий слайд последний то внутри offset должно хранится полная ширина блока со слайдами
            if(offset == (+width.replace(/\D/g, '') * (slides.length -1))){
                offset = 0;//устанавливаем offset в первый слайд
            } else{
                offset += +width.replace(/\D/g, '');//добавляем к offset ширину одного слайда
            }

            slidesField.style.transform = `translateX(-${offset}px)`;//передвигаем слайды

            //работа с точками
            if(slideIndex == slides.length-1){
                //если у нас последний слайд и нажата кнопка next,переключаем слай-индекс на 1 слайд
                slideIndex = 0;
            }else{
                //показываем следующий слайд
                slideIndex++;
            }

            //работаем с классом active у точек
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            //если у нас 1 слайд и нажата клавиша prev показываем последний слайд иначе показываем пред слайд
            if(offset == 0){
                offset = +width.replace(/\D/g, '') * (slides.length -1);
            } else{
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;//передвигаем слайдов

            //работа с точками 

            if(slideIndex == 0){
                slideIndex = slides.length-1;
            }else{
                slideIndex--;
            }
            
            // работа с классом active у точек
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        //работа с нажатием на точки 
        let sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e)=>{
            //привязываем событие клика, на точки
            let slideTo = e.target.getAttribute('data-slide-to');//узнаем какой слайд нужно показать

            slideIndex = slideTo;//уст в слайд индекс нужный слайд
            
            offset = +width.replace(/\D/g, '') * slideIndex;
            slidesField.style.transform = `translateX(-${offset}px)`;//сдвигаем слайдер

            //класс активности точек
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

        });

        //работа с автопереключением слайдов
        let _autoPlay= () =>{
            paused = setInterval(()=>{
                $(this[i].querySelector('[data-slide="next"]')).click();
            }, autoTime);
        };
        
        if (auto){
            _autoPlay();
            //остановка автопереключения при наведении
            this[i].addEventListener('mouseenter', ()=>clearInterval(paused));
            this[i].addEventListener('mouseleave', ()=>_autoPlay());
        } 

    }
};

// $('.carousel').carousel();


/**
 * createCarousel - метод, который создает слайдер на странице, через js;
 * @param {Object} Object с настрйоками, где sliderId - уникальный айди слайдера,
 * count - счетчик слайдов, settings матрица - содержащая в себе ссылку на картинку, и ее alt
 * {    
 *      sliderId,
 *      count: 3,
 *      auto = true,
 *      settings[
 *          [
 *              "https://example.jpg",
 *              "img1"
 *          ],
 *          [
 *              "https://example1.jpg",
 *              "img2"
 *          ]
 *      ]
 * }
 */

$.prototype.createCarousel = function({sliderId,count,auto,autoTime,settings} = {}){
    for(let i = 0; i < this.length; i++){
        let carousel = document.createElement('div');
        carousel.classList.add('carousel','mt-20');
        carousel.setAttribute(`id`,`${sliderId}`);

        carousel.innerHTML +=`
                <ol class="carousel-indicators">
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-slides">
                    </div>
                </div>
                <a href="#" class="carousel-prev" data-slide="prev">
                    <span class="carousel-prev-icon">&lt;</span>
                </a>
                <a href="#" class="carousel-next" data-slide="next">
                    <span class="carousel-next-icon">&gt;</span>
                </a>
            `;

        this[i].append(carousel);
        

        for(let j = 0; j < count; j++){
            let [src,alt] = settings[j];
            //работа с точками
            this[i].querySelector('ol').innerHTML +=`
                <li data-slide-to="${j}"></li>
            `;
            if(j == 0){
                this[i].querySelector('ol li').classList.add('active');
            }
            //работа со слайдами
            this[i].querySelector('.carousel-inner .carousel-slides').innerHTML +=`
                <div class="carousel-item">
                    <img src="${src}" alt="${alt}">
                </div>
            `;

        }
        
        $(carousel).carousel(auto,autoTime);
    }
};





    