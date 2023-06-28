var $one = document.querySelector.bind(document)
var $all = document.querySelectorAll.bind(document)
try {
  
   $one('.js-showmenu').onclick = () => {
      $one('.js-menu').classList.toggle('active');
   }
   $one('.js-movtop').onclick = () => {

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov1').onclick = () => {

      window.scrollTo({ top: $one('.app-checkin').offsetTop, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov2').onclick = () => {

      window.scrollTo({ top: $one('.app-turn').offsetTop, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov3').onclick = () => {

      window.scrollTo({ top: $one('.app-loichuc').offsetTop, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov4').onclick = () => {

      window.scrollTo({ top: $one('.app-sinhnhat').offsetTop, left: 0, behavior: 'smooth' });
   }
  var countDown,countDown1
   window.onload = () => {
      const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;

      let ngayset = "May 29, 2023 00:00:00",
         countDown = new Date().getTime(),
         x = setInterval(function () {
            let now = new Date().getTime(),
               distance = countDown - now;
            $one(".ngay").innerText = Math.floor(distance / (day)),
               $one(".gio").innerText = Math.floor((distance % (day)) / (hour)),
               $one(".phut").innerText = Math.floor((distance % (hour)) / (minute));
            $one(".giay").innerText = Math.floor((distance % (minute)) / second);
         }, 0)
       


         const second1 = 1000,
         minute1 = second1 * 60,
         hour1 = minute1 * 60,
         day1 = hour1 * 24;

      let ngayset1 = "May 29, 2023 00:00:00",
         countDown1 = new Date().getTime(),
         x1 = setInterval(function () {
            let now1 = new Date().getTime(),
               distance1 = countDown1 - now1;
            $one(".ngay1").innerText = Math.floor(distance1 / (day1)),
               $one(".gio1").innerText = Math.floor((distance1 % (day1)) / (hour1)),
               $one(".phut1").innerText = Math.floor((distance1 % (hour1)) / (minute1));
            $one(".giay1").innerText = Math.floor((distance1 % (minute1)) / second1);
         }, 0)
        
   }
  


} catch (error) {

}