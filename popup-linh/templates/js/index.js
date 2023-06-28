var $one = document.querySelector.bind(document);
var $$all = document.querySelectorAll.bind(document);
try {
    var checkpw1=1
 

    $one(".popup-dn-js-switchpw1").onclick = () => {
     
        if (checkpw1 == 1) {
         
            $one(".popup-dn-js-pw1 input").type = "text"
            $one(".popup-dn-js-switchpw1").style.backgroundImage = "url('../assets/images/Vector11.svg')"
            checkpw1 = 2
         
    
        } else {
            $one(".popup-dn-js-pw1 input").type = "password"
            $one(".popup-dn-js-switchpw1").style.backgroundImage = "url('../assets/images/Vector.png')"
            checkpw1 = 1
            
         

        }
    
    }
   
   
    
} catch (error) {
    
}
try {
    var checkpw2=1
   
    $one(".popup-dn-js-switchpw2").onclick = () => {
       
        if (checkpw2 == 1) {
        
            $one(".popup-dn-js-pw2 input").type = "text"
            $one(".popup-dn-js-switchpw2").style.backgroundImage = "url('../assets/images/Vector11.svg')"
            checkpw2 = 2
    
        } else {
            $one(".popup-dn-js-pw2 input").type = "password"
            $one(".popup-dn-js-switchpw2").style.backgroundImage = "url('../assets/images/Vector.png')"
            checkpw2 = 1
        }
    
    }
} catch (error) {
    
}
try {
    var checkpw3=1
    $one(".popup-dn-js-switchpw3").onclick = () => {
        if (checkpw3 == 1) {
            $one(".popup-dn-js-pw3 input").type = "text"
            $one(".popup-dn-js-switchpw3").style.backgroundImage = "url('../assets/images/Vector11.svg')"
            checkpw3 = 2
    
        } else {
            $one(".popup-dn-js-pw3 input").type = "password"
            $one(".popup-dn-js-switchpw3").style.backgroundImage = "url('../assets/images/Vector.png')"
            checkpw3 = 1
        }
    
    }
} catch (error) {
    
}