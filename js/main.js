var elBody = document.querySelector(".body");
var elForm = document.querySelector(".form");
var elFarenheit = document.querySelector(".input__farenheit");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elCelciumInput = (document.querySelector(".input__temp").value.trim());

  if (elCelciumInput) {
    var tempResult =(elCelciumInput * 9/5 + 32);
    elFarenheit.value = tempResult;
  } else {
    elFarenheit.value = ("Please enter a number !!!");
  }

  if (elCelciumInput <= 5) {
    elBody.classList.add("bg-info")
  } else if (elCelciumInput <= 25) {
    elBody.classList.add("bg-warning")
  } else {
    elBody.classList.add ("bg-danger")
  }
})
