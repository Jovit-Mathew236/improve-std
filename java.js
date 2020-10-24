function myClick() {
     window.alert("bit.ly/2020imp")
}

function changeTheme2() {
     var currentColor2 = document.getElementById("body2").style.backgroundColor;


     if (currentColor2 == "whitesmoke") {
          document.getElementById("body2").style.backgroundColor = "black";
          document.getElementById("box2").style.color = "white";
          document.getElementById("table").style.borderColor = "thistle";
          document.getElementById("table2").style.borderColor = "thistle";
          document.getElementById("table3").style.borderColor = "thistle";
          document.getElementById("table4").style.borderColor = "thistle";
          document.getElementById("table5").style.borderColor = "thistle";
     } else {
          document.getElementById("body2").style.backgroundColor = "whitesmoke";
          document.getElementById("box2").style.color = "black";
          document.getElementById("table").style.borderColor = "black";
          document.getElementById("table2").style.borderColor = "black";
          document.getElementById("table3").style.borderColor = "black";
          document.getElementById("table4").style.borderColor = "black";
          document.getElementById("table5").style.borderColor = "black";
     }
}

function changeTheme3() {
     var currentColor2 = document.getElementById("body3").style.backgroundColor;


     if (currentColor2 == "whitesmoke") {
          document.getElementById("body3").style.backgroundColor = "black";
     } else {
          document.getElementById("body3").style.backgroundColor = "whitesmoke";
     }
}

function changeTheme4() {
     var currentColor2 = document.getElementById("body4").style.backgroundColor;


     if (currentColor2 == "whitesmoke") {
          document.getElementById("body4").style.backgroundColor = "black";
     } else {
          document.getElementById("body4").style.backgroundColor = "whitesmoke";
     }
}

$(document).ready(function () {
     $("#btn4").click(function () {
          var body = $("#body").css("backgroundImage");
          if (body.backgroundImage = "url('bg1.jpg')") {
               $("#body").css("background-image", "url('bg8.jpg')");
               $("#btn4").hide()
               $("#btn5").show()
          }
     });
     $("#btn5").click(function () {
          var body = $("#body").css("backgroundImage");
          if (body.backgroundImage = "url('bg8.jpg')") {
               $("#body").css("background-image", "url('bg1.jpg')");
               $("#btn4").show()
               $("#btn5").hide()
          }
     });
});