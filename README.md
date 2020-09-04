![Ladies Code Collective banner](resources/img/logo.png)

### Created and developed by [Alex Morton](https://alexlsalt.github.io/)  

Ladies Code Collective is a community of creative coding women. 
Productivity and collaboration for coding ladies who crave the dedicated time to bring their creative projects to life.

## About

As a woman on a journey of teaching myself how to code and ultimately making a career transition into software engineering, 
I created Ladies Code Collective in June 2020 as a podcast and an online community for other women along the same journey. 

As an avid blogger documening each day of my coding progress over the course of this year, I felt that I could connect with more women
in a similar position by sharing my personal views on the level of dedication, focus, curiosity, creativity that it takes when learning to code.

The podcast and overall brand message meets at the intersection of coding and creativity. 

### How it works

This project is the overall website for both The Ladies Code Collective Podcast, as well as the 6-Week Productivity Cohorts for 
working together to start and finish any creative coding side project. 

The website has three main pages: Home (index), Podcast, and Cohorts

## Features

The slideshow on the Home (index) page functions via a JavaScript function that swaps out 4 images on a timed interval:

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

The podcast episodes on the Podcast page are rendered dynamically from an object containing each episode's data in the JavaScript file:

    const episodes [
      {
        title: 'Working Slower to Achieve Your Coding Goals Faster',
        id: 5245168,
        url: 'https://www.buzzsprout.com/1184462/52...',
        description: "Lately I've been playing around with the concept ..."
       },
       ...
      ];

    function renderListItems(list) {
      let dataKey = 0;

      list.forEach(el => {

        let html = `<section class="episode" data-key=${dataKey}><h2 style="text-align: center;">${el.title}</h2><div id="buzzsprout-player-${el.id}" class="podcast-player">   </div><span>${el.description}Music credit to <a href="https://soundcloud.com/thisislegang" rel="noopener" target="_blank">Le Gang</a></span></section>
        `;
        document.querySelector('#episode-list').insertAdjacentHTML('beforeend', html);
      
        dataKey++; 
    });  

  }

    window.addEventListener('load', () => {

    // Render all podcast episodes
    
    renderListItems(episodes);

    // Add individual script tags for each podcast player
    
    const episodeHtml = document.querySelectorAll('.episode');
     episodeHtml.forEach(el => {

      let i = el.getAttribute('data-key');
      let script = document.createElement('script');

      script.src = episodes[i].url;

      el.appendChild(script);
      });
    });
