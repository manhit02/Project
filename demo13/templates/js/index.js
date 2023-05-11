const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$(".js-movtop").onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
};
$$(".js-nav").forEach((control) => {
    control.onclick = () => {
        $$(".js-nav").forEach((control) => {
            control.classList.remove("active");
        });
        control.classList.add("active");
    };
});
$$(".js-slideBtn").forEach((control) => {
    control.onclick = () => {
        $$(".js-slideBtn").forEach((control) => {
            control.classList.remove("active");

        });
        control.classList.add("active");
        if (control.classList.contains('js-slideBtn1')) {
            $(".js-slide").style.backgroundImage = 'url("../assets/images/Layer120.jpg")';
            $(".js-slide").style.animation = 'showl 0.5s ease'
            setTimeout(() => {
                $(".js-slide").style.animation = "unset"

            }, 1000);
        }
        if (control.classList.contains('js-slideBtn2')) {
            $(".js-slide").style.backgroundImage = 'url("../assets/images/Layer111.jpg")';
            $(".js-slide").style.animation = 'showl 0.5s ease'
            setTimeout(() => {
                $(".js-slide").style.animation = "unset"

            }, 1000);
        }
        if (control.classList.contains('js-slideBtn3')) {
            $(".js-slide").style.backgroundImage = 'url("../assets/images/Layer120.jpg")';
            $(".js-slide").style.animation = 'showl 0.5s ease'
            setTimeout(() => {
                $(".js-slide").style.animation = "unset"

            }, 1000);
        }
        if (control.classList.contains('js-slideBtn4')) {
            $(".js-slide").style.backgroundImage = 'url("../assets/images/Layer111.jpg")';
            $(".js-slide").style.animation = 'showl 0.5s ease'
            setTimeout(() => {
                $(".js-slide").style.animation = "unset"

            }, 1000);
        }
    };


});

var dataa = [
    { link: 'url("../assets/images/Layer120.jpg")' },
    { link: 'url("../assets/images/Layer111.jpg")' },
    { link: 'url("../assets/images/Layer120.jpg")' },
    { link: 'url("../assets/images/Layer111.jpg")' }
]

function callbb() {
    $$(".js-slideBtn").forEach((control, index) => {

        setTimeout(() => {

            $$(".js-slideBtn").forEach((control) => {
                control.classList.remove("active");

            });
            control.classList.add("active");

            if (index == 3) {
                setTimeout(() => {
                    callbb()
                }, 5000);
            }
            $(".js-slide").style.animation = 'showl 0.5s ease'
            setTimeout(() => {
                $(".js-slide").style.animation = "unset"

            }, 1000);
        }, 5000 * index);
    })

}

function callb() {
    dataa.forEach((value, index) => {

        setTimeout(() => {


            $(".js-slide").style.backgroundImage = value.link;

            if (index == 3) {
                setTimeout(() => {
                    callb()
                }, 5000);
            }
        }, 5000 * index);
    })

}
callb()
callbb()



var ss = 0
$(".js-next").onclick = () => {
    $(".js-add").innerHTML += `<span class="js-item">${$$('.js-item').length+1}</span>`

    $(".js-add").scrollTo({
        top: 0,
        left: $(".js-item.active").offsetLeft - $(".js-add").offsetLeft,
        behavior: "smooth"
    })
    for (let index = 0; index < $$(".js-item").length; index++) {
        if (index >= $$(".js-item").length - 1) { break }
        const element = $$(".js-item")[index];
        if (element.classList.contains('active')) {
            element.classList.remove("active");
            $$(".js-item")[index + 1].classList.add('active');
            break;
        }

    }
    callback()
    $(".js-data ul").remove();
    $(".js-data").innerHTML = ` 
        <ul >
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
             <hr>
             <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
             <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
      </ul>
        `
    $(".js-data").style.animation = "show 1s linear"

    setTimeout(() => {
        $(".js-data").style.animation = "unset"

    }, 1000);
}

$(".js-nextm").onclick = () => {
    $(".js-add").innerHTML += `<span class="js-item">${$$('.js-item').length+1}</span>`
    $(".js-add").scrollTo({
        top: 0,
        left: $(".js-add").scrollWidth,
        behavior: "smooth"
    })
    $$(".js-item").forEach((control, index, arr) => {
        control.classList.remove("active");
        arr[arr.length - 1].classList.add("active");
    });
    callback();
    $(".js-data ul").remove();
    $(".js-data").innerHTML = ` 
        <ul >
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
             <hr>
             <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
             <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
      </ul>
        `
    $(".js-data").style.animation = "show 1s linear"

    setTimeout(() => {
        $(".js-data").style.animation = "unset"

    }, 1000);
};
$(".js-pev").onclick = () => {
    $(".js-add").scrollTo({
        top: 0,
        left: $(".js-item.active").offsetLeft - $(".js-add").offsetLeft - $(".js-item").offsetWidth - 12,
        behavior: "smooth"
    })
    for (let index = 0; index < $$(".js-item").length; index++) {
        const element = $$(".js-item")[index];
        if (element.classList.contains('active')) {
            if (index == 0) { break }
            element.classList.remove("active");
            $$(".js-item")[index - 1].classList.add('active');
            break
        }
    }

    callback()
    $(".js-data ul").remove();
    $(".js-data").innerHTML = ` 
        <ul >
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
             <hr>
             <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
             <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
      </ul>
        `
    $(".js-data").style.animation = "show 1s linear"

    setTimeout(() => {
        $(".js-data").style.animation = "unset"

    }, 1000);
};
$(".js-pevm").onclick = () => {
    $$(".js-item").forEach((control, index, arr) => {
        control.classList.remove("active");
        arr[0].classList.add("active");
    });
    $(".js-add").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    callback();
    $(".js-data ul").remove();
    $(".js-data").innerHTML = ` 
        <ul >
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
             <hr>
             <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
             <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
             <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
            <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
                <hr>
                <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
      </ul>
        `
    $(".js-data").style.animation = "show 1s linear"

    setTimeout(() => {
        $(".js-data").style.animation = "unset"

    }, 1000);
};

function callback() {

    $$(".js-item").forEach((control) => {
        control.onclick = () => {
            $$(".js-item").forEach((control) => {
                control.classList.remove("active");
            });
            control.classList.add("active");
            $(".js-data ul").remove();
            $(".js-data").innerHTML = ` 
                <ul >
                    <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                        <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                        <hr>
                        <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
                    <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                     <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                     <hr>
                     <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
                    <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                        <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span>Thiên hà 24h</span>
                        <hr>
                        <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
                    <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                     <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
                     <hr>
                        <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
                    <li><img alt="" src="../assets/images/Layer120.jpg"><em>
                        <h3>[CLB]Chính thức nhận đơn ứng cử Ban Chấp Hành CLB Phi Đội</h3><span>14-1</span><span class="other">Cộng đồng VTC</span>
                        <hr>
                        <p>Iphone 5SE, Bàn Phím Gaming K65 RGB, Chuột Corsair Raptor M40, Giftcode trị giá 5.000.000 VNĐ cùng nhiều vật phẩm ingame hấp dẫn khác là phần thưởng đặc biệt từ sự kiện Online Quay Số.      </p></em></li>
              </ul>
                `
            $(".js-data").style.animation = "show 1s linear"

            setTimeout(() => {
                $(".js-data").style.animation = "unset"

            }, 1000);
        };

    });
}
callback()