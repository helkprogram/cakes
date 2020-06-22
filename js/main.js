$(window).on("load resize", function () {
    var width = $('body').innerWidth(),
        size = $(".size");

    if (width > 509) {
        size.removeClass('cake-slider2');
        $('.cake-slider2').slick('unslick');
    } else {
        size.addClass('cake-slider2');
        $('.cake-slider2').not('.slick-initialized').slick({
            arrows: false,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 509,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        dotsClass: 'cake__dots'
                    }
                }]
        });
    }
    if (width > 860) {
        $('.contacts__form-question').on('input', function () {
            let heightValue = this.scrollHeight;
            console.log(heightValue);
            $(this).css({ 'height': heightValue + 'px' });
        })
    } else {
        $('.contacts__form-question').on('input', function () {
            let heightValue = this.scrollHeight - 30;
            console.log(heightValue);
            $(this).css({ 'height': heightValue + 'px' });
        })
    }
});
$(document).ready(function () {
    var $menu = $(".header-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.fadeOut('fast', function () {
                $(".header-intro").css({ 'padding-top': '244px' });
                $(this).removeClass("default")
                    .addClass("fixed")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function () {
                $(".header-intro").css({ 'padding-top': '150px' });
                $(this).removeClass("fixed")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });
    $(function () {
        $('.filling__btn').on('click', function (e) {
            e.preventDefault;
            let fillBtn = $('.filling__btn');
            let fillingVal = $(this).siblings('.filling__name')[0].innerHTML;
            $('.figuration__form-filling').text(fillingVal);
            for (let i = 0; i < fillBtn.length; i++) {
                fillBtn[i].innerHTML = 'Выбрать';
            }
            fillBtn.toggleClass('filling__btn--active', false);
            this.innerHTML = 'Выбрано';
            $(this).toggleClass('filling__btn--active');
        });
        $('.size__item input').on('click', function (e) {
            e.preventDefault;
            let sizeVal = $(this).val();
            $('.figuration__form-size').text(sizeVal);
        });
        $('.size__btn').on('click', function (e) {
            e.preventDefault;
            let sizeVal1 = $(this).siblings('input')[0].val();
            console.log('aaaaa');
        });
        $('.figuration__item input').on('click', function (e) {
            e.preventDefault;
            let decorVal = $(this).val();
            console.log(decorVal);
            $('.figuration__form-decor').text(decorVal);
        });
        $('.figuration__item-btn').on('click', function (e) {
            e.preventDefault;

        });
    });
    $('.our-cakes__item-btn').magnificPopup({
        removalDelay: 300,
        items: [
            {
                src: 'img/our-cakes-item-big-1.jpg'
            },
            {
                src: 'img/our-cakes-item-big-2.jpg'
            },
            {
                src: 'img/our-cakes-item-1.jpg'
            },
            {
                src: 'img/our-cakes-item-2.jpg'
            },
            {
                src: 'img/our-cakes-item-3.jpg'
            },
            {
                src: 'img/our-cakes-item-4.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image',
        mainClass: 'mfp-fade'
    });
    // Аннимация
    $.fn.extend({
        onAppearanceAddClass: function (class_to_add) {
            var $window = $(window),
                window_height = $window.height(),
                array_of_$elements = [];
            this.each(function (i, el) {
                array_of_$elements.push($(el));
            })
            scrollHandler();
            if (array_of_$elements.length) {
                $window.on('resize', resizeHandler).on('resize', scrollHandler).on('scroll', scrollHandler);
            }
            function resizeHandler() {
                window_height = $window.height();
            }
            function watchProcessedElements(array_of_indexes) {
                var l, i;
                for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
                    array_of_$elements.splice(array_of_indexes[i], 1);
                }
                if (!array_of_$elements.length) {
                    $window.off('resize', resizeHandler).off('scroll', scrollHandler).off('resize', scrollHandler);
                }
            }
            function scrollHandler() {
                var i, l, processed = [];
                for (l = array_of_$elements.length, i = 0; i < l; ++i) {
                    if ($window.scrollTop() + window_height > array_of_$elements[i].offset().top) {
                        array_of_$elements[i].addClass(class_to_add);
                        processed.push(i);
                    }
                }
                if (processed.length) {
                    watchProcessedElements(processed);
                }
            }
            return this;
        }
    })
    $('.our-cakes__item').onAppearanceAddClass('animate__animated animate__fadeInUp');
    $('.cake__item').onAppearanceAddClass('animate__animated animate__fadeInUp');
    $('.advantages__bg').onAppearanceAddClass('animate__animated animate__rotateInDownLeft');
});

$(function () {
    let elem = document.querySelectorAll('.filling__qty'),
        qty = elem.length;
    for (i = 0; i < qty; i++) {
        let j = i + 1;
        elem[i].innerHTML = j + '/' + qty;
    };
});
$(function () {
    let elem = document.querySelectorAll('.reviews__item-qty'),
        qty = elem.length;
    for (i = 0; i < qty; i++) {
        let j = i + 1;
        elem[i].innerHTML = j + '/' + qty;
    };
});



$(function () {
    $('.menu__btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu__btn--active');
        $('.menu__list').slideToggle();
    });
    $('.cake-slider').slick({
        responsive: [
            {
                breakpoint: 470,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'cake__dots'
                }
            }]
    });
    $('.figuration__list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 509,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: 'cake__dots'
                }
            }]
    });
    $('.reviews__list').slick({
        responsive: [
            {
                breakpoint: 509,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'cake__dots'
                }
            }]
    });
});

