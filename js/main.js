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
});