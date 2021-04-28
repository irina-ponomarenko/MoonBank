$( document ).ready(function() {
   //-------------dropdown language------------//
    let nav = $('.lang');
    let nav2 = $('.lang2');
    let selection = $('#langList');
    let selection2 = $('#langList2');
    let select = selection.find('.item-language');
    let select2 = selection2.find('.item-language');

    nav.click(function(event) {
        if (nav.hasClass('active-lng')) {
            nav.removeClass('active-lng');
            selection.stop().slideUp(200);
        } else {
            nav.addClass('active-lng');
            selection.stop().slideDown(200);
        }
        event.preventDefault();
    });

    nav2.click(function(event) {
        if (nav2.hasClass('active-lng')) {
            nav2.removeClass('active-lng');
            selection2.stop().slideUp(200);
        } else {
            nav2.addClass('active-lng');
            selection2.stop().slideDown(200);
        }
        event.preventDefault();
    });

    select.click(function(event) {
        select.removeClass('active-lng');
        $(this).addClass('active-lng');
        let $lang =  $(this).text();
        nav.text($lang);
        nav.trigger('click');
    });

    select2.click(function(event) {
        select2.removeClass('active-lng');
        $(this).addClass('active-lng');
        let $lang2 =  $(this).text();
        nav2.text($lang2);
        nav2.trigger('click');
    });


    //--------------------------dropdown faq----------------------//

    $(".item-faq").click(function() {
        $(".item-faq").children(".text-faq").slideUp(300); 
        $(".chevron-img").removeClass('active-chewron'); 
        if ($(this).children(".text-faq").is(":hidden")) {
            $(this).children(".text-faq").slideDown(300);
            $(this).find('.chevron-img').addClass('active-chewron');
        };
    });


    //---------------------back to top --------------------------//

   $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.to-top-btn').fadeIn();
        } else {
            $('.to-top-btn').fadeOut();
        }
    });

    $(".to-top-btn").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
     });

});