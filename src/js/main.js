import './lib/lib';
import $ from './lib/lib';


$('button').on('click', function(){
    $('div').eq(1).toggleClass('active');
});

$('img').setAttr('src','qweqweqe');

$('img').on('click',function(){
    $(this).toggleAttr('src','Den');
});

$('div').click(function(){
    console.log($(this).index());
});

// console.log($('div').find('.more'));
// console.log($('.some').closest('.findmeq').addClass('qweqw'));
// console.log($('.some').siblings()); - рассмотреть вариант когда искомый объект не один на странице
// console.log($('.some').siblings());