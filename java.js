function myClick(){
    window.alert("this is link")
}



function changeTheme() {
   var bgimg = document.getElementById("body").style.backgroundImage = "url('bg1.jpg')";
   
   
 
   if (bgimg != document.getElementById("body").style.backgroundImage) {
        document.getElementById("body").style.backgroundImage = "url('bg2.jpg')";
   } 
   if(bgimg == document.getElementById("body").style.backgroundImage){
        document.getElementById("body").style.backgroundImage = "url('bg1.jpg')"
   }
}

  
