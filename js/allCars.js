// let heart = document.getElementById("car-fav-1");

const changeBg = (element) => {
  if (element.getAttribute("test_data") == "true") {
    element.style.background =
      'url("../assets/images/heart12.png") no-repeat center center';
    element.style.backgroundSize = "contain";
    element.setAttribute("test_data", "false");
  } else {
    element.style.background =
      'url("../assets/images/heart21.png") no-repeat center center';
    element.style.backgroundSize = "contain";
    element.setAttribute("test_data", "true");
  }
};
// console.log(heart.getAttribute("test_data"));

// heart.addEventListener("click", changeBg);

window.onclick = function (event) {
  if (!event.target.className.includes("colorfilter")) {
    isOpen = false;
    deleteOptions();
    options.classList.remove("opened");
  }
  if (!event.target.className.includes("brandfilter")) {
    isOpen1 = false;
    deleteOptions1();
    options1.classList.remove("opened");
  }
  if (!event.target.className.includes("costfilterfrom")) {
    isOpen2 = false;
    deleteOptions2();
    options2.classList.remove("opened");
  }
  if (!event.target.className.includes("costfilterto")) {
    isOpen3 = false;
    deleteOptions3();
    options3.classList.remove("opened");
  }
};
