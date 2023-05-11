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
        if (a == 375 || a == 220) {
            $(".txtStep").textContent = 'Bước 2: Nhấn " Nhiệm vụ nhận điểm" để bắt đầu làm nhiệm vụ.';
        } else if (a == 750 || a == 440) {
            $(".txtStep").textContent = 'Bước 3: Hoàn thành các nhiệm vụ để thu thập nhiều điểm (P) trên app nhất.';
        } else if (a == 1125 || a == 660) {
            $(".txtStep").textContent = 'Bước 4: Vào phần " Đổi Coupon" để nhận giftcode của game mình đã chọn.';
        } else {
            $(".txtStep").textContent = 'Bước 1: Tải app Toonder và đăng nhập tài khoản VTC ID trên app';
        }

    }



}
$(".js-next").onclick = () => {
    if (a < 2 * getWidthsc)
        a = a + getWidthsc;
    if (a == 375 || a == 220) {
        $(".txtStep").textContent = 'Bước 2: Nhấn " Nhiệm vụ nhận điểm" để bắt đầu làm nhiệm vụ.';
    } else if (a == 750 || a == 440) {
        $(".txtStep").textContent = 'Bước 3: Hoàn thành các nhiệm vụ để thu thập nhiều điểm (P) trên app nhất.';
    } else if (a == 1125 || a == 660) {
        $(".txtStep").textContent = 'Bước 4: Vào phần " Đổi Coupon" để nhận giftcode của game mình đã chọn.';
    } else {
        $(".txtStep").textContent = 'Bước 1: Tải app Toonder và đăng nhập tài khoản VTC ID trên app';
    }

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