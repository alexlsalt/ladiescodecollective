// NAV BUTTON ACTIONS

// document.querySelector('#nav_podcast').addEventListener('click', e => {
//   e.preventDefault();
//   document.querySelector('#podcast_banner').style.display = 'block';
// })

// PODCAST MODAL APPEAR & DISAPPEAR

// let cross = document.querySelector('.cross');
// let podcastModal = document.querySelector('#podcast_banner');
// cross.addEventListener('click', e => {
//   console.log(e.target.parentNode);
//   e.target.parentNode.style.display = 'none';
// });


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

