import './lib/lib';
import $ from './lib/lib';

$('#first').on('click',()=>{
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click',()=>{
    $('div').eq(2).fadeToggle(800);
});
$('button').eq(2).on('click',()=>{
    $('.w-500').fadeToggle(800);
});



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