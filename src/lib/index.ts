import { writable } from "svelte/store"
import type { CreatedProjects } from "./types";

export const projects = writable<CreatedProjects[]>([
    {
        id: 0,
        name: 'Enrollment System',
        icon: 'icons/svelteIcon.svg',
        description:
            'My Capstone Project was developed independently during my college years because my groupmates were unable to learn programming at that time. It allows students to enroll in their courses online.',
        youtubelink: "https://www.youtube.com/embed/AGf2w8eiD8g?si=a_iVCLbi3BKD3zj0",
        githublink: "https://github.com/itsmikesharescode/enrollment-system-caps"
    },
    {
        id: 1,
        name: 'Debt Management System',
        icon: 'icons/svelteIcon.svg',
        description:
            'A side project to provide solutions for small businesses that engage in daily, weekly, or yearly debt management. This project allows administrators to track and manage customer purchases, payments, and balances.',
        youtubelink: "https://www.youtube.com/embed/hkTmOWwyQjE?si=ZaFkss0QejVXCtV5",
        githublink: "https://github.com/itsmikesharescode/food-ordering-system"
    },
    {
        id: 2,
        name: 'Dynamic Voting System',
        icon: 'icons/svelteIcon.svg',
        description: 'A capstone project for my friend that allows administrators to CRUD and voters to interact dynamically within a voting system.',
        youtubelink: "https://www.youtube.com/embed/fR-ZOSUgZMw?si=I4nGM8_Vf4oJG3pj",
        githublink: "https://github.com/itsmikesharescode/shad-cn-voting-system-port"
    },

    {
        id: 3,
        name: 'Food Ordering System',
        icon: 'icons/svelteIcon.svg',
        description:
            'A capstone project for my friend, integrated with Xendit Payment Gateway',
        youtubelink: "https://www.youtube.com/embed/AGf2w8eiD8g?si=a_iVCLbi3BKD3zj0",
        githublink: "https://github.com/itsmikesharescode/food-ordering-system"
    },

    {
        id: 4,
        name: 'Collab Learn System',
        icon: 'icons/svelteIcon.svg',
        description: 'A capstone project for my friend that allows users to upload, delete ...CRUD and interact to each other',
        youtubelink: undefined,
        githublink: 'https://github.com/collablearn/collab-learn-final',

    },

    {
        id: 5,
        name: "Fullstack Chat App",
        icon: "icons/svelteIcon.svg",
        description: "A side project that enables all users to chat with each other in real-time using websockets of Supabase or Firestore.",
        youtubelink: undefined,
        githublink: "https://github.com/itsmikesharescode/fullstack-chat-app"
    },

    {
        id: 6,
        name: "Annapolis Finance Inc.",
        icon: "icons/svelteIcon.svg",
        description: "My internship project enables users to explore information about Annapolis Finance, its products, loans, and purchase second-hand motorcycles.",
        youtubelink: "https://www.youtube.com/embed/sH_lUKkOJn0?si=p2G8Im7OiYrqjO1k",
        githublink: "https://github.com/itsmikesharescode/my-internship-project"
    },

    {
        id: 7,
        name: "Web-Based Voting System for Lazaro Francisco Integrated School (SSG)",
        icon: "icons/svelteIcon.svg",
        description: "A capstone project i made for my friend.",
        youtubelink: undefined,
        githublink: "https://github.com/itsmikesharescode/Voting-System-SSG"
    },

    {
        id: 8,
        name: "HIV Awareness Database Management System",
        icon: "icons/svelteIcon.svg",
        description: "A capstone project i made for my friend.",
        youtubelink: 'https://www.youtube.com/embed/4sMjJWl1jx8?si=wutMaZ7LQH-c4KAp',
        githublink: "https://github.com/itsmikesharescode/hiv-management"
    }


]);

export const character = [
    "Learner", "Generalist", "Listener",
    "Explorer", "Innovator", "Collaborator",
    "Problem-solver", "Visionary", "Strategist",
    "Communicator", "Trailblazer",
    "Analyst", "Executor",
    "Specialist", "Creator", "Pioneer",
    "Facilitator", "Synthesizer",
]

export const aboutMe = [
    {
        name: 'a self taught developer',
        description:
            'I taught myself to code using free online resources and quickly fell in love with the creativity and problem-solving involved in developing innovative online experiences. I started with JavaScript, HTML, and CSS, and then expanded my knowledge to include JavaScript frameworks, backend programming, design, cloud services, and much more.'
    },
    {
        name: 'a product design and UX enthusiast.',
        description:
            'Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.'
    },
    {
        name: 'an excellent communicator',
        description:
            "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    }
];

export const experiences = [
    {
        title: "Full Time Freelancing",
        date: "April 20 2022 - 2024 Active",
        content: "In 2022, I developed capstone projects and programming activities for my friends, earning a decent income to sustain my college tuition fees.",
    },

    {
        title: "Intern Jr Programmer / Tech Support",
        date: "Aug 11, 2023 - Nov 13 2023",
        content: "I was an intern in Annapolis Credit Management Services, INC. I used to do basic troubleshooting of servers, routers, printers, and some networking stuff. I am also the one who tried build their main website for company wing name Annapolis Finance Inc. Unfortunately, due to time constraints and numerous revisions, the project's requirements grew beyond the scope of my internship timeframe. As a result, I was unable to complete it before my internship concluded. ",
    },

];

