// HEADER SLIDESHOW

let num = 0;

setInterval(() => {
  num++;

  if (num <= 4) {
    document.querySelector(".heading_slide").src =
      "resources/img/slide_" + num + ".png";
  } else {
    num = 0;
  }
}, 1000);

// PREVENT IMAGE DRAGGING

let images = document.querySelectorAll('.image');
images.forEach(image => {
  image.setAttribute("draggable", false);
});
