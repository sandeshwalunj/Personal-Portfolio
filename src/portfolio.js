/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sandesh",
  logo_name: "Sandesh Walunj",
  nickname: "sandesh",
  full_name: "Sandesh Shivshankar Walunj",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1tH1IROh_khDyuJfozxSg7Ywg9Tie96P3/view?usp=drive_link",
  mail: "mailto:sndshwalunj@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sandeshwalunj",
  linkedin: "https://www.linkedin.com/in/sandeshwalunj1999/",
  gmail: "sndshwalunj@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/Sandeshwalunj2",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and NextJs",
        "⚡ Framework's worked on Bootstrap,Tailwind-css,material-UI",
        "⚡ Backend development using NodeJS, ExpressJS and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#5c79df",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Worked on Dibetic prediction using machine learning Project.",
        "⚡ Certified Python with Data science Internship",
        "⚡ Knowledge of Numpy,Pandas,Scikit-learn...",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SPPU Pune University",
      subtitle: "Bachelor of Computer Engineering",
      logo_path: "sppu.jpg",
      alt_name: "sppu",
      duration: "2020 - 2023",
      marks: "8.46 CGPA",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in AI and Machine Learning,Software Testing,Data-Structures/Algorithms",
        "⚡ Studied Object Oriented Programming and SDLC",
      ],
      website_link: "http://www.unipune.ac.in/",
    },
    {
      title: "MSBTE Mumbai",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "msbte.jpg",
      alt_name: "MSBTE",
      duration: "2017 - 2020",
      marks: "64.94%",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Web Development, Mobile App Development, etc.",
        "⚡ During diploma we studied hardaware/softwareSkills. ",
      ],
      website_link: "https://msbte.org.in/",
    },
    {
      title: "SSC",
      subtitle: "10th Education",
      logo_path: "school.png",
      alt_name: "SSC",
      duration: "2014 - 2015",
      marks: "68.80%",
      descriptions: [
        "⚡I have completed my 10th schooling from Annasaheb Awate Vidyamandir Junnar",
        "🤼‍♂️ I obtained 68.80% marks with English-Medium and from this My journey was started! ",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Basic HackerRank",
      subtitle: "Hackerrank Certificate",
      logo_path: "hacker.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/a40b92ff1de3",
      alt_name: "HackerRank",
      color_code: "#ffc475",
    },
    {
      title: "Javascript HackerRank",
      subtitle: "Javascript Certificate",
      logo_path: "hacker.png",
      certificate_link: "https://www.hackerrank.com/certificates/ee61d4254a24",
      alt_name: "HackerRank",
      color_code: "#ffc475",
    },
    {
      title: "ReactJS HackerRank",
      subtitle: "ReactJS Certificate",
      logo_path: "hacker.png",
      certificate_link: "https://www.hackerrank.com/certificates/33fa230bc287",
      alt_name: "HackerRank",
      color_code: "#ffc475",
    },
    {
      title: "Front-End Devlopment Libraries",
      subtitle: "Front-End Libraries",
      logo_path: "FreeCodeCamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/Sandesh_Walunj/front-end-development-libraries",
      alt_name: "FreeCodeCamp",
      color_code: "#ffc475",
    },
    {
      title: "Javascript-Algorithms-And-Data-Structures",
      subtitle: "Javascript Algorithms",
      logo_path: "FreeCodeCamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/Sandesh_Walunj/javascript-algorithms-and-data-structures",
      alt_name: "FreeCodeCamp",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Internship",
  description:
    "I've completed Python with data science internships.During the internships covered the libraries like numpy,pandas,sci-kit-learn from the basic to advance.Also worked on Dibetic prediction using machine learning...",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Python with Data Science",
          company: "L&D Infotech.Pvt.Lmtd",
          company_url: "https://lndinfotech.co.in/",
          logo_path: "L&D.png",
          duration: "Mar 2022 - May 2022",
          location: "Work From Home",
          description:
            "I've completed Python with data science internships.During the internships covered the libraries like numpy,pandas,sci-kit-learn from the basic to advance.Also worked on Dibetic prediction using machine learning...",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Website/WebApplication Projects. Below are some of my projects and you can check live demo by clicking on projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      name: "Weather Application",
      url: "https://sandesh-weather-app.netlify.app/",
      description: "Real Time Weather Application with Weather API.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
      ],
    },
    {
      name: "Eccomerce-Application",
      url: "https://sandesheccomerce.netlify.app/",
      description: "Eccomerce Website Using ReactJS",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
