const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".js-movtop").onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
};

$(".js-rules").onclick = () => {
    window.scrollTo({
        top: $(".app-rules").offsetTop,
        behavior: "smooth",
    });
};
$(".js-help").onclick = () => {
    window.scrollTo({
        top: $(".app-help").offsetTop,
        behavior: "smooth",
    });
};
$(".js-showpopup").onclick = () => {
    $(".js-popup").classList.toggle('active');
};
$(".js-close").onclick = () => {

    $(".js-popup").classList.toggle('active');
};
$(".js-showdl").onclick = () => {

    $(".js-dl").classList.toggle('active');
};


var a = 0;
var getWidthsc = $(".js-slide").offsetWidth;

$(".js-pev").onclick = () => {
    if (a > 0) {
        a = a - getWidthsc;
        $(".js-slide").scrollTo({
            top: 0,
            left: a,
            behavior: "smooth",
        });

    }



}
$(".js-next").onclick = () => {
    if (a < 2 * getWidthsc)
        a = a + getWidthsc;
    $(".js-slide").scrollTo({
        top: 0,
        left: a,
        behavior: "smooth",
    });

}
$(".js-movAu").onclick = () => {
    window.scrollTo({
        top: $(".js-au").offsetTop,
        behavior: "smooth",
    });
}
$(".js-movAu2").onclick = () => {
    window.scrollTo({
        top: $(".js-au2").offsetTop,
        behavior: "smooth",
    });
}
$(".js-movAub").onclick = () => {
    window.scrollTo({
        top: $(".js-aub").offsetTop,
        behavior: "smooth",
    });
}