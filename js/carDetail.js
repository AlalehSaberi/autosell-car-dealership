// function insertAfter(newNode, existingNode) {
//   existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }

const show = (element) => {
  let main_img = document.getElementById("main_img");

  let img_src = element.firstElementChild.src;
  main_img.src = img_src;
  console.log();
};

const changeBg = (element) => {
  console.log(element);
  if (element.getAttribute("test_data") == "true") {
    element.style.background =
      'url("../assets/images/heart12.png") no-repeat center center';
    element.style.backgroundSize = "contain";
    element.setAttribute("test_data", "false");
  } else {
    element.style.background =
      'url("../assets/images/heart-16.png") no-repeat center center';
    element.style.backgroundSize = "contain";
    element.setAttribute("test_data", "true");
  }
};

//   let li = document.createElement("div");
//   li.style.width = "100%";
//   li.style.height = "100%";
//   li.style.position = "absolute";
//   li.style.top = "0";
//   li.style.zIndex = "10";
//   li.style.filter = "brightness(1.9)";

//   // insert a new node after the last list item
//   insertAfter(li, element.lastElementChild);

//   let pp = document.getElementById("gvh").querySelector(".gridView-img");
//   console.log(pp);
//   if (!pp.classList.contains("opacity")) {
//     pp.classList.add("opacity");
//   }
