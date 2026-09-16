let options3 = document.getElementById("options_cost_to");
let optionList3 = [
  "BMW",
  "Aston Martin",
  "New York",
  "Las Vegas",
  "Miami",
  "Houston",
  "Seattle",
];

let isOpen3 = false;

options3.addEventListener("click", addToUIOptions3);

function addToUIOptions3(e) {
  if (e.target.classList.contains("hide-option")) {
    controlOptions3(e);
  } else {
    const pickedOption = e.target;
    pickedOption.classList.add("costfilterto");
    console.log(pickedOption.innerHTML);
    if (options3.firstElementChild.classList.contains("hide-option")) {
      options3.removeChild(options3.firstElementChild);
    }
    options3.insertAdjacentElement("afterbegin", pickedOption);

    deleteOptions3();
    controlOptions3(e);
  }
}

function controlOptions3(e) {
  if (isOpen3 === false) {
    createOptions3();
    options3.classList.add("opened");
    isOpen3 = true;
  } else {
    deleteOptions3();
    options3.classList.remove("opened");
    isOpen3 = false;
  }
}

function deleteOptions3() {
  while (options3.childElementCount > 1) {
    options3.removeChild(options3.lastElementChild);
  }
}

function createOptions3() {
  optionList3.forEach((element) => {
    if (options3.firstElementChild.textContent !== element) {
      let option = document.createElement("div");
      option.className = "option";
      option.textContent = element;

      options3.firstElementChild.insertAdjacentElement("afterend", option);
    }
  });
}
