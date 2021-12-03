$(document).ready(function () {
    $('#side-button').click(function () {
        $('.side-info').css('right', '-522px');
    });

    $('#grafics').click(function () {
        $('.side-info').css('right', '0');
    });
    //responsive

   
    $('.sub-op-btn').click(function () {
        $('.sub-op-btn>span>i').toggleClass("down");
        $('.sub-section').toggleClass("d-block");
    });
        
    $('.close-btn').click(function () {
        $('.sub-op-btn>span>i').toggleClass("down");
        $('.sub-section').toggleClass("d-block");
    });
///////////////////////////////////////////////////////
    $('.sub-op-btn2').click(function () {
        $('.sub-op-btn2>span>i').toggleClass("down");
        $('.sub-section2').toggleClass("d-block");
    });
        
    $('.close-btn2').click(function () {
        $('.sub-op-btn2>span>i').toggleClass("down");
        $('.sub-section2').toggleClass("d-block");
    });
    $('.nav-bars').click(function () {
        $('.fixed-nav').toggleClass("d-block");
    });

});