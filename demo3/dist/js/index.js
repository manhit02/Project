const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$('.js-highLightBtnLeft').onclick = () => {
    $('.js-iframe').src = 'https://www.youtube.com/embed/TYqPpWIb0jc';
}

$('.js-highLightBtnRight').onclick = () => {
    $('.js-iframe').src = 'https://www.youtube.com/embed/TYqPpWIb0jc';
}
$$('.js-toggleControl').forEach(control => {
    $('.app-slide').scrollTo(768, 0)
    control.onclick = () => {
        $$('.js-toggleControl').forEach(control => {
            control.classList.remove("active")
        })
        control.classList.add("active")
        if (control.classList.contains("js-toggleControl1")) {
            $('.app-slide').scrollTo(0, 0)
        }
        if (control.classList.contains("js-toggleControl2")) {
            $('.app-slide').scrollTo(768, 0)
        }
        if (control.classList.contains("js-toggleControl3")) {
            $('.app-slide').scrollTo(1536, 0)
        }
        if (control.classList.contains("js-toggleControl4")) {
            $('.app-slide').scrollTo(2304, 0)
        }
    }
});