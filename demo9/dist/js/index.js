const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$$(".js-moveTop").forEach((control) => {
    control.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
});
$$(".js-missct").forEach((control) => {
    control.onclick = () => {
        $$(".js-missct").forEach((control) => {
            if (control.classList.contains('active')) {
                control.classList.remove('active')

            }
        })
        control.classList.add('active')
    };
});
$$(".js-rankct1").forEach((control) => {
    control.onclick = () => {
        $$(".js-rankct1").forEach((control) => {
            if (control.classList.contains('active')) {
                control.classList.remove('active')

            }
        })
        control.classList.add('active')
    };
});
$$(".js-rankct2").forEach((control) => {
    control.onclick = () => {
        $$(".js-rankct2").forEach((control) => {
            if (control.classList.contains('active')) {
                control.classList.remove('active')

            }
        })
        control.classList.add('active')
    };
});
$(".js-showDLL").onclick = () => {
    $(".js-dll").classList.toggle("active")
}
$(".js-showDLR").onclick = () => {
    $(".js-dlr").classList.toggle("active")
}
$(".js-switch").onclick = () => {
    $(".js-regiter").classList.remove("active")
    $(".js-regiter").classList.add("defaut")
};
$(".js-showmenu").onclick = () => {
    $(".js-menu").classList.toggle("active")

};

$$(".js-like").forEach((control) => {
    control.onclick = () => {
        if (control.classList.contains("active")) {
            control.innerHTML = "";
        } else {
            control.innerHTML = "Voted";
        }
        control.classList.toggle("active");
    };
});