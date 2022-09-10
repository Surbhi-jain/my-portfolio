import self from "../img/self.png";
import nopreview from "../img/nopreview.png";
import portfolio from "../img/surbhi-portfolio.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Surbhi",
  lastName: "Jain",
  initials: "SJ", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "Fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "Based in India",
    },
    {
      emoji: "👩‍🎓",
      text: 'Student at <a href="https://www.iitg.ac.in/" target="_blank">IIT Guwahati</a>',
    },
    {
      emoji: "📧",
      text: '<a href="mailto:jain.surbhi2112@gmail.com">jain.surbhi2112@gmail.com</a>',
    },
    {
      emoji: "📜",
      text: '<a href="/SurbhiJain.pdf" download="SurbhiJain.pdf">Know me more</a>',
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/profile.php?id=100006499042981",
      icon: "fa fa-facebook",
    },
    // {
    //   link: "https://www.instagram.com/agamj474/?hl=en",
    //   icon: "fa fa-instagram",
    // },
    {
      link: "https://github.com/Surbhi-jain",
      icon: "fa fa-github",
    },
    {
      link: "https://www.linkedin.com/in/surbhi2112/",
      icon: "fa fa-linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: `Hello! I'm Surbhi. I'm pursuing M.Tech at the Indian Institute of Technology, Guwahati. 
          Previously I worked at Accenture India as a software developer. 
          I enjoy tracking, listening to Hindi songs, hanging out with friends, and Coding. 
          I believe the technological revolution can solve many more real-life problems in India.`,
  skills: {
    proficientWith: [
      "C/C++",
      "Data Structures and Algorithms",
      "Java",
      "SQL (Oracle, MySQL)",
      "Spring / Spring Boot",
      "Hibernate",
      "JPA",
    ],
    exposedTo: ["python", "git"],
  },
  hobbies: [
    {
      label: "tracking",
      emoji: "🏃‍♀️",
    },
    {
      label: "music",
      emoji: "🎶",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Portfolio",
      live: "http://surbhijain.in/",
      image: portfolio,
    },
    {
      title: "AMPOL",
      image: nopreview,
    },
    {
      title: "Data Layout Transformation for data intensive applications",
      image: nopreview,
    },
    {
      title: "Course Project | Speech Based Interactive Quiz",
      image: nopreview,
    },
  ],
};
