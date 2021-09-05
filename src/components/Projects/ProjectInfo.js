import { v4 as uuidv4 } from 'uuid';
import Rudra from "../../assets/images/project-page/Rudra.png"
import EduAR from "../../assets/images/project-page/EduAR.jpg"
import Signal from "../../assets/images/project-page/Signal.png"
import WomenEss from "../../assets/images/project-page/WomenEssentials.png"
import COVID from "../../assets/images/project-page/COVID19.png"
import Minecrft from "../../assets/images/project-page/minecraft.jpeg"
import ObjDetection from "../../assets/images/project-page/ObjectDetection.jpg"

const projects = [
  {
    id: uuidv4(),
    textColor: "black",
    name: 'EduAR',
    stacks: '(React Js, echoAR, Firebase)',
    desc:
      'AR-based website where students can learn with the help of 3D Models.',
    img: EduAR,
    github: 'https://github.com/Harshal0902/EduAR',
    web: 'https://eduar.vercel.app',
  },
  {
    id: uuidv4(),
    textColor: "black",
    name: 'Women Essentials',
    stacks: '(React Js, Flask, Firebase)',
    desc: 'Women Essential is an all-in-one womens health platform.',
    img: WomenEss,
    github: 'https://github.com/Harshal0902/Women-Essential',
    web: 'https://womenessentials.vercel.app',
  },
  {
    id: uuidv4(),
    textColor: "black",
    name: 'Rudra',
    stacks: '(HTML, CSS, Js, React Js)',
    desc:
      'A responsive Web Application for Police and Public Assistance.',
    img: Rudra,
    github: 'https://github.com/Harshal0902/Rudra',
    web: 'https://rudraweb.netlify.app',
  },
  {
    id: uuidv4(),
    textColor: "white",
    name: 'Signal Clone',
    stacks: '(React Native, Expo, Firebase)',
    desc:
      'A clone of a famous social media platform Signal.',
    img: Signal,
    github: 'https://github.com/Harshal0902/Signal-Clone',
    web: ' ',
  },
  {
    id: uuidv4(),
    textColor: "white",
    name: 'Minecraft Game',
    stacks: '(React Js, Three.js)',
    desc: 'A simple Minecraft Game using React Js and Three.js',
    img: Minecrft,
    github: 'https://github.com/Harshal0902/Minecraft',
    web: 'https://minecraft-game-368ef.web.app',
  },
  {
    id: uuidv4(),
    textColor: "black",
    name: "COVID19 Tracker",
    stacks: '(React Js)',
    desc: 'A COVID19 Tracker for tracking live cases for all courtiers.',
    img: COVID,
    github: 'https://github.com/Harshal0902/COVID-19-Tracker',
    web: 'https://covid19-tracker-20331.web.app',
  },
  {
    id: uuidv4(),
    textColor: "black",
    name: 'Object Detection',
    stacks: '(Tensorflow, React Js)',
    desc: 'Real-time object detection in React Js using Tensorflow',
    img: ObjDetection,
    github: 'https://github.com/Harshal0902/React-Object-Detection',
    web: 'https://react-object-detection.web.app',
  },
];

export default projects;
