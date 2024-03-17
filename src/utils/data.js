import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 3,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "App Designs",
    projects: 2,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Marketing Projects",
    projects: 3,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "A first-generation fourth-year student pursuing a degree in Computer Science and minoring in Business at the University of Washington Seattle. A collaborative and a detail-oriented individual, who is searching for internships and research labs related to these skills.",
  " Always optimistic and enthusiastic about opportunities, ready to take on any challenges and learn from them. Communicative while collaborating with peers and mentors alike to tackle class projects as a team."
];

export const workExp = [
  {
    place: "Springer Capital, Chicago, Illinois",
    tenure: "Dec 2023 - Apr 2024",
    role: "Software Engineering Intern",
    detail: "Implemented Python and SQL to update company software, such as SuiteCRM, and Microsoft Suites (SharePoint, Teams, 365). Written basic scripts to update and maintain the company server and website. Implemented back-end functionality and dded features to track the statuses of hundreds of models through the company's building process, which is used to train machine learning algorithms.",
  },
  {
    place: "Husky Coding Project, Seattle, Washington",
    tenure: "Jan 2023 - Present",
    role: "Full-stack Developer",
    detail: "Developing a project called 'Snoozer', supporting high school and college students with different ways to wake up with motivation. Implementing additional features to reduce bugs within the full-stack development using Agile methodologies. Collaborating with a group of 5 to prototype a backend system to enhance human-computer interaction. Leveraging efficiency of the code by adding features using the Flask framework.",

  },
  {
    place: "Geeking Out Kids of Color, Seattle, Washington",
    tenure: "Mar 2022 - Sep 2022",
    role: "Web Development Intern",
    detail: "Developed a sound understanding of relevant technologies to help create software applications, ultimately to serve underrepresented communities. Cooperated with other developers to ensure the effective implementation of the technical designs into the resulting software produced. Performed entry-level analysis, problem-solving, implementation, and documentation. Provided technical support to users.",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};