let options1 = document.getElementById("options_brand");
let optionList1 = [
  "BMW",
  "Aston Martin",
  "Mercedes Benz",
  "Volvo",
  "Audi",
  "Fiat",
  "Toyota",
];

let isOpen1 = false;

options1.addEventListener("click", addToUIOptions1);

function addToUIOptions1(e) {
  if (e.target.classList.contains("hide-option")) {
    controlOptions1(e);
  } else {
    const pickedOption = e.target;
    pickedOption.classList.add("brandfilter");
    console.log(pickedOption.innerHTML);
    if (options1.firstElementChild.classList.contains("hide-option")) {
      options1.removeChild(options1.firstElementChild);
    }
    options1.insertAdjacentElement("afterbegin", pickedOption);

    deleteOptions1();
    controlOptions1(e);
  }
}

function controlOptions1(e) {
  if (isOpen1 === false) {
    createOptions1();
    options1.classList.add("opened");
    isOpen1 = true;
  } else {
    deleteOptions1();
    options1.classList.remove("opened");
    isOpen1 = false;
  }
}

function deleteOptions1() {
  while (options1.childElementCount > 1) {
    options1.removeChild(options1.lastElementChild);
  }
}

function createOptions1() {
  optionList1.forEach((element) => {
    if (options1.firstElementChild.textContent !== element) {
      let option = document.createElement("div");
      option.className = "option";
      option.textContent = element;

      options1.firstElementChild.insertAdjacentElement("afterend", option);
    }
  });
}
