$(document).ready(function(){

    // DROPDOWN MENU - show
    $('.hamburger').click (function () {

        $('.dropdown-menu').css('display', 'block')

    });
    
    // DROPDOWN MENU - hide
    $('.main-menu-item:first-child').click (function () {

        $('.dropdown-menu').css('display', 'none')

    })
    
    
    
});