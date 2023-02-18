function myFunction() {
    var x = document.getElementById("myInput1");
    var y = document.getElementById("myInput2");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }


