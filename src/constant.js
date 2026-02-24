// Skills Section Logo's
import htmlLogo from '../src/assets/tech_logo/html.png'
import cssLogo from '../src/assets/tech_logo/css.png'
import javascriptLogo from '../src/assets/tech_logo/javascript.png'
import reactjsLogo from '../src/assets/tech_logo/reactjs.png'
import reduxLogo from '../src/assets/tech_logo/redux.png'
import tailwindcssLogo from '../src/assets/tech_logo/tailwindcss.png'
import bootstrapLogo from '../src/assets/tech_logo/bootstrap.png'
import nodejsLogo from '../src/assets/tech_logo/nodejs.png'
import expressjsLogo from '../src/assets/tech_logo/express.png'
import mysqlLogo from '../src/assets/tech_logo/mysql.png'
import mongodbLogo from '../src/assets/tech_logo/mongodb.png'
import cLogo from '../src/assets/tech_logo/c.png'
import cppLogo from '../src/assets/tech_logo/cpp.png'
import gitLogo from '../src/assets/tech_logo/git.png'
import githubLogo from '../src/assets/tech_logo/github-DabB8wTb.png'
import vscodeLogo from '../src/assets/tech_logo/vscode.png'
import postmanLogo from '../src/assets/tech_logo/postman.png'
import csharpLogo from '../src/assets/tech_logo/csharp.png'


// Experience logo
import jobportalLogo from '../src/assets/company_logo/jobportal.png'
import nextLogo from  '../src/assets/company_logo/next.jpg'
import ninjaLogo from '../src/assets/company_logo/ninja.jpg'
//Education logo
import bardiyaLogo from '../src/assets/education_logo/godiyana.png'
import holylandLogo from '../src/assets/education_logo/hoyland.png'
import mmcLogo from '../src/assets/education_logo/mmc.png'

//Porjct section
import portfolioLogo from '../src/assets/work_logo/portfolio.png'
import moviesLogo from '../src/assets/work_logo/movies (1).png'
import jobPortalLogo from '../src/assets/work_logo/jobportal.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Redux', logo: reduxLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },


      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },


      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: jobportalLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",

      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: nextLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: ninjaLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",


    ],
  },
];

export const education = [
  {
    id: 0,
    img: mmcLogo,
    school: "MMC TU University, Nepalgunj",
    date: "Sept 2025 - July 2024",
    grade: "",
    desc: "I am pursuing/completed a Bachelor’s degree in Computer Science and Information Technology (CSIT), where I have developed a strong foundation in both theoretical and practical aspects of computing. Throughout my coursework, I gained expertise in programming, web development, database management, and software engineering principles. I have worked on several projects, including fullstack applications, demonstrating my skills in technologies such as HTML, CSS, JavaScript, React, Laravel, and SQL. This degree has enhanced my problem-solving abilities, critical thinking, and technical proficiency, preparing me for professional challenges in the software development and IT industry.",
    degree: "Bachelor’s in CSIT (Computer Science and Information Technology)",
  },
  {
    id: 1,
    img: holylandLogo,
    school: "Holyland College, Nepalgunj",
    date: "Sept 2020 - Aug 2021",
    grade: "90%",
    desc: "I successfully completed my Higher Secondary Education (+2) with an excellent GPA, excelling in key subjects such as [mention relevant subjects, e.g., Physics, Chemistry, Mathematics, or Computer Science]. This achievement reflects my strong academic abilities, disciplined study habits, and dedication to learning complex concepts. Throughout this period, I developed critical thinking, analytical problem-solving, and effective time management skills, laying a solid foundation for higher education and future professional growth. Achieving a high GPA at the +2 level demonstrates my commitment to academic excellence and readiness to take on challenging opportunities in both academics and career.",
    degree: "+2 / Higher Secondary Education",
  },
  {
    id: 2,
    img: bardiyaLogo,
    school: "Shree Secondary School Godiyana , Bardiya",
    date: "Apr 2018 - March 2018",
    grade: "A grade",
    desc: "I successfully completed the  Secondary Education Examination (SEE) with an outstanding GPA . This accomplishment reflects not only my consistent dedication and disciplined study habits but also my ability to excel across a wide range of subjects, including [mention key subjects if you want, e.g., Mathematics, Science, English, and Social Studies]. Achieving a high GPA at this level demonstrates my commitment to academic excellence, strong time management, and ability to grasp complex concepts effectively. This solid foundation has equipped me with the critical thinking, problem-solving, and learning skills necessary to tackle higher education challenges and future professional endeavors.",
    degree: "SEE(10)",
  },

];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://amar4-ai.github.io/Personal-website/",
  },
  {
    id: 1,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: moviesLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Job Portal App",
    description:
      "Job Portal (Fullstack) – A responsive fullstack job portal built with React, Shadcn/UI, and a backend database. Users can register, search and apply for jobs, while recruiters can post and manage listings. Features include authentication, dynamic search, and application tracking.",
    image: jobPortalLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // }
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: '',
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: '',
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];  