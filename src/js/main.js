import './lib/lib';
import $ from './lib/lib';



$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action#2</a>
            <a href="#" class="dropdown-item">Action#3</a>
        </div>
    </div>
    `
);

$('.wrap .dropdown-toggle').dropdown();

$('#trigger').click(()=>$('#trigger').createModal({
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

{/* <button class="btn btn-danger" data-close>Close</button> */}
{/* <button class="btn btn-success">Save changes</button> */}

// console.log($('.btn-dark').on('click',()=>{
//     console.log(this);
//     $(this).fadeToggle(1000);
// }));
 


// $('#first').on('click',()=>{
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').on('click',()=>{
//     $('div').eq(2).fadeToggle(800);
// });
// $('button').eq(2).on('click',()=>{
//     $('.w-500').fadeToggle(800);
// });



// $('button').on('click', function(){
//     $('div').eq(1).toggleClass('active');
// });

// $('img').setAttr('src','qweqweqe');

// $('img').on('click',function(){
//     $(this).toggleAttr('src','Den');
// });

// $('div').click(function(){
//     console.log($(this).index());
// });

// console.log($('div').find('.more'));
// console.log($('.some').closest('.findmeq').addClass('qweqw'));
// console.log($('.some').siblings()); - рассмотреть вариант когда искомый объект не один на странице
// console.log($('.some').siblings());

// $('.findme').fadeOut(1800); //анимация исчезновения
// setTimeout(()=>{$('.findme').fadeIn(1800);},2000);// анимация появления