$( document ).ready(function() {
   //-------------dropdown language------------//
    let nav = $('.lang');
    let selection = $('.list-language');
    let select = selection.find('.item-language');

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

    select.click(function(event) {
        select.removeClass('active-lng');
        $(this).addClass('active-lng');
        let $lang =  $(this).text();
        nav.text($lang);
        nav.trigger('click');
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