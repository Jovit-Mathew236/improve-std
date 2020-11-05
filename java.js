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

function dim1Change() {
     var str = document.getElementById("1Dim").innerHTML;
     var str1 = document.getElementById("Dim").innerHTML;
     var str2 = document.getElementById("obj").innerHTML;
     if (str.innerHTML = "three") {
          var res = str.replace("three", "two");
     }
     if (str1.innerHTML = "three") {
          var res1 = str1.replace("three", "two");
     }
     if (str2.innerHTML = "space") {
          var res2 = str2.replace("space", "palne");
     }
     document.getElementById("1Dim").innerHTML = res;
     document.getElementById("Dim").innerHTML = res1;
     document.getElementById("obj").innerHTML = res2;
     document.getElementById("dim1").style.display = "none";
     document.getElementById("dim4").style.display = "block";
     document.getElementById("dim2").style.display = "block";
     document.getElementById("dim3").style.display = "none";
}
function dim2Change() {
     var str = document.getElementById("1Dim").innerHTML;
     var str1 = document.getElementById("Dim").innerHTML;
     var str2 = document.getElementById("obj").innerHTML;
     var res = str.replace("one", "two");
     var res1 = str1.replace("one", "two");
     var res2 = str2.replace("straight line", "plane");
     document.getElementById("dim2").style.display = "none";
     document.getElementById("dim3").style.display = "block";
     document.getElementById("dim1").style.display = "none";
     document.getElementById("dim4").style.display = "block";
     document.getElementById("1Dim").innerHTML = res;
     document.getElementById("Dim").innerHTML = res1;
     document.getElementById("obj").innerHTML = res2;
}
function dim3Change() {
     var str = document.getElementById("1Dim").innerHTML;
     var str1 = document.getElementById("Dim").innerHTML;
     var str2 = document.getElementById("obj").innerHTML;
     var res = str.replace("two", "three");
     var res1 = str1.replace("two", "three");
     var res2 = str2.replace("plane", "space");
     document.getElementById("dim3").style.display = "none";
     document.getElementById("dim2").style.display = "block";
     document.getElementById("dim1").style.display = "block";
     document.getElementById("dim4").style.display = "none";
     document.getElementById("1Dim").innerHTML = res;
     document.getElementById("Dim").innerHTML = res1;
     document.getElementById("obj").innerHTML = res2;
}
function dim4Change() {
     var str = document.getElementById("1Dim").innerHTML;
     var str1 = document.getElementById("Dim").innerHTML;
     var str2 = document.getElementById("obj").innerHTML;
     if (str.innerHTML = "two") {
          var res = str.replace("two", "one");
     }
     if (str1.innerHTML = "two") {
          var res1 = str1.replace("two", "one");
     }
     if (str2.innerHTML = "plane") {
          var res2 = str2.replace("plane", "straight line");
     }
     document.getElementById("1Dim").innerHTML = res;
     document.getElementById("Dim").innerHTML = res1;
     document.getElementById("obj").innerHTML = res2;
     document.getElementById("dim4").style.display = "none";
     document.getElementById("dim1").style.display = "block";
     document.getElementById("dim2").style.display = "block";
     document.getElementById("dim3").style.display = "none";
}
