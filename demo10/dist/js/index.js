const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".js-movtop").onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
};
$(".js-downloadBtn").onclick = () => {
    $(".js-download").classList.toggle("active")

}
$(".js-movbq").onclick = () => {
    window.scrollTo({
        top: $(".app-bqmn").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movdknq").onclick = () => {
    window.scrollTo({
        top: $(".app-dknq").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movtm").onclick = () => {
    window.scrollTo({
        top: $(".app-tm").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movctnq").onclick = () => {
    window.scrollTo({
        top: $(".app-bqmn").offsetTop,
        behavior: "smooth",
    });
};
$(".js-movct").onclick = () => {
    window.scrollTo({
        top: $(".app-ct").offsetTop,
        behavior: "smooth",
    });
};

$$(".js-cart").forEach((control) => {
    control.onclick = () => {
        control.innerHTML = `<img src="../assets/images/selected.png">
                <span>   <img src="../assets/images/1.png"></span><span>Bụi Cường Hóa<br>Phòng Cụ<br>Thứ Cấp<br></span><span><span>AC22K1MB</span>
                  <button>Lưu code</button></span></li>`
        control.classList.toggle('active')
    };
});