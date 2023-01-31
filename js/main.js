$(document).ready(function(){

    // DROPDOWN MENU - show
    $('.hamburger-custom').click (function () {

        $('.dropdown-menu-custom').css('display', 'block')

    });
    
    // DROPDOWN MENU - hide
    $('.main-menu-item:first-child').click (function () {

        $('.dropdown-menu-custom').css('display', 'none')

    })
    
    
    
});