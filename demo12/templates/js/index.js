const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".js-movtop").onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
};




function scrollEven() {

    if ($(".js-slider").scrollLeft == 0) {
        $(".js-control1").classList.add("active");
        $(".js-control2").classList.remove("active")
        $(".js-control3").classList.remove("active")
        $(".js-control4").classList.remove("active")

    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth - 5)) {

        $(".js-control2").classList.add("active");
        $(".js-control1").classList.remove("active");

        $(".js-control3").classList.remove("active")
        $(".js-control4").classList.remove("active")

    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth * 2 - 5)) {

        $(".js-control3").classList.add("active");

        $(".js-control2").classList.remove("active")

        $(".js-control4").classList.remove("active")

    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth * 3 - 5)) {
        $(".js-control4").classList.add("active");
        $(".js-control1").classList.remove("active");
        $(".js-control2").classList.remove("active")
        $(".js-control3").classList.remove("active")


    }

}
$(".js-slider").addEventListener("scroll", scrollEven);
$$(".js-control").forEach((control) => {
    control.onclick = () => {
        $$(".js-control").forEach((control) => {
            control.classList.remove("active");
        });
        control.classList.add("active");
        var getWidthsc = $(".js-slider").offsetWidth;

        if (control.classList.contains("js-control1")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-control2")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-control3")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc * 2,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-control4")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc * 3,
                behavior: "smooth",
            });
        }

    };
});