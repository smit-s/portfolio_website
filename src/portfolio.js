/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Smit's Portfolio",
  description:"",
    // "A passionate individual who always thrives to work on products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Smit Sanghavi Portfolio",
    type: "website",
    url: "https://smit-s.github.io",
  },
};

//Home Page
const greeting = {
  title: "Smit Sanghavi",
  logo_name: "Smit Sanghavi",
  nickname: "",
  subTitle:"",
    // "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/10Gyu8RmTBUFvtqxeAkavIbhswXWp_dhr/view?usp=sharing",
  portfolio_repository: "https://github.com/smit-s/smit-s.github.io",
  githubProfile: "https://github.com/smit-s",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/smit-s",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/smit-sanghavi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:smitsanghavi011@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing web applications using Spring boot.",
        "⚡ Building responsive website front end using React.",
        "⚡ Developing mobile applications using Flutter.",
        "⚡ Creating application backend in Node and Express.",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6cb33e",
          },
        },
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
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },        
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "AI & MAchine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing deeplearning and statistical models for various Natural language processing and Computer vision tasks.",
        "⚡ Experienced in developing medical image processing pipelines.",
        "⚡ Worked on unconventional models like Extreme Learning Machines image compression.",
        "⚡ Developing interfaces for visualization of data and results.",
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
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/smit_",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/smit_",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@smit_s",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#000000",
      },
      profileLink: "https://leetcode.com/smit_s/",
    },
    {
      siteName: "Stopstalk",
      iconifyClassname: "simple-icons:stopstalk",
      style: {
        color: "#000000",
      },
      profileLink: "https://www.stopstalk.com/user/profile/smit_s",
    },{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/smit_",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Stony Brook University",
      subtitle: "MS in Computer Science",
      logo_path: "",
      alt_name: "Stony Brook",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I am stuudying courses like Analysis of Algorithms, Operating Systems, Artificial Intellegence, Intro to Computer vision etc.",
        "⚡ As a part of coursework, I have worked on projects like desigining different AI based agents for navigating Pacman, Panorma generator using feature extraction and image stitching.",
      ],
    },
    {
      title: "Pandit Deendayal Energy University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "",
      alt_name: "Pandit Deendayal Energy University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied subjects like Data structures, Algorithms, Database systems, Distributed Systems, Object-Oriented programmingetc.",
        "⚡ Apart from this, I have done several certificate courses on Deep Learning, Algorithms, Natural language processing.",
        "⚡ Received Merit cum Means Scholarship which is given to top 10% of students in state which covered 25% of my tuition fees.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/6eec44a5b05584d548c6d7d86771c6ce",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Algorithms",
      subtitle: "- Codechef",
      logo_path: "codechef.png",
      certificate_link:
        "https://www.codechef.com/certificates/preview/829ad5b",
      alt_name: "Codecehf",
      color_code: "#0C9D5899",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software engineer",
          company: "Opshub inc.",
          company_url: "https://www.opshub.com/",
          logo_path: "opshub.png",
          duration: "Jan 2020 - May 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "Worked as a member of Scrum team. Responsibilities include analysis, planning, design and implementation of features, bugs and patches as a part of software development lifecycle of the product, Opshub integration manager.\n Solved more than 90 bugs, problems and patches. Delivered more than 9 features like development of connectors and addition of functionalilty to exisitng connectors for prominent customers and automation framework.\n  Developed processing pipeline to fetch and process requirement and test work-items of Windchill RV&S.\n Developed API to migrate Jira R4J requirements  and synchronize to another end system.\n Implemented data poller class for ServiceNow which fetches data using a custom Iterator from service now in chunks reducing the time to poll and process data. Worked as technical support engineer for customers like UPS global and Mass General Brigham.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software engineering  Intern",
          company: "Opshub inc.",
          company_url: "https://www.opshub.com/",
          logo_path: "opshub.png",
          duration: "Jan 2020 - May 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "Implemented API to synchronize requirement links to and from Windchill RV&S with other ALMs using OIM. Improved Opshub integration manager’s automation framework by adding more unit test cases for testing migration of links and solving bugs in adapters of ALMs and Devops tools like ServiceNow, Windchill RV&S, Azure Devops etc.",
          color: "#ee3c26",
        },
        {
          title: "Machine learning intern",
          company: "Capgemini",
          company_url: "https://www.capgemini.com/us-en/",
          logo_path: "Capgemini.png",
          duration: "June 2019 - August 2019",
          location: "Gandhinagar, Gujarat",
          description:
            "Created a semantic search tool for clustering and visualization of documents using Elmo (bidirectional LSTM architecture) in Python. This search tool helps users analyze test-cases by finding redundant steps and combining test cases. This tool helped identify and reduce approximately 9% of redundant test case steps.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor and Voulenteer at Rotary club",
          company: "Rotary Club",
          company_url: "https://rotaryclubbhavnagarroundtown.webs.com/",
          logo_path: "rotary.png",
          duration: "June 2017 - July 2017",
          location: "Bhavnagar, Gujarat",
          description:
            "Working as mentor, teaching board games like chess to underprivileged students at Rotary club and volunteer at Polio vaccination camp of rotary club.",
          color: "#4285F4",
        },
              ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed many projects as a part of my academics around machine learning, web development and system design. Besides that I have developed a few personal projects like Automated trading bot, web application for viewing real time stock indices and studying graphs of stocks. I have been a contributer at Arviz and technical content writer at cppsecrets.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Here are a few publications I contributed to.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Machine Learning Based Lens-Free Shadow Imaging Technique for Field-Portable Cytometry      ",
      createdAt: "27 February 2022",
      description: "Machine Learning Based Lens-Free Shadow Imaging Technique for Field-Portable Cytometry",
      url:
        "https://www.mdpi.com/2079-6374/12/3/144/htm",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "ANNSESDIHM: An Artificial Neural Networkbased Signal Enhancement Scheme for Digital Inline Holography (DIH) Microscope",
      createdAt: "1 November 2020",
      description: "ANNSESDIHM: An Artificial Neural Network based Signal Enhancement Scheme for Digital Inline Holography (DIH) Microscope ",
      url:
        "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9374319",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_smit.jpg",
    description:
      "",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "700, Health Sciences Drive, Stony brook, NY, 11790",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/gGYqZXzXdgBCZ2xW8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 9349497027",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
