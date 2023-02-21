const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$$('.js-dd').forEach(control => {
    control.onclick = () => {
        control.classList.add("active")
    }
});
$('.js-movt').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
$('.js-showlogin').onclick = () => {
    $('.js-login').classList.toggle('active')
}