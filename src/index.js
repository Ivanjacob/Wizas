// document.addEventListener("DOMContentLoaded", function() {
//     var navbar = document.querySelector('.navbar');
//     var heroSection = document.querySelector('.hero');
//     var interestsSection = document.querySelector('#about');
//     var heroSectionHeight = heroSection.clientHeight;
//     var interestsSectionTop = interestsSection.offsetTop;
//     var interestsSectionHeight = interestsSection.clientHeight;
//     var interestsNavItem = document.querySelector('.highlight-interests');

//     window.addEventListener('scroll', function() {
//         var scrollPos = window.scrollY;

//         if (scrollPos > heroSectionHeight) {
//             navbar.classList.add('navbar-scroll');
//         } else {
//             navbar.classList.remove('navbar-scroll');
//         }

//         if (scrollPos >= interestsSectionTop && scrollPos < interestsSectionTop + interestsSectionHeight) {
//             interestsNavItem.classList.add('nav-item-highlight');
//         } else {
//             interestsNavItem.classList.remove('nav-item-highlight');
//         }
//     });
// });


$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        
        var heroHeight = $('.hero').outerHeight();

        if (scrollPosition > heroHeight) {
            $('#navbar').addClass('navbar-black'); 
        } else {
            $('#navbar').removeClass('navbar-black');
        }
    });
});
