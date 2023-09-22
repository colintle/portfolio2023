export const PROJECTS = [{
    name: "J.P. Morgan Code for Good 2022",
    description:
      "In 24 hours, we developed a web app for Tarrant To & Through Partnership (T3) to provide the ultimate experience for the student and family to be more educated about the possibility of pursuing higher-level education. The technologies used in this project were MongoDB, ReactJS, ExpressJS, NodeJS, and OpenAI",
    image: "/images/codeforgood.gif",
    note: "The GitHub repo is private, so please contact me for more information about this project!",
  },
  {
    name: "SwampHacks 2023",
    description:
      "Let Adventure Roulette be your guide to the unknown! Explore new locations near you and visit them if it piques your interest! The technologies used in this project were OpenAI, ReactJS, ExpressJS, NodeJS, and Google Maps API",
    image: "/images/swamphack.gif",
    github: "https://github.com/colintle/swamphack-2023",
  },
  {
    name: "Spotify Playlist Generator",
    description:
      "Inspired by Codecademy, this app allows the user to generate playlists with a click of a button. The techologies used in this project were ReactJS and Spotify API. Check it out!",
    image: "/images/spotify.gif",
    github: "https://github.com/colintle/Spotify-Playlist-Generator",
  },
  {
    name: "College Event Website",
    description:
      "This full-stack project was done in COP 4710 to replicate the functionality of the University of Central Florida's Event Website. The technologies involved with this project were MySQL, ReactJS, ExpressJS, and NodeJS",
    image: "/images/collegeevent.gif",
    github: "https://github.com/colintle/CollegeEventWebsite",
  },
  {
    name: "Memories Social Media",
    description:
      "Inspired by the YouTube channel JavaScript Mastery, this full-stack project allows for users to share their memories and interact with memories from others! The technologies involved with this project were MongoDB, ReactJS, ExpressJS, and NodeJS",
    image: "/images/memories.gif",
    github: "https://github.com/colintle/memories",
  },
]

export const EXPERIENCE = {
  "J.P. Morgan Chase & Co.": {
    name: 
    <h3>Software Engineering Intern
      <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600  via-sky-200 to-purple-700'> @ J.P. Morgan Chase & Co.</strong>
    </h3>,
    duration: "June 2023 - August 2023",
    description: ["Designed and developed a user-friendly web application for merchant services, streamlining payment processing and enhancing the user experience for commercial clients, utilizing J.P. Morgan Chase & Co. UI Toolkit and React.js",
    "Deployed services on public and private cloud infrastructure, leveraging AWS, and implementing standard CI/CD pipelines for efficient software delivery","Incorporated modern APIs and cloud-native environments into our application to seamlessly integrate and provide support for over 28 million merchants worldwide"
    ]
  }, 
  "University of Central Florida": {
    name: 
    <h3>Software Engineering Intern 
      <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600  via-sky-200 to-purple-700'> @ University of Central Florida</strong>
    </h3>,
    duration: "February 2023 - Present",
    description: ["Part of the Techrangers Team at the Center for Distributed Learning Center in UCF", "Provide course development and web/application development for over 60,000 students and faculty members", "Work alongside Software Engineers to build internal and external tools such as", ["Code Syntax Highlighter - Flask/Python app to add syntax highlighting to the Canvas rich text editor", "Action Icons - Flask/Python app to embed customizable simple icons from images to the Canvas rich text editor", "Zapt - Flask/Python app that allows users to import .pptx, .docx, and .html files into the Canvas rich text editor"]]
  },
  "Lockheed Martin": {
    name: 
    <h3>System Engineering Intern 
      <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600  via-sky-200 to-purple-700'> @ Lockheed Martin</strong>
    </h3>,
    duration: "August 2022 - January 2023",
    description: ["Part of IRST (Infrared Search and Track) Algorithm Team at Lockheed Martin MFC (Missiles and Fire Control) in Orlando, Florida", "Architected and developed a MATLAB GUI for data management within the Algo Team to utilize storage efficiently", "Collaborated with other System Engineers on a MATLAB GUI to effectively generate flight replays based on the variations of IRST", "Practiced Agile Software Development to deliver top-of-the-line technologies"]
  },
  "Robins Air Force Base":   {
    name: 
    <h3>Computer Scientist Intern 
      <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600  via-sky-200 to-purple-700'> @ Robins Air Force Base</strong>
    </h3>,
    duration: "June 2022 - August 2022",
    description: ["Part of Preminer College Intern Program (PCIP) for the Air Force Civilian Service (AFCS) in Warner Robins, Georgia", "Worked with recruiters on designing promotional material and AFCS's website for students in Fall 2022", "Developed technical skills such as Visual Basic Analysis (VBA) for Excel, JavaScript, ReactJS, NodeJS, and ExpressJS"]
  },
  "Mirizan":   {
    name: 
    <h3>Software Engineering Intern 
      <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600  via-sky-200 to-purple-700'> @ Mirizan LLC</strong>
    </h3>,
    duration: "January 2022 - May 2022",
    description: ["Worked with the owner of Mirizan to build a promotional mobile app for its products in React Native and MySQL", "Implemented an internal tool to automate emails being sent to suppliers of Mirizan using NodeJS and ExpressJS", "Developed technical skills such as React Native, Expo Go, AWS, and MySQL"]
  },
  "WEAR Lab":   {
    name: 
    <h3>Undergraduate Lab Researcher
      <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600  via-sky-200 to-purple-700'> @ Wearable Engineering and Assitive Robotics (WEAR) Lab</strong>
    </h3>,
    duration: "September 2021 - Present",
    description: ["Collaborating with undergraduate and graduate students to research wearable technologies for real world applications", "Worked on various projects including", ["Functional Electrical Stimulation (FES) for Pre-Impact Fall Detection and Intelligent", ["Developing a Python threshold/machine learning-based pre-impact fall detection algorithm to detect a fall at its descending phase", "Developing a closed-loop FES control algorithm using Pandas and Numpy for arresting a fall in real-time after pre-impact fall detection"], "Interactive and Intuitive Autonomous Robotic Cart (I^3ARC)", ["Developing an autonomous cart using a Robot Operating System (ROS) platform for navigation, collision avoidance and person following features", "Developing a mobile app to help customers interact with the autonomous cart using React Native"]]]
  },
}
