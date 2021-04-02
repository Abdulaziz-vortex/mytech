
//js file
$(document).ready(()=>{
    let mainSlider = new Swiper('.main-slider__container', {
        slidesPerView: 1,
        pagination: {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        }
    });

    let newGoods = new Swiper('.goods__new', {
        slidesPerView: 4,
        spaceBetween: 15,

        navigation : {
            nextEl : '.goods__slides-control_right_new',
            prevEl : '.goods__slides-control_left_new'
        }
    });


    let usersReview = new Swiper('.users-review__container', {
        slidesPerView : 4,
        spaceBetween: 15,
        navigation: {
            nextEl : '.users-review__slidesBtn_right',
            prevEl : '.users-review__slidesBtn_left',
        } ,
        // loop : true,
    });

    // $('#header-category').on('click', (e) => {
    //     $('#heder__categoryMenu').fadeToggle();

    // });
    let counter = 0;
    $('#header-category').on('click', (e) => {
        $('#heder__categoryMenu').fadeToggle();
        $('.category-menu__background').fadeToggle();
    });
    $('.category-menu__background').on('click', function(){
        $(this).fadeToggle();
        $('#heder__categoryMenu').fadeToggle();
    });

});

// accordion section 

$('.hedaer-categoryLi__grid ul > .dropdown').on('click', function(e){
    $(this).children('ul').slideToggle();
    $(this).toggleClass('active');
});
