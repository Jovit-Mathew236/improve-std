function myClick(){
    window.alert("this is link")
}



function changeTheme() {
  /* var one = document.getElementById("body").style.backgroundImage = "url('bg1.jpg')";
   var two = document.getElementById("body").style.backgroundImage = "url('bg1.jpg')";
   var three = document.getElementById("body").style.backgroundImage = "url('bg2.jpg')";
   */
   var tt = 1
   var tu = 1
  

   if (tt === tu ) {
       document.getElementById("body").style.backgroundImage = "url('bg2.jpg')";
       tt = tt+1;
   } else {
       document.getElementById("body").style.backgroundImage = "url('bg1.jpg')";
       tt = tt-1;
   }
}

  
