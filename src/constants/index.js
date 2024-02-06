import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Experience building scalable, performant web applications using React.js",
      "Proficiency in using Redux or other state management libraries with React.js Expertise in implementing responsive UI/UX designs with React.js",
      "Ability to integrate React.js with server-side technologies like Node.js or GraphQL for full-stack development",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Expertise in creating native mobile apps for iOS and Android using React Native framework.",
      "Proficient in developing highly performant and responsive user interfaces using React Native components.",
      "Strong understanding of the mobile app development process, including debugging, testing, and deployment",
      "Ability to work collaboratively with designers and backend developers to deliver seamless mobile app experiences.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Expertise in modern web technologies such as HTML5, CSS3, and JavaScript",
      "Experience in popular front-end frameworks like React and  Angular",
      "Strong proficiency in server-side languages such as Node.js, Python, or PHP",
      "Ability to design and develop responsive and user-friendly websites that meet business needs.",
      "A track record of delivering projects on time and within budget while maintaining high code quality and adhering to best practices."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "End-to-end development: I offer end-to-end web development services that span from the front-end to the back-end, allowing me to build fully-functional and scalable web applications.",
      "Versatility: As a full stack developer, I have experience working with multiple programming languages, frameworks, and databases. I am comfortable working with both the client-side and server-side of web applications.",
      "Agile methodology: I follow an agile development approach, which means that I work in sprints and continuously deliver working software. This allows for faster feedback and ensures that the end product meets the client's requirements.",
      "Strong problem-solving skills: As a full stack developer, I have a strong ability to troubleshoot and debug web applications. I am able to quickly identify issues and implement effective solutions.",
      "Client collaboration: I understand the importance of collaboration with clients. I work closely with them to understand their vision and requirements, and I provide regular updates throughout the development process to ensure that we stay aligned."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ankit proved me wrong.",
    name: "Aarav goel",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ankit does.",
    name: "Chrales smith",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "After Ankit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
