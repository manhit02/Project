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

function callb() {
    for (let index = 0; index < $(".js-slider").children.length; index++) {
        setTimeout(() => {

            var getWidthsc = $(".js-slider").offsetWidth;
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc * index,
                behavior: "smooth",
            });


            if (index == 3) {
                setTimeout(() => {
                    callb()
                }, 5000);
            }
        }, 5000 * index);
    }



}
callb()
var count = 0
var child = $$(".js-sliderNews li").length;
var getWidth = $(".js-sliderNews li").offsetWidth
$(".js-nextNews").onclick = () => {

    if (count < child - 4) {

        count++

        $(".js-sliderNews").scrollTo({
            top: 0,
            left: getWidth * count + 8,
            behavior: "smooth"
        })
        $(".js-nextNews").style.opacity = "1"
        $(".js-nextNews").style.cursor = "pointer"
    }
    if (count > 0) {
        $(".js-pevNews").style.opacity = "1"
        $(".js-pevNews").style.cursor = "pointer"

    }

    if (count == child - 4) {
        $(".js-nextNews").style.opacity = "0"
        $(".js-nextNews").style.cursor = "default"
    }
}
$(".js-pevNews").onclick = () => {
    if (count > 0) {
        count--

        $(".js-sliderNews").scrollTo({
            top: 0,
            left: count * getWidth - 8,
            behavior: "smooth"

        })
        $(".js-nextNews").style.opacity = "1"
        $(".js-nextNews").style.cursor = "pointer"
    }
    if (count == 0) {
        $(".js-pevNews").style.opacity = "0"
        $(".js-pevNews").style.cursor = "default"

    }


}
var countt = 0
var childd = $$(".js-sliderPkm li").length;
var getWidthh = $(".js-sliderPkm li").offsetWidth
$(".js-nextPkm").onclick = () => {

    if (countt < childd - 7) {

        countt++

        $(".js-sliderPkm").scrollTo({
            top: 0,
            left: getWidthh * countt + 13,
            behavior: "smooth"
        })
        $(".js-nextPkm").style.opacity = "1"
        $(".js-nextPkm").style.cursor = "pointer"
    }
    if (countt > 0) {
        $(".js-pevPkm").style.opacity = "1"
        $(".js-pevPkm").style.cursor = "pointer"

    }

    if (countt == childd - 7) {
        $(".js-nextPkm").style.opacity = "0"
        $(".js-nextPkm").style.cursor = "default"
    }
}
$(".js-pevPkm").onclick = () => {
    if (countt > 0) {
        countt--

        $(".js-sliderPkm").scrollTo({
            top: 0,
            left: countt * getWidthh - 13,
            behavior: "smooth"

        })
        $(".js-nextPkm").style.opacity = "1"
        $(".js-nextPkm").style.cursor = "pointer"
    }
    if (countt == 0) {
        $(".js-pevPkm").style.opacity = "0"
        $(".js-pevPkm").style.cursor = "default"

    }


}

function scrollEven1() {
    if ($(".js-sliderPkm").scrollLeft == 0) {
        $(".js-pevPkm").style.opacity = "0"
        $(".js-pevPkm").style.cursor = "default"

    } else {
        $(".js-pevPkm").style.opacity = "1"
        $(".js-pevPkm").style.cursor = "pointer"
    }
    if ($(".js-sliderPkm").scrollLeft == $(".js-sliderPkm").scrollWidth - $(".js-sliderPkm").clientWidth) {
        $(".js-nextPkm").style.opacity = "0"
        $(".js-nextPkm").style.cursor = "default"
    } else {
        $(".js-nextPkm").style.opacity = "1"
        $(".js-nextPkm").style.cursor = "pointer"
    }

}

function scrollEven2() {
    if ($(".js-sliderNews").scrollLeft == 0) {
        $(".js-pevNews").style.opacity = "0"
        $(".js-pevNews").style.cursor = "default"

    } else {
        $(".js-pevNews").style.opacity = "1"
        $(".js-pevNews").style.cursor = "pointer"
    }
    if ($(".js-sliderNews").scrollLeft == $(".js-sliderNews").scrollWidth - $(".js-sliderNews").clientWidth) {
        $(".js-nextNews").style.opacity = "0"
        $(".js-nextNews").style.cursor = "default"
    } else {
        $(".js-nextNews").style.opacity = "1"
        $(".js-nextNews").style.cursor = "pointer"
    }

}
$(".js-sliderPkm").addEventListener("scroll", scrollEven1);
$(".js-sliderNews").addEventListener("scroll", scrollEven2);