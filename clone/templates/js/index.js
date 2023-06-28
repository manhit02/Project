var swiper = new Swiper(".mySwiper", {
  keyboard: true,
  navigation: {
    nextEl: ".mySwiper-button__next",
    prevEl: ".mySwiper-button__prev",
  },
  slidesPerView: 3,

  grid: {
    rows: 2,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    739: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    1023: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    1280: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    2000: {
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {

  keyboard: true,

  navigation: {
    nextEl: ".mySwiper2-button__next",
    prevEl: ".mySwiper2-button__prev",
  },
  slidesPerView: 1,
  spaceBetween: 21,
  breakpoints: {
    739: {
      slidesPerView: 3,
      spaceBetween: 21
    },
    1024:{
      slidesPerView: 4,
      spaceBetween: 21
    }
  }
});



var swiper3 = new Swiper(".mySwiper3", {

  cssMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
var swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".mySwiper4-button__next",
    prevEl: ".mySwiper4-button__prev",
  },
 
      freeMode: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
			loop: true,
			loopedSlides: 4,
      centeredSlides: true,
    
  breakpoints: {
    739: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 5,
   

    },
    1280: {
      slidesPerView: 7,
   
    }
    ,
    2000: {
      slidesPerView: 5,
 

    }
  },
 

 
});
var swiper5 = new Swiper(".mySwiper5", {

  navigation: {
    nextEl: ".mySwiper4-button__next",
    prevEl: ".mySwiper4-button__prev",
  },
  slideToClickedSlide: true,

  loop: true,
  loopedSlides: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper4,
  },

});
var $one = document.querySelector.bind(document);
var $$all = document.querySelectorAll.bind(document);
try {
  
var checkpw1 = 1
var checkpw2 = 1
var checkpw3 = 1
var checkpw4 = 1
var checkpw5 = 1
$one(".js-swpw1").onclick = () => {
  if (checkpw1 == 1) {
      $one(".js-pw1").type = "text"
      $one(".js-swpw1").style.backgroundImage = "url('../assets/images/p3.svg')"
      checkpw1 = 2

  } else {
      $one(".js-pw1").type = "password"
      $one(".js-swpw1").style.backgroundImage = "url('../assets/images/p18.svg')"
      checkpw1 = 1
  }

}



} catch (error) {
  
}
try {
  $one(".js-swpw2").onclick = () => {
    if (checkpw2 == 1) {
        $one(".js-pw2").type = "text"
        $one(".js-swpw2").style.backgroundImage = "url('../assets/images/p3.svg')"
        checkpw2 = 2
  
    } else {
        $one(".js-pw2").type = "password"
        $one(".js-swpw2").style.backgroundImage = "url('../assets/images/p18.svg')"
        checkpw2 = 1
    }
  
  }
  
  $one(".js-swpw3").onclick = () => {
    if (checkpw3 == 1) {
        $one(".js-pw3").type = "text"
        $one(".js-swpw3").style.backgroundImage = "url('../assets/images/p3.svg')"
        checkpw3 = 2
  
    } else {
        $one(".js-pw3").type = "password"
        $one(".js-swpw3").style.backgroundImage = "url('../assets/images/p18.svg')"
        checkpw3 = 1
    }
  
  }
  
  $one(".js-swpw4").onclick = () => {
    if (checkpw4 == 1) {
        $one(".js-pw4").type = "text"
        $one(".js-swpw4").style.backgroundImage = "url('../assets/images/p3.svg')"
        checkpw4 = 2
  
    } else {
        $one(".js-pw4").type = "password"
        $one(".js-swpw4").style.backgroundImage = "url('../assets/images/p18.svg')"
        checkpw4 = 1
    }
  
  }
  
  $one(".js-swpw5").onclick = () => {
    if (checkpw5 == 1) {
        $one(".js-pw5").type = "text"
        $one(".js-swpw5").style.backgroundImage = "url('../assets/images/p3.svg')"
        checkpw5 = 2
  
    } else {
        $one(".js-pw5").type = "password"
        $one(".js-swpw5").style.backgroundImage = "url('../assets/images/p18.svg')"
        checkpw5 = 1
    }
  
  }
} catch (error) {
  
}