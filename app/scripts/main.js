console.log('\'Allo1s \'Allo!');

$(function(){
    var now = Math.floor(Date.now() / 1000);
    var then = 1488499200;
    $('#countdown .days').html(Math.round((then - now) / (60 * 60 * 24)));
});

$('.arc').arctext({radius:600});

$('.lazy').Lazy({
    visibleOnly:true,
    effect:'fadeIn',
    effectTime:600
});

