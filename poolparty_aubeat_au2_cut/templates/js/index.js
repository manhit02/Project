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

      window.scrollTo({ top: $one('.app-group').offsetTop, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov3').onclick = () => {

      window.scrollTo({ top: $one('.app-group').offsetTop + $one('.app-group__freegift').offsetHeight, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov4').onclick = () => {

      window.scrollTo({ top: $one('.app-group').offsetTop + $one('.app-group__freegift').offsetHeight + $one('.app-group-watershot').offsetHeight, left: 0, behavior: 'smooth' });
   }
   $one('.js-mov5').onclick = () => {

      window.scrollTo({ top: $one('.app-group2').offsetTop, left: 0, behavior: 'smooth' });
   }
   $one('.js-navLeftBtn').onclick = () => {
      $one('.js-navLeft').classList.toggle('defaut')
     
   }
} catch (error) {

}