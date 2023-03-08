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