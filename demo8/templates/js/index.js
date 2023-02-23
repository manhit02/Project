const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$$(".js-sliderBtn").forEach((control) => {
    control.onclick = () => {
        $$(".js-sliderBtn").forEach((control) => {
            control.classList.remove("active");
        });
        control.classList.add("active");
        var getWidthsc = $(".js-slider").offsetWidth;

        if (control.classList.contains("js-sliderBtn1")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-sliderBtn2")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-sliderBtn3")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc * 2,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-sliderBtn4")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc * 3,
                behavior: "smooth",
            });
        }
        if (control.classList.contains("js-sliderBtn5")) {
            $(".js-slider").scrollTo({
                top: 0,
                left: getWidthsc * 4,
                behavior: "smooth",
            });
        }
    };
});

function scrollEven() {

    if ($(".js-slider").scrollLeft == 0) {
        $(".js-sliderBtn1").classList.add("active");
        $(".js-sliderBtn2").classList.remove("active")
        $(".js-sliderBtn3").classList.remove("active")
        $(".js-sliderBtn4").classList.remove("active")
        $(".js-sliderBtn5").classList.remove("active")
    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth - 5)) {

        $(".js-sliderBtn2").classList.add("active");
        $(".js-sliderBtn1").classList.remove("active");

        $(".js-sliderBtn3").classList.remove("active")
        $(".js-sliderBtn4").classList.remove("active")
        $(".js-sliderBtn5").classList.remove("active")
    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth * 2 - 5)) {

        $(".js-sliderBtn3").classList.add("active");

        $(".js-sliderBtn2").classList.remove("active")

        $(".js-sliderBtn4").classList.remove("active")
        $(".js-sliderBtn5").classList.remove("active")
    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth * 3 - 5)) {
        $(".js-sliderBtn4").classList.add("active");
        $(".js-sliderBtn1").classList.remove("active");
        $(".js-sliderBtn2").classList.remove("active")
        $(".js-sliderBtn3").classList.remove("active")

        $(".js-sliderBtn5").classList.remove("active")
    }
    if (($(".js-slider").scrollLeft) >= ($(".js-slider").offsetWidth * 4 - 5)) {

        $(".js-sliderBtn5").classList.add("active");
        $(".js-sliderBtn1").classList.remove("active");
        $(".js-sliderBtn2").classList.remove("active")
        $(".js-sliderBtn3").classList.remove("active")
        $(".js-sliderBtn4").classList.remove("active")

    }
}
$(".js-slider").addEventListener("scroll", scrollEven);
$(".js-btnServer").onclick = () => {
    $(".js-server").classList.toggle("active");
};
$$(".js-like").forEach((control) => {
    control.onclick = () => {
        if (control.classList.contains("active")) {
            control.innerHTML = "Vote";
        } else {
            control.innerHTML = "Liked";
        }
        control.classList.toggle("active");
    };
});
$$(".js-moveTop").forEach((control) => {
    control.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
});
$(".js-rankBtn").onclick = () => {
    $(".js-rank").classList.toggle("active");
};
$(".js-movGiftLove").onclick = () => {
    window.scrollTo({
        top: $(".app-giftlove").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movVote").onclick = () => {
    window.scrollTo({
        top: $(".app-search").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movVote2").onclick = () => {
    window.scrollTo({
        top: $(".app-turn").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movRank").onclick = () => {
    window.scrollTo({
        top: $(".app-rank").offsetTop,
        behavior: "smooth",
    });
};

$(".js-switch").onclick = () => {
    $(".js-regiter").classList.remove("active")
    $(".js-regiter").classList.add("defaut")
};
var a = $('ul.js-turnList').children.length


$(".js-turnBtn").onclick = () => {
    var index = 0
    var indexx = 0

    for (let index = 0; index < a; index++) {
        if ($('ul.js-turnList').children[index].classList.contains("active")) {
            $('ul.js-turnList').children[index].classList.remove('active')
        }
    }

    function wheel(d) {
        setTimeout(function() {
            $('ul.js-turnList').children[index].classList.add('active')
            index++;
            if (index < a)
                wheel(d);
        }, d);
    }

    function wheell(b) {
        setTimeout(function() {
            $('ul.js-turnList').children[indexx].classList.remove('active')
            indexx++;
            if (indexx < a)
                wheell(b);
        }, b);

    }

    function wheelll(b) {
        setTimeout(function() {
            $('ul.js-turnList').children[Math.floor(Math.random() * 12)].classList.add('active')

        }, b * 12);
    }
    wheel(500);
    wheell(520);
    wheelll(520);


};
$(".js-turnBtn2").onclick = () => {

    for (let index = 0; index < a; index++) {
        if ($('ul.js-turnList').children[index].classList.contains("active")) {
            $('ul.js-turnList').children[index].classList.remove('active')
        }
    }
    $('ul.js-turnList').children[Math.floor(Math.random() * 12)].classList.add('active')



}
$$(".js-remove").forEach((control) => {
    control.onclick = () => {
        $(".js-remove").parentElement.remove();
    }
})