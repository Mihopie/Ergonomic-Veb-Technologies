// бургер меню
const burger = document.querySelector('.burger');  //получаем элемент со страницы ('.burger' - кнопка) и помещаем его в переменную burger
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {     //при нажитии на бургер
    navigation.classList.add('navigation_active')  //добавляем класс navigation_active, 'открываем меню'
})

navigationClose.addEventListener('click', () => {   //при нажитии на крестик
    navigation.classList.remove('navigation_active')  //удаляем класс navigation_active, 'закрываем меню'
});


// фоновая музыка
try{
    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio('audio/waterTower.mp3');

    const checkMute = () => {
        if (mute.checked) {  //если галочка стоит
            audio.play().catch(() => {
                mute.checked = false;
            });     //то включаем музыку
        } else {
            audio.pause();
        }
    }

    if(mute) {   
        setTimeout(checkMute, 2000);  //чтобы музыка запускалась не сразу, а через 2с
    }  

    mute.addEventListener('change', checkMute);
} catch {}

try {
    const sliderThumbs = new Swiper('.slider-thumbs', {
        loop:true,
        spaceBetween: 20,  //расстояние между слайдами
        slidesPerView: 3,  //сколько слайдов отображается
        centeredSlides: true,  //активый слайд по центру
        loopedSlides: 4,
    });

    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex)
    })

    const sliderMain = new Swiper('.slider-main', {
        loop:true,
        spaceBetween: 10,
        loopedSlides: 4,
    });

    sliderThumbs.controller.control = sliderMain;
    sliderMain.controller.control = sliderThumbs;

    const videos = document.querySelectorAll('video')  //находит все теги video

    sliderMain.on('slideChange', () => {  //после того как поменяли слайд
        for (let i = 0; i < videos.length; i++) {
            videos[i].pause();            //прошлое видео ставим на паузу
        }
    });

    const pagination = document.querySelector('.pagination');
    const paginationButton = document.querySelector('.pagination__arrow');

    paginationButton.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active')  //toogle добавляет класс, если его нет, и удаляет, если уже есть
    })

} catch {}
