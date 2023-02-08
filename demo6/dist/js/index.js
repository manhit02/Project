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
$(".js-toggleMenu").onclick = () => {
    $(".js-menuShow").classList.toggle("active")
    $(".js-overLay").classList.toggle("active")
}
$(".js-overLay").onclick = () => {
    $(".js-menuShow").classList.toggle("active")
    $(".js-overLay").classList.toggle("active")

}

$(".js-btnShowDownload").onclick = () => {
    $(".js-downLoad").classList.toggle("active")
}