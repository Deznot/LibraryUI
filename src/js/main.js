import './lib/lib';
import $ from './lib/lib';


$('button').on('click', function(){
    $(this).toggleClass('active');
});

$('img').setAttr('src','qweqweqe');

$('img').on('click',function(){
    $(this).toggleAttr('src','Den');
});
