const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$$('.js-toggleControl').forEach(control => {
    control.onclick = () => {
        $$('.js-toggleControl').forEach(control => {
            control.classList.remove("active")
        })
        control.classList.add("active")


    }
});
$$('.js-toggleSlide').forEach(control => {
    control.onclick = () => {
        $$('.js-toggleSlide').forEach(control => {
            control.classList.remove("active")
        })
        control.classList.add("active")
        if (control.classList.contains('js-toggleSlide1')) {
            $('.js-slider').style.background = "url('../assets/images/Rectangle3.jpg') no-repeat top center "
            $('.js-slider').style.backgroundSize = "cover"



        }
        if (control.classList.contains('js-toggleSlide2')) {
            $('.js-slider').style.background = "url('../assets/images/slide.jpg') no-repeat top center "
            $('.js-slider').style.backgroundSize = "cover"




        }
        if (control.classList.contains('js-toggleSlide3')) {
            $('.js-slider').style.background = "url('../assets/images/Rectangle3.jpg') no-repeat top center  "
            $('.js-slider').style.backgroundSize = "cover"




        }
        if (control.classList.contains('js-toggleSlide4')) {
            $('.js-slider').style.background = "url('../assets/images/slide.jpg') no-repeat top center  "
            $('.js-slider').style.backgroundSize = "cover"




        }
        if (control.classList.contains('js-toggleSlide5')) {
            $('.js-slider').style.background = "url('../assets/images/Rectangle3.jpg') no-repeat top center  "
            $('.js-slider').style.backgroundSize = "cover"



        }

    }
});
$$('.js-toggleSlideNews').forEach(control => {
    control.onclick = () => {
        $$('.js-toggleSlideNews').forEach(control => {
            control.classList.remove("active")
        })
        control.classList.add("active")
        if (control.classList.contains('js-toggleSlideNews1')) {
            $('.js-sliderNews').style.background = "url('../assets/images/Rectangle3.jpg') no-repeat top center "
            $('.js-sliderNews').style.backgroundSize = "cover"



        }
        if (control.classList.contains('js-toggleSlideNews2')) {
            $('.js-sliderNews').style.background = "url('../assets/images/slide.jpg') no-repeat top center "
            $('.js-sliderNews').style.backgroundSize = "cover"




        }
        if (control.classList.contains('js-toggleSlideNews3')) {
            $('.js-sliderNews').style.background = "url('../assets/images/Rectangle3.jpg') no-repeat top center  "
            $('.js-sliderNews').style.backgroundSize = "cover"




        }
        if (control.classList.contains('js-toggleSlideNews4')) {
            $('.js-sliderNews').style.background = "url('../assets/images/slide.jpg') no-repeat top center  "
            $('.js-sliderNews').style.backgroundSize = "cover"




        }
        if (control.classList.contains('js-toggleSlideNews5')) {
            $('.js-sliderNews').style.background = "url('../assets/images/Rectangle3.jpg') no-repeat top center  "
            $('.js-sliderNews').style.backgroundSize = "cover"



        }

    }
});

$$('.js-btnGame').forEach(control => {
    control.onclick = () => {

        if (control.classList.contains('js-btnGame1')) {
            $('.js-game').style.background = "url(../assets/images/Rectangle3.jpg)center/cover no-repeat"

        }
        if (control.classList.contains('js-btnGame2')) {
            $('.js-game').style.background = "url(../assets/images/17.jpg)center/cover no-repeat"

        }
        if (control.classList.contains('js-btnGame3')) {
            $('.js-game').style.background = "url(../assets/images/12.jpg)center/cover no-repeat"

        }
        if (control.classList.contains('js-btnGame4')) {
            $('.js-game').style.background = "url(../assets/images/11.jpg)center/cover no-repeat"

        }
        if (control.classList.contains('js-btnGame5')) {
            $('.js-game').style.background = "url(../assets/images/21.jpg)center/cover no-repeat"

        }



    }
});

$(".js-toggleMenu").onclick = () => {
    $(".js-menuShow").classList.toggle("active")
    $(".js-overLay").classList.toggle("active")
}
$(".js-overLay").onclick = () => {
    $(".js-menuShow").classList.toggle("active")
    $(".js-overLay").classList.toggle("active")

}

$(".js-btnShowDownload").onclick = () => {
    if ($(".js-downLoad").classList.contains("active")) {
        $(".js-downLoad").classList.remove("active")
        $(".js-downLoad").classList.add("default")
    } else {
        $(".js-downLoad").classList.add("active")
        $(".js-downLoad").classList.remove("default")

    }

}