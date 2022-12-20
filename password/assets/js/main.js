var x = document.getElementById("Input");
var y = document.querySelector("#checkbox")
y.onclick = function myFunction() {
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}