import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {FaHtml5,FaCss3Alt,FaBootstrap,FaPython, FaAws} from 'react-icons/fa'
import { SiCodechef } from "react-icons/si";
import { RiJavascriptFill ,RiTailwindCssFill} from "react-icons/ri";
import { TbBrandReact,TbBrandMysql } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline,IoLocationOutline } from 'react-icons/io5';
import { FaInstagram } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { VscSymbolNumeric } from "react-icons/vsc";
import { DiFirebase } from "react-icons/di";



export const menus = [
    {name:"Home"},
    {name:"About"},
    {name:"Education"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"}
];

export const education = [
  {
    schoolName:"Kongu Engineering College, Erode.",
    dateRange:"2022 - 2024",
    certification:"Master of Computer Applications"
    
  },
  {
    schoolName:"Dr. SNS Rajalakshmi College of Arts and Science, Coimbatore.",
    dateRange:"2018 - 2021",
    certification:"B.Sc-Computer Technology"
  },
  {
    schoolName:"Little Flower Matriculation Higher Secondary School",
    dateRange:"2017 - 2018",
    certification:"HSC"
  },
  {
    schoolName:"Amma Matriculation School",
    dateRange:"2015 - 2016",
    certification:"SSLC",
  },
]

export const skills = [


  {
    category:"Frontend Development",
    data:[
      {skill:"HTML",progress:95,icon:<FaHtml5/>},
      {skill:"CSS",progress:85,icon:<FaCss3Alt/>},
      {skill:"JavaScript",progress:80,icon:<RiJavascriptFill/>},
      {skill:"React",progress:65,icon:<TbBrandReact/>},
      {skill:"Bootstrap",progress:85,icon:<FaBootstrap/>},
      {skill:"Tailwind",progress:80,icon:<RiTailwindCssFill/>}         
    ]
  },
  {
    category:"Other Programming Languages",
    data:[
      {skill:"Java",progress:85,icon:<FaJava/>},
      {skill:"Python",progress:75,icon:<FaPython/>},
      {skill:"C",progress:80,icon:<VscSymbolNumeric />},
    ]
  },

  {
    category:"Other Techchnologies",
    data:[
      {skill:"AWS S3 Bucket",progress:85,icon:<FaAws />},
      {skill:"AWS Amplify",progress:85,icon:<FaAws />},
      {skill:"AWS EC2",progress:85,icon:<FaAws />},
      {skill:"Firebase",progress:75,icon:<DiFirebase />},
      {skill:"MySQL",progress:75,icon:<TbBrandMysql/>},
      {skill:"Git",progress:80,icon:<AiFillGithub/>},
    ]
  },
]


export const projects = [
  {
    name:'Centralogic ChatBot',
    description:`A chatbot website is an online platform that utilizes automated conversational... `,
    image:"https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://react-chatbot-pink.vercel.app/',
  },
 
  {
    name:'Todo List Application',
    description:`A to-do list is a practical tool for organizing tasks and managing time effectively.`,
    image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://to-do-list-eight-ecru.vercel.app/',
  },
  {
    name:'Expense-Tracker App',
    description:`An expense tracker application helps users monitor and manage their finances by....`,
    image:"https://plus.unsplash.com/premium_photo-1681760172611-c27f502d4084?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://react-expense-tracker-delta-seven.vercel.app/',
  },
  {
    name:'BMI Calculator',
    description:`Calculate your Body Mass Index (BMI) easily. Enter your height and weight...`,
    image:"https://plus.unsplash.com/premium_photo-1681400641919-d5d03f6c0720?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://bmi-calculator-delta-flame.vercel.app/',
  },
  {
    name:'Strong Password Generator',
    description:`An easy-to-use app that creates complex passwords instantly for enhanced online security.`,
    image:"https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://password-generator-jet-six-10.vercel.app/',
  },
  
 
  {
    name:'Weather Application',
    description:`Utilizes OpenWeather API for data. Provides detailed information including temperature, humidity, wind speed`,
    image:"https://images.unsplash.com/photo-1581057400571-61a9d92d091c?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://react-weather-application-topaz.vercel.app/',
  },
];


export const socialHandles = [
 
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/balachandart",
  },
  {
    name:"LinkedIn",
    icon:<CiLinkedin/>,
    link:"https://www.linkedin.com/in/balachandar-t-42b068255/",
  },
  {
    name:"Code Chef",
    icon:<SiCodechef />,
    link:"https://www.codechef.com/users/balachandart17",
  },
  {
    name:"Instagram",
    icon:<FaInstagram />,
    link:"https://www.instagram.com/chandruut.17/?utm_source=qr",
  }
];
  

export const contactInfo = [
  {
    name:"Email",
    icon:<MdOutlineAlternateEmail />,
    value:"balachandru1728@gmail.com",
  },
  {
    name:"Phone",
    icon:<IoCallOutline/>,
    value:"+91-6382632976",
  },
  {
    name:"Address",
    icon:<IoLocationOutline/>,
    value:"Coimbatore, Tamilnadu, India-638459",
  },
]

export const footer = [
  {
    group:"Hot Links",
    routes:[
      {name:"Home"},
      {name:"About"},
      {name:"Education"},
      {name:"Skills"},
      {name:"Projects"},
      {name:"Contact"}
    ]
  },
  {
    group:"Others",
    routes:[
      {name:"Privacy Policy"},
      {name:"Terms and Conditions"},
      {name:"Cookie Policy"},
    ]
  },
  {
    group:"Contacts",
    routes:[
      {
        name:"balachandru1728@gmail.com",
        icon:<MdOutlineAlternateEmail />,
      },
      {
        name:"+91-6382632976",
        icon:<IoCallOutline/>,
      },
      {
        name:"Coimbatore, Tamilnadu, India-638459",
        icon:<IoLocationOutline/>,
      },
    ]
  },
]