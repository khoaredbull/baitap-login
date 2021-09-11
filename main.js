$('.btn-login').on('click', function() {
    $('.wrapper').css('display', 'none');
    $('.wrapper-login').css('display', 'block');
});
$('.btn-register').on('click', function() {
    $('.wrapper').css('display', 'none');
    $('.wrapper-register').css('display', 'block');
});
$('.close').on('click', function() {
    $('.wrapper').css('display', 'block');
    $('.wrapper-login').css('display', 'none');
    $('.wrapper-register').css('display', 'none');

});
