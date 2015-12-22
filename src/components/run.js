import 'core-js/fn/object/assign';
'use strict';
require('styles/screen.scss');

var jQuery = require('jquery');

jQuery(function(){
    var $ = jQuery;
    window.$ = jQuery;
    // Getting the images ready for expansion
    $('div:not(".slider") img').wrap('<div class="imageExpand"></div>');
    $('.imageExpand').prepend('<div class="icon zoom"></div>');
    $('.icon.zoom').on('click',function(){
        console.log('zoomed');
    });
    // Now that the images are expandable we are going to create the slider
    
    $('.slider').append('<div class="slider-left icon left-arrow"></div><div class="slider-image"></div><ul class="sliderActive"></ul><div class="slider-right icon right-arrow"></div>');
    $('.slider').each(function(i){
        var images = $(this).data('images');
        $('.slider-image',this).html('<img src="'+images[0].src+'" alt="'+images[0].alt+'"/>');
        for(var iter in images){
            var curClass = (iter==0)?'sliderDot-active':'sliderDot';
            $('ul.sliderActive',this).append('<li class="'+curClass+'" data-id="'+iter+'"></li>');
        }
        var parent = this;
        $('.slider-right,.slider-left').on('click',function(){
            //get the current slide position
            var currentID = $('.sliderDot-active',parent).data('id');
            // Shift the positions based on right or left
            var iterate = $(this).hasClass('slider-right')?1:-1;
            var nextIndex= currentID+iterate;
            if(nextIndex==images.length){
                nextIndex = 0;
            }else if(nextIndex==-1){
                nextIndex = images.length-1;
            }
            $('.sliderDot-active').removeClass('sliderDot-active').addClass('sliderDot');
            $('.sliderDot[data-id='+nextIndex+']').removeClass('sliderDot').addClass('sliderDot-active');
            $('.slider-image',parent).html('<img src="'+images[nextIndex].src+'" alt="'+images[nextIndex].alt+'"/>');

        });
    });

});

