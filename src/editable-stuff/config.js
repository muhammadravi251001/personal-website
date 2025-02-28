// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Muhammad Ravi",
  middleName: "",
  lastName: "Shulthan Habibi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-telegram",
      url: "https://t.me/muhammadravi251001",
    },
    {
      image: "fa-github",
      url: "https://github.com/muhammadravi251001",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/muhammad-ravi-shulthan-habibi/",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@muhammadravi251001",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/muhammadraviiii",
    },
    {
      image: "fa-discord",
      url: "https://discordapp.com/users/688598876701196290",
    },
    {
      image: "fa-gitlab",
      url: "https://gitlab.com/muhammadravi251001",
    },
    {
      image: "fa-google",
      url: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=muhammadravi251001@gmail.com&body=text-example",
    },
    {
      image: "fa-drupal",
      url: "https://huggingface.co/muhammadravi251001",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
// a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
// b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
// c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
// d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/muhammadravi_image.jpeg"),
  imageSize: 375,
  message: `
  My name is **Muhammad Ravi Shulthan Habibi**.  

  I am a recent *Cum Laude* graduate from the **University of Indonesia** with a major in **Computer Science**,  \
  specializing in Artificial Intelligence, particularly:  

  - **Machine Learning**  
  - **Deep Learning**  
  - **Natural Language Processing (NLP)**  
  - **Data Science**  

  I have professional experience as:  

  - **AI/ML Engineer** and **Data Scientist** at [Mekari](https://mekari.com/), where I developed and deployed AI-powered solutions, focusing on **machine learning**, **engineering**, and **data-driven decision-making**.
  - **AI/NLP Researcher** at [University of Indonesia](https://www.ui.ac.id/), where I contributed to impactful AI research projects, including **multilingual NLP** and **low-resource language processing**.
  - 🔗 For a more detailed and comprehensive view of my experience, check out my [LinkedIn](https://www.linkedin.com/in/muhammad-ravi-shulthan-habibi/) and **Resume** below.

  I was a **finalist** in the [ML Olympiad 2024](https://github.com/muhammadravi251001/predicting-earthquake-damage), and my first research paper was published at [EMNLP Miami](https://aclanthology.org/2024.emnlp-main.296/).  \
  I actively participate in AI research communities such as [IndoNLP](https://indonlp.github.io/) and [SEACrowd](https://seacrowd.github.io/seacrowd-catalogue/).  

  📜 My [certifications](https://github.com/muhammadravi251001/certificates) can be found here.  
  📚 See my [Google Scholar](https://scholar.google.com/citations?user=4E9Ro_8AAAAJ) for publications.  

  You can explore my resume, projects, certifications, and more below. \

  
  ***Note**: Texts that are **blue and underlined** contain hyperlinks leading to detailed information or credentials.*
  `,
  resume: "https://docs.google.com/document/d/1TzSLoTk9pA3HRRqnm5Xig0EJMEEz8Q9r/edit?usp=sharing&ouid=111560051507342615895&rtpof=true&sd=true",
  email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=muhammadravi251001@gmail.com&body=my-text"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Selected Projects",
  gitHubUsername: "muhammadravi251001",
  reposLength: 0,
  specificRepos: ["multilingual-qas-with-nli", "qas-with-indonli", "pet-image-classification", "seacrowd-datahub"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
/*
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Mathematics", value: 95 },
    { name: "Linear Algebra", value: 80 },
    { name: "Statistics & Probability", value: 85 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};
*/

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch!",
  message:
    "I'm currently looking for full-time (as a worker or researcher) AI/ML/NLP/CV/DS ! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "muhammadravi251001@gmail.com",
};

// EXPERIENCES SECTION
const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
const blog = {
   show: true,
};

export { navBar, mainBody, about, repos, leadership, getInTouch, experiences, blog };
