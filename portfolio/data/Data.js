import { 
    faHouse, 
    faUser, 
    faCode, 
    faBriefcase, 
    faGraduationCap, 
    faSchool,
    faBook
} from '@fortawesome/free-solid-svg-icons';

export const NAV = [
    {
        color: "blue",
        name: "Home",
        icon: faHouse
    },
    {
        color: "green",
        name: "About",
        icon: faUser,
    },
    {
        color: "yellow",
        name: "Experience",
        icon: faBriefcase
    },
    {
        color: "red",
        name: "Projects",
        icon: faCode
    },

]

export const ABOUT = [
    {
        color: "yellow", 
        key: "School", 
        answer: "University of Central Florida", 
        icon: faSchool
    },
    {   
        color: "blue", 
        key: "Graduation", 
        answer: "May 2025", 
        icon: faGraduationCap
    },
    {
        color: "green",
        key: "Majors",
        answer: "Computer Science and Statistics",
        icon: faBook
    }

]