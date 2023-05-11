const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".js-movtop").onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
};
$(".js-switch").onclick = () => {
    $(".js-regiter").classList.remove("active")
    $(".js-regiter").classList.add("defaut")
};
$(".js-showbuy").onclick = () => {
    $(".js-buy").classList.toggle("active")

};

function light() {

    for (let index = 0; index < 999; index++) {
        setTimeout(() => {

            $(".js-light1").classList.toggle('active');
            $(".js-light2").classList.toggle('active');
            $(".js-light3").classList.toggle('active');
            $(".js-light4").classList.toggle('active');

        }, 1000 * index);


    }
}
light()
var a = 0
$(".js-pev").onclick = () => {
    $(".js-slider img").src = `../assets/images/${a}.png`
    $(".js-slider").style.animation = "slider 0.5s ease"
    setTimeout(() => {

        $(".js-slider").style.animation = "unset"
    }, 500);

    a--
};
$(".js-next").onclick = () => {
    $(".js-slider img").src = `../assets/images/${a}.png`
    $(".js-slider").style.animation = "slidel 0.5s ease"
    setTimeout(() => {

        $(".js-slider").style.animation = "unset"
    }, 500);
    a++
};