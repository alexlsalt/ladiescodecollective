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


// Mobile Nav functionality (hamburger icon on-click)

const menuIcon = document.querySelector('.hamburger-icon');
const exitIcon = document.querySelector('.exit-icon');

menuIcon.addEventListener('click', () => {

  document.querySelector('#nav-mobile').style.display = 'flex';
  exitIcon.style.display = 'block';
  menuIcon.style.display = 'none';

  window.addEventListener('resize', () => {

    if (window.innerWidth > 545) {
      document.querySelector('#nav-desktop').style.display = 'flex';
      document.querySelector('#nav-mobile').style.display = 'none';
      menuIcon.style.display = 'none';
      exitIcon.style.display = 'none';
    } else {
      menuIcon.style.display = 'block';
      document.querySelector('#nav-desktop').style.display = 'none';
  
    }
  
  });
  
  
});

exitIcon.addEventListener('click', () => {
  document.querySelector('#nav-mobile').style.display = 'none';
  exitIcon.style.display = 'none';
  menuIcon.style.display = 'block';
});

