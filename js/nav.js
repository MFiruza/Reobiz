"use strict"
$(document).ready(function(){
    $('#side-button').click(function() {
        $('.side-info').css('right','-522px');
    });

    $('#grafics').click(function() {
        $('.side-info').css('right','0');
    });


    $('.nav-bars>a').click(function(ev){
        // do whatever you want here
    
        ev.preventDefault();
        ev.stopPropagation();
    });





  });