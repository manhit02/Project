var swiper = new Swiper(".mySwiper", {
  keyboard: true,
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
var swiper2 = new Swiper(".mySwiper2", {
  keyboard: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
var swiper3 = new Swiper(".mySwiper3", {
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 0,
 
  breakpoints: {
    1023: {
    
      slidesPerView: 3,
  
    },
    739:{
      slidesPerView: 3,


    }
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
$one('.js-movtop').onclick = () => {

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
try {
  $$all(".dropdown-menu li a").forEach((value, index, array) => {
  value.onclick=()=>{
    $one('.js-value').innerText = value.innerHTML;
  
  
  }
  })
} catch (error) {
  
}