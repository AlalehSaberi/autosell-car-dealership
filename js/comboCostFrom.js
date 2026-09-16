let options2 = document.getElementById("options_cost_from");
let optionList2 = [
  "4,000,000,000",
  "3,000,000,000",
  "2,000,000,000",
  "1,500,000,000",
  "1,100,000,000",
  "700,000,000",
];

let isOpen2 = false;

options2.addEventListener("click", addToUIOptions2);

function addToUIOptions2(e) {
  if (e.target.classList.contains("hide-option")) {
    controlOptions2(e);
  } else {
    const pickedOption = e.target;
    pickedOption.classList.add("costfilterfrom");
    console.log(pickedOption.innerHTML);
    if (options2.firstElementChild.classList.contains("hide-option")) {
      options2.removeChild(options2.firstElementChild);
    }
    options2.insertAdjacentElement("afterbegin", pickedOption);

    deleteOptions2();
    controlOptions2(e);
  }
}

function controlOptions2(e) {
  if (isOpen2 === false) {
    createOptions2();
    options2.classList.add("opened");
    isOpen2 = true;
  } else {
    deleteOptions2();
    options2.classList.remove("opened");
    isOpen2 = false;
  }
}

function deleteOptions2() {
  while (options2.childElementCount > 1) {
    options2.removeChild(options2.lastElementChild);
  }
}

function createOptions2() {
  optionList2.forEach((element) => {
    if (options2.firstElementChild.textContent !== element) {
      let option = document.createElement("div");
      option.className = "option";
      option.textContent = element;

      options2.firstElementChild.insertAdjacentElement("afterend", option);
    }
  });
}
