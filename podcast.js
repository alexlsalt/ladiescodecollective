// RENDER PODCAST EPISODES ON PODCAST PAGE

const episodes = [
  {
    title: 'The Benefits of Documenting Your Coding Journey',
    id: 5781751,
    url: 'https://www.buzzsprout.com/1184462/5781751-lcc-13-the-benefits-of-documenting-your-coding-journey.js?container_id=buzzsprout-player-5781751&player=small',
    description: "In this episode of The Ladies Code Collective Podcast, we're taking a deep dive into the benefits of documenting your coding journey.<br><br>Whatever your medium (blogging, podcasting, making videos/vlogs, etc), this episode will help you develop a plan to start documenting your own coding or learning journey, to stay consistent with it over time, and to have a good time while doing so.<br><br>"
  },
  {
    title: "'This is Hard' vs 'This is Too Hard'",
    id: 5671681,
    url: 'https://www.buzzsprout.com/1184462/5671681-lcc-12-this-is-hard-vs-this-is-too-hard.js?container_id=buzzsprout-player-5671681&player=small',
    description: "Today’s topic is a fun tool for getting out of our own heads and actually getting down to work on something that we’ve been putting off because it feels too difficult or complicated or unclear.<br><br>We often tell ourselves that something is 'too hard' and this is what causes us to procrastinate, work on other things that don’t really push the needle forward, and ultimately never undertake the task even though we know that we need to in order to progress and advance in our coding journey.<br><br>Listen in for tips on this simple yet effective mindset shift!<br><br>"
  },
  {
    title: "Let's Talk About Perfectionism",
    id: 5464798,
    url: 'https://www.buzzsprout.com/1184462/5464798-lcc-11-let-s-talk-about-perfectionism.js?container_id=buzzsprout-player-5464798&player=small',
    description: "Today’s topic is all about the negative effects that perfectionism can have on us as developers on our coding journeys.<br><br>There's this pressure to perform in a way where we feel the need to make it seem as though whatever we’ve built or are working on is perfect and essentially 'fault-less.'<br><br>We feel like any new project we start or new skill we’re trying to build isn’t adequate or appropriate if it doesn’t “come out of the box” in its final, most perfect stage.<br><br>Listen in for more about how to recognize and address perfectionism along the coding journey!<br><br>Resources mentioned in this episode:<ul><li>Pure React by Dave Ceddia</li></ul>"
  },
  {
    title: 'Listener Q&A: Learning JS & React, Your First Job as a Junior Developer & Blogging',
    id: 5362759,
    url: 'https://www.buzzsprout.com/1184462/5362759-lcc-10-listener-q-a-learning-js-react-your-first-job-as-a-junior-developer-blogging.js?container_id=buzzsprout-player-5362759&player=small',
    description: "This is another Q&A episode to answer some of the questions I’ve gotten over the past couple of weeks from podcast listeners and my email subscribers!<br><br>Join me as I answer questions involving:<ul><li>Learning JavaScript and React at the same time</li><li>The apparent shortage of developers in the job market but the lack of demand for *junior* developers and how to navigate landing your first job despite that</li><li>My recommended platforms for starting your own coding blog (even as a newbie)</li></ul>P.S. If you have questions for me that you’d like me to explore and answer on the next Q/A episode, email them to me at hey@ladiescodecollective.com!<br><br>"
  },
  {
    title: 'Working Slower to Achieve Your Coding Goals Faster',
    id: 5245168,
    url: 'https://www.buzzsprout.com/1184462/5245168-lcc-9-working-slower-to-achieve-your-coding-goals-faster.js?container_id=buzzsprout-player-5245168&player=small',
    description: "Lately I've been playing around with the concept of time in my daily work and studying.<br><br>We all know how it feels to be pulled in all different directions when we’re getting through our work day.<br><br>We have to-do items that pile one on top of the other and we end up getting so altogether worn out by the end of the day because of it.<br><br>But when we’re working in a full-on frenzy to do and finish and move on to All The Things, we miss out on the opportunity to engage in truly deep work that actually moves us forward in the direction we want to go.<br><br>If you’re learning something new, really make sure you’re taking the time to sit with unfamiliar concepts so that you end up retaining them more quickly than you would if you were only just half-heartedly buzzing through them in an attempt to move on to the next thing.<br><br>Resources mentioned in this episode:<ol><li>Discovering the Joy of Single-Tasking, Cup of Jo</li></ol>"
  },
  {
      title: 'How to Actually Finish Any Coding Side Project',
      id: 5157238,
      url: 'https://www.buzzsprout.com/1184462/5157238-lcc-8-how-to-actually-finish-any-coding-side-project.js?container_id=buzzsprout-player-5157238&player=small',
      description: "It's time to actually finish and showcase your coding side projects!<br><br>In this episode of The Ladies Code Collective Podcast, I talk about the problem of not finishing and ultimately never showcasing the creative coding side projects we start.<br><br>Whether it's for embellishing your coding portfolio or just for practicing a new coding language or framework, side projects are essential along our coding journeys.<br><br>This episode covers the five essential steps I personally use to finish any side project I start.<br><br>"
  },

  {
      title: 'Q&A: Tutorials, Tutorials, Tutorials',
      id: 5060411,
      url: 'https://www.buzzsprout.com/1184462/5060411-lcc-7-q-a-tutorials-etc.js?container_id=buzzsprout-player-5060411&player=small',
      description: "This is the first Q&A episode of The Ladies Code Collective Podcast!<br><br>Join me as I answer questions about all things tutorials - including how when to know when to step away from tutorials and start building projects on your own, as well as my own personal path in teaching myself how to code.<br><br>"
  },

  {
      title: "Don't Stop Learning JavaScript Three Weeks After Starting It",
      id: 4962923,
      url: 'https://www.buzzsprout.com/1184462/4962923-lcc-6-don-t-stop-learning-javascript-three-weeks-after-starting-it.js?container_id=buzzsprout-player-4962923&player=small',
      description: "This episode takes a deep dive into why exactly we should resist giving up after only a few weeks of learning something.<br><br>I often see beginners in the coding community getting frustrated that learning to program isn't 'sticking' as quickly as they'd like it to.<br><br>But the problem with thinking that we should give up after a finite amount of time is that we don't even consider staying with something for the ultimate long run.<br><br>Think about taking a flight across the world. When you get on the airplane, you buckle up and prepare ourselves for a long flight. We don't have any other choice than to sit back and be patient. We need to have the same mindset when we're learning to program.<br><br>We discuss learning a true programming language like JavaScript and how we don't always realize that it's a completely different way of thinking.<br><br>Tune in to hear my three main tips for sticking with programming for the long haul until you find success with it (in whatever way that looks for you!)<br><br>"
  },

  {
      title: 'Erring on the Side of Taking Action as a Web Developer',
      id: 4764146,
      url: 'https://www.buzzsprout.com/1184462/4764146-lcc-5-erring-on-the-side-of-taking-action-as-a-web-developer.js?container_id=buzzsprout-player-4764146&player=small',
      description: "When learning to code, there's no true one-size-fits-all blueprint for learning to code. We might feel like we have so, so many choices of what to do next that it can feel really stressful. We obviously want to be sure we’re not wasting time in learning something so we need to be *sure* that what we’re pursuing is worthwhile.<br><br>But even if we learn something that we don’t end up using, doesn’t it still give us a little bit more of an idea about the overall ecosystem of programming?<br><br>The secret is to put one foot in front of the other day after day after day.<br><br>Other mentions in this episode: <br><ul><li><a href='https://www.youtube.com/watch?time_continue=1&v=l1UEE9famfA&feature=emb_title&fbclid=IwAR2XhM8kkWScxb5d12s4u8v-1MZh1C8CRhBoqVopsfZyS8_LgHxbPWfsEKg' target='_blank' rel='noopener'>My interview on the Way of Living Podcast</a></li> </ul><br>"
  },

  {
      title: 'Cultivating Patience on Your Path to Becoming a Web Developer',
      id: 4668332,
      url: 'https://www.buzzsprout.com/1184462/4668332-lcc-4-cultivating-patience-on-your-path-to-becoming-a-developer.js?container_id=buzzsprout-player-4668332&player=small',
      description: "In this episode of The Ladies Code Collective Podcast, we talk about the importance of developing and cultivating patience on the path to becoming a web developer and gaining our coding skills.<br><br>Patience can really be the deciding factor between those who succeed and achieve their goals and those who don't just by virtue of being 'in it' for the long-haul.<br><br>Three main points to think about when cultivating patience: <ul><li>Erring on the side of savoring instead of devouring</li><li>Understanding that learning anything is a practice in patience</li><li>Removing the focus on the end goal and placing it instead on the day-to-day</li></ul>Music credit to <a href='https://soundcloud.com/thisislegang' rel='noopener' target='_blank'>Le Gang</a><br><br>"
  },

  {
      title: "How to Start (and Share) a New Project When You're Terrified to Start",
      id: 4577927,
      url: 'https://www.buzzsprout.com/1184462/4577927-how-to-start-a-new-project-when-you-re-terrified-to-start.js?container_id=buzzsprout-player-4577927&player=small',
      description: "In this episode of The Ladies Code Collective Podcast, we talk about the beauty of starting a new project even (and especially!) when we're nervous about how inexperienced we may be in the beginning.<br><br>We discuss how it's possible to get over the fear of failure (or success!) that we might face even before starting the project itself in order to go forth and share your glorious contributions with others.<br><br>We need to let go of wanting projects to be perfect from the get-go in favor of diving in and embracing the unknown.<br><br>You'll also get the two *most important* questions to ask yourself when you're on the fence about starting or launching a project.<br><br>"
  },

  {
      title: "Embracing the Beginnings of Things",
      id: 4489202,
      url: 'https://www.buzzsprout.com/1184462/4489202-lcc-2-embracing-the-beginnings-of-things.js?container_id=buzzsprout-player-4489202&player=small',
      description: "In this episode, we talk about the overall goals of the podcast >> <ol><li>To discuss and celebrate the intersection of coding logic and creativity</li><li>To encourage women of all backgrounds to embrace the creative side of learning to code</li><li>To build a community of women in tech who can offer and receive support around their pursuit of learning to code and building their respective creative projects</li></ol>We also talk about why starting new projects can be so stressful and (eeek!) scary, but why we should embrace them anyway!<br>Mentioned in this episode:<ul><li>The State of Women in Tech 2020, DreamHost</li></ul>"
  },

  {
      title: "Hey! Nice to Meet Ya!",
      id: 4327955,
      url: 'https://www.buzzsprout.com/1184462/4327955-lcc-1-hey-nice-to-meet-ya.js?container_id=buzzsprout-player-4327955&player=small',
      description: "Welcome to The Ladies Code Collective podcast! I'm so excited to share my own personal journey with you in this first episode.<br><br>Resources mentioned in this episode:<ul><li><a href='https://www.alexmortoncreative.com' rel='noopener' target='_blank'>Alex's personal website and blog</a></li></ul><br>"
  }
];



function renderListItems(list) {
  let dataKey = 0;

  list.forEach(el => {

      let html = `<section class="episode" data-key=${dataKey}><h2 style="text-align: center;">${el.title}</h2><div id="buzzsprout-player-${el.id}" class="podcast-player"></div><span>${el.description}Music credit to <a href="https://soundcloud.com/thisislegang" rel="noopener" target="_blank">Le Gang</a></span></section>
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