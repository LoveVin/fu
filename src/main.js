window.onbeforeunload = function(){
    if($(window).scrollTop() !== 0){
        if($('.navbar-toggler').css('display') === 'none'){
            $('header > .navbar').addClass('showbg')
            $('header > .navbar').addClass('fix')
        }
        else{
            if($('.navbar-toggler').hasClass('collapsed')){
                $('header > .navbar').addClass('showbg')
                $('header > .navbar').addClass('fix')
            }
        }
    }
}
$(window).scroll(function(){
    $('header > .navbar').addClass('showbg')
    $('header > .navbar').addClass('fix')
    if($(window).scrollTop() === 0){
        if($('.navbar-toggler').css('display') === 'none'){
            $('header > .navbar').removeClass('showbg')
            $('header > .navbar').removeClass('fix')
        }
        else{
            if($('.navbar-toggler').hasClass('collapsed')){
                $('header > .navbar').removeClass('showbg')
                $('header > .navbar').removeClass('fix')
            }
        }
    }
})
$(".nav-link").on('click',function(){
    //根据a标签的href转换为id选择器，获取id元素所处的位置
    $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500)
    if($('.navbar-toggler').css('display') === 'block'){
        $('.navbar-toggler').trigger('click')
    }
})
$('.navbar-toggler').on('click',function(){
    if($(window).scrollTop() === 0){
        if($(this).hasClass('collapsed')){
            $('header > .navbar').addClass('showbg')
        }
        else{
            $('header > .navbar').removeClass('showbg')
        }
    }
})

$('.card-body').on('mouseenter',function(){
    $(this).find('.project-link').animate({height:"60px"},500);
})
$('.card-body').on('mouseleave',function(){
    $(this).find('.project-link').animate({height:"0"},500);
})
