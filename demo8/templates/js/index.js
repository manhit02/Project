const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$$('.js-sliderBtn').forEach(control => {
    control.onclick = () => {
        $$('.js-sliderBtn').forEach(control => {
            control.classList.remove("active")
        })
        control.classList.add("active")
        var getWidthsc = $('.js-slider').offsetWidth;

        if (control.classList.contains('js-sliderBtn1')) {

            $('.js-slider').scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (control.classList.contains('js-sliderBtn2')) {
            $('.js-slider').scrollTo({
                top: 0,
                left: getWidthsc,
                behavior: 'smooth'
            });
        }
        if (control.classList.contains('js-sliderBtn3')) {
            $('.js-slider').scrollTo({
                top: 0,
                left: getWidthsc * 2,
                behavior: 'smooth'
            });
        }
        if (control.classList.contains('js-sliderBtn4')) {
            $('.js-slider').scrollTo({
                top: 0,
                left: getWidthsc * 3,
                behavior: 'smooth'
            });
        }
        if (control.classList.contains('js-sliderBtn5')) {
            $('.js-slider').scrollTo({
                top: 0,
                left: getWidthsc * 4,
                behavior: 'smooth'
            });
        }
    }
});
$('.js-btnServer').onclick = () => {
    $('.js-server').classList.toggle('active')
}
$$('.js-like').forEach(control => {
    control.onclick = () => {
        if (control.classList.contains('active')) {
            control.innerHTML = "Vote"
        } else {
            control.innerHTML = "Liked"

        }
        control.classList.toggle("active")

    }
});
$$('.js-moveTop').forEach(control => {
    control.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }
});
$('.js-rankBtn').onclick = () => {
    $('.js-rank').classList.toggle("active")

}
$('.js-movGiftLove').onclick = () => {
    window.scrollTo({
        top: 1954,
        behavior: 'smooth'
    })
}
$('.js-movVote').onclick = () => {
    window.scrollTo({
        top: 4057,
        behavior: 'smooth'
    })
}
$('.js-movVote2').onclick = () => {
    window.scrollTo({
        top: 5168,
        behavior: 'smooth'
    })
}
$('.js-movRank').onclick = () => {
    window.scrollTo({
        top: 7329,
        behavior: 'smooth'
    })
}