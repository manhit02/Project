var $one = document.querySelector.bind(document)
var $all = document.querySelectorAll.bind(document)
try {

   $one('.js-showDlBtn').onclick = () => {
      $one('.js-dl').classList.toggle('active');
      $one('.js-dl1').classList.toggle('active');
      if($one('.js-dl').classList.contains('active')){
         $one(".app1-left").style.left="20%";
         
      }
      else{
         $one(".app1-left").style.left="0";
      }
     
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
 


   
  


} catch (error) {

}

try {
   var elem = document.querySelector("footer");
var rect = elem.getBoundingClientRect();

   window.addEventListener('scroll',(event) => {

      if(window.scrollY>$one(".header").offsetHeight){
         $one(".header").style.position="fixed";
         $one(".header").style.top="0px";
         $one(".header").style.left="0px";
         $one(".header").style.right="0px";
      }
      else{
         $one(".header").style.position="unset";
         
      }
     
   });
   if(window.matchMedia("(min-width: 2001px)")){
      $one(".app1-left").style.top="125px";
   }
  

} catch (error) {
   
}
try {
  
   $('.dropdown-menu li a').on('click', function(){
      $('#datebox').val($(this).html());
  });
  $('.dropdown-menu li a').forEach((value, index, array) => {
   value.onclick=()=>{
      value.val(value.html());
   }
  })
} catch (error) {
   
}