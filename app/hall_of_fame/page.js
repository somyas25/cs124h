"use client"; // Required for useState and event handlers

import React, { useState } from "react";
import Navbar from "../../components/navbar.js";
import styles from "../../styles/HallOfFame.module.css";
import { Github } from "lucide-react";

// --- Mock Data ---
const projectsData = {
  "Spring 2025": [
    {
      id: 9,
      title: "UIUC: The Chill Pack: Group 16",
      members: [
        "Luyao Wang",
        "Ruixi Zhang",
        "Yuxiang Li",
        "PMs: Keshat Mehra and Aasiya Menon",
      ],
      description:
        "Group 16 developed a pixel-style college life simulation game called 'UIUC: The Chill Pack' using the Godot engine. The game includes various mini-games, such as a platformer, a clicker game simulating assignment work, and a space shooter. The goal is to overcome obstacles and challenges presented by different parts of the school map in order to graduate.",
      githubUrl: "https://github.com/CS196Illinois/Group16-SP25",
      imageUrl: "/images/group_16.png",
    },
    {
      id: 10,
      title: "Grocery Store Shopper Analysis: Group 4",
      members: [
        "Nikitha S.",
        "Mihir V.",
        "PMs: Anujay Surana and Madhav Menon",
      ],
      description:
        "Group 4 developed a 'Grocery Store Shopper Analysis' project aimed at understanding customer demographics in a retail environment. Their work focused on using computer vision techniques to identify gender, age, and emotion from shopper images. They implemented their solution using deep learning models, specifically ResNet18, and utilized frameworks like PyTorch and OpenCV for tasks such as face detection and classification. This analysis could provide valuable insights for optimizing store layouts or marketing strategies.",
      githubUrl: "https://github.com/CS196Illinois/Group4-SP25",
      imageUrl: "/images/group_4.png",
    },
    {
      id: 11,
      title: "Trajecta: Group 14",
      members: ["Francisco Jimenez", "PM: Jack Wang"],
      description:
        "Group 14 developed 'Trajecta,' a project focused on modeling orbital simulations of satellites within the solar system. Their technical stack includes Python and JavaScript for the backend, handling the solar system model and physics, with accuracy ensured by sourcing software from the NASA JPL database. The frontend is built using React, CSS, and HTML to create a user-friendly interface for the simulation. Future goals involve integrating n-body physics for enhanced accuracy and allowing users to add custom satellites with specific parameters.",
      githubUrl: "https://github.com/CS196Illinois/Group14-SP25",
      imageUrl: "/images/group_14.png",
    },
    {
      id: 12,
      title: "Quad Quest: Group 2",
      members: [
        "Paul Lannuzel",
        "Eddie Ouyang",
        "Molly Chu",
        "PMs: Yaswant Ejjagiri, Esha Mujumdar",
      ],
      description:
        "Group 2 developed 'Quad Quest,' a two-part application designed to help UIUC students manage assignments and boost motivation. The first part functions as a centralized task tracker, gathering assignments from various platforms like Canvas, Gradescope, and PrairieLearn. The second part incorporates a game element, a 2D map of campus town where completing tasks earns in-game currency to upgrade buildings and unlock features. The technical stack includes React.js and Next.js for the frontend, Python for parsing functions, and Supabase for the backend, with React Leaflet used for the game's map.",
      githubUrl: "https://github.com/CS196Illinois/Group2-SP25",
      imageUrl: "/images/group_2.png",
    },
    {
      id: 13,
      title: "SPIRAL.AI: Group 5",
      members: [
        "Ahmad Dayeh",
        "Navika Tewari",
        "PMs: Ishaan Chamoli, Pras Bairwa",
      ],
      description:
        "Group 5 developed 'SPIRAL.AI,' a galaxy classifier designed to distinguish between spiral and non-spiral galaxies based on their morphological characteristics. They built and trained a Convolutional Neural Network (CNN) model using Python, Keras, and TensorFlow for image classification. The project also features an interactive web interface created with Streamlit, which allows for real-time image uploads and classification.",
      githubUrl: "https://github.com/CS196Illinois/Group5-SP25",
      imageUrl: "/images/group_5.png",
    },
    {
      id: 14,
      title: "SiteCraft.AI: Group 1",
      members: [
        "Madison Lee",
        "Chetan Tripaathi",
        "Hannah Ip",
        "PMs: Anshi Mathur, Divvyam Arora",
      ],
      description:
        "Group 1 developed 'SiteCraft.AI', a personal website generator that automates the creation of professional websites from PDF resumes. This platform streamlines personal branding for job seekers by extracting text from uploaded resumes and generating a basic HTML website. Their technical implementation leverages Node.js for the backend, utilizing Express.js for routing, Multer for file uploads, and pdfreader to extract text from PDFs. The system also integrates the OpenAI SDK to parse and structure resume data into JSON format, which then programmatically generates the responsive personal websites.",
      githubUrl: "https://github.com/CS196Illinois/Group1-SP25",
      imageUrl: "/images/group_1.png",
    },
  ],
  "Fall 2021": [
    {
      id: 1,
      title: "Group 2",
      members: [
        "Aadarsh Hegde",
        "Danny Bezugliy",
        "Eric Solheim",
        "Nicole Zheng",
        "Tongrui Yu",
      ],
      description:
        "Group 2 created a beautiful platformer with a twist: you can change the axis that the 2d plane is on in a 3d space. This project was made using Unity for the game logic and Blender for the assets. Definitely check this one out if you love games and puzzles. Group 2 did a fantastic job re-imagining an existing concept and providing a new twist.",
      githubUrl: "https://github.com/CS196Illinois/Group2-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 2",
    },
    {
      id: 2,
      title: "Group 10",
      members: ["Yangze Liu", "David Hu", "Daniel Ding", "Charlie Liu"],
      description:
        "Group 10 made a multiplayer game where you have to compete to collect the most coins and powerups. Using pygame, this group made a fast-paced competitive game that's fun to play. Group 10 stands out in their ability to keep a such a large project organized despite needing to be kept in one file.",
      githubUrl: "https://github.com/CS196Illinois/Group10-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 10",
    },
    {
      id: 3,
      title: "Group 13",
      members: [
        "Dylan Dunham",
        "Lei Lin",
        "Chris Deng",
        "Aakash Kumar",
        "Xin Xie",
      ],
      description:
        "Group 13 built a turn-based simulation for modeling predator/prey behavior. This group utilized React for the frontend and Flask for the backend, and in doing so was able to create a randomized set of coordinates for each simulation to start the animals off at, and passed this to the frontend using JSON. This project shows how even with a split between frontend and backend, a powerful project can be developed. Group 13's ability to effectively communicate and standardize the data being passed through the API is extremely admirable.",
      githubUrl: "https://github.com/CS196Illinois/Group13-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 13",
    },
    {
      id: 4,
      title: "Group 26",
      members: ["Aditya Asthana", "Prem Dhoot"],
      description:
        "Group 26 created a movie-lover's dream: a recommendation engine that uses machine learning to pick the best movie based on the emotions displayed in a short recording of your voice. Both the classifier and the recommendation engine are feats on their own, and put together they're spectacular. While I may not be an ML guru, Eustis is and he says the model they developed is genuinely impressive.",
      githubUrl: "https://github.com/CS196Illinois/Group26-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 26",
    },
    {
      id: 5,
      title: "Group 32",
      members: [
        "Rohan Gudipaty",
        "Yunsu Han",
        "Taha Hashmi",
        "Khalid Alotaibi",
      ],
      description:
        "Group 32 created a level-based 2d game in Java. Dubbed Journey to Midcard, what really sets this game apart was how modularized it was, making it incredibly easy to make new levels, characters, and powers. The card-based mechanics of this game made it essentially a requirement it was developed this way, but it's impressive nonetheless. This team showed how even with technical hurdles, a group can overcome problems to create a feature.",
      githubUrl: "https://github.com/CS196Illinois/Group32-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 32",
    },
    {
      id: 6,
      title: "Group 33",
      members: [
        "Jamie Rollison",
        "Krushank Bayyapu",
        "Shaarav Rotiwar",
        "Maanav Agrawal",
        "Owen Cushing",
        "Cole Zimmerman",
      ],
      description:
        "Group 33 worked on a project for audio classification/sharing. Their project includes a frontend website with a map of different audio files uploaded, including where they were recorded, as well as tags describing what they are. They also developed a classifier using pytorch to automatically apply these tags in the future. When this group presented at the project fair, the only word that came to mind was magnificent.",
      githubUrl: "https://github.com/CS196Illinois/Group33-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 33",
    },
    {
      id: 7,
      title: "Group 46",
      members: ["Rachel Shum", "Minh Duong", "Marcel Hoang", "Qingping Ye"],
      description:
        "Group 46 were in a group that really did do CS for Good. They created a python program that helps people learn and translate American Sign Language (ASL). Not only did they complete their initial MVP, but they also expanded it to interface with a dance dance revolution game so one could learn ASL while listening to music. This project was creative, intuitive to use, and deeply impressive.",
      githubUrl: "https://github.com/CS196Illinois/Group46-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 46",
    },
    {
      id: 8,
      title: "Group 60",
      members: [
        "Andrew Yang",
        "Cloud",
        "Joseph Chan",
        "Nitya Sunkad",
        "Timor Averbuch",
      ],
      description:
        "Group 60 took privacy very seriously with their application. Group 60 worked on a remote desktop connection that's end-to-end encrypted with HIPAA-compliant security mechanisms as well as a clean user interface. Encryption and networking are both extremely difficult measures to get right individually, but combining them increases the difficulty even more. Despite this, Group 60 was able to get their project fully-functional and even had time to add helpful comments and documentation in their codebase. Group 60's work was nothing but professional in every aspect from the codebase, to the product design, to the presentation.",
      githubUrl: "https://github.com/CS196Illinois/Group60-FA21",
      imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Group 60",
    },
  ],
};
// --- Components ---

/**
 * Renders the semester selection tabs
 */
const SemesterTabs = ({ semesters, selectedSemester, onSelectSemester }) => {
  return (
    <div className={styles.tabsContainer}>
      {semesters.map((semester) => (
        <button
          key={semester}
          onClick={() => onSelectSemester(semester)}
          className={`${styles.tabButton} ${
            selectedSemester === semester ? styles.activeTab : ""
          }`}
        >
          {semester}
        </button>
      ))}
    </div>
  );
};

/**
 * Renders a single project card
 */
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img
        src={project.imageUrl}
        alt={`${project.title} Placeholder`}
        className={styles.cardImage}
        // Basic fallback using placeholder service URL structure
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x400/cccccc/ffffff?text=Image+Error`;
        }}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardMembers}>By: {project.members.join(", ")}</p>
        <p className={styles.cardDescription}>{project.description}</p>
        <a
          href={project.githubUrl}
          target="_blank" // just opens the link in a new tab
          rel="noopener noreferrer"
          className={styles.githubButton}
        >
          {/* Use inline style for icon size/margin or wrap in a styled span if needed */}
          <Github
            size={16}
            style={{ marginRight: "8px", transform: "scale(1)" }}
            className={styles.githubIcon}
          />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function HallOfFamePage() {
  // state to keep track of the selected sem
  const [selectedSemester, setSelectedSemester] = useState("Spring 2025");
  // list of sems from the data keys
  const semesters = Object.keys(projectsData);
  const filteredProjects = projectsData[selectedSemester] || [];

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {/* Main content area */}
      <main className={styles.mainContent}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to the Hall of Fame!</h1>
          {/* <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        {/* Semester Selection Tabs */}
        <SemesterTabs
          semesters={semesters}
          selectedSemester={selectedSemester}
          onSelectSemester={setSelectedSemester}
        />

        {/* Project Grid Section */}
        {filteredProjects.length > 0 ? (
          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className={styles.noProjects}>
            No projects found for this semester.
          </p>
        )}
      </main>
    </div>
  );
}
