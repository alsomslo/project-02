$(function () {

    const model = ['ioniq', 'casper', 'sonata'];

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('#main_visual .num').text(c ? c + 1 : 1);
        $('#main_visual .mode1').text(c ? model[(c + 1) % model.length] : model[1]);
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false
    });

    $('#main_visual .mode1').on('click', function () {
        $('.main_slide').slick('slickNext');
    })

});
