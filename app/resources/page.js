"use client"; // Required for useState and event handlers

import React, { useState } from "react";
import Navbar from "../../components/navbar.js";
import styles from "../../styles/HallOfFame.module.css";
import { Github } from "lucide-react";
import { NoteIcon } from "@phosphor-icons/react";

// --- Mock Data ---
const lectureContentData = {
  "Blog Posts": [
    {
      id: 10,
      title:
        "🚀Getting Started with Go (Golang): A Beginner-Friendly Guide for CS Freshmen",
      members: ["Davis Zhang"],
      description:
        "This blog is a beginner-friendly guide to learning Go (Golang), a programming language known for its simplicity, speed, and support for concurrency. It explains why Go is great for CS freshmen, covering its clean syntax, strong typing, and built-in garbage collection. The article walks through setting up the environment, writing a basic “Hello, World!” program, and introduces core concepts like variables, functions, loops, slices, and maps. It also highlights Go’s powerful concurrency features using goroutines and channels, making it ideal for scalable systems like those taught in CS 425 (Distributed Systems).",
      githubUrl: "https://medium.com/@xdzhang2_11243/getting-started-with-go-golang-a-beginner-friendly-guide-for-cs-freshmen-3cdcc4d52f03",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 11,
      title: "Layers in Keras: An Introduction to Computer Vision",
      members: ["Prasheetha Bairwa"],
      description:
        "This blog introduces the basics of using Keras and Convolutional Neural Networks (CNNs) for computer vision tasks like image classification. It explains how layers such as convolutional, activation, pooling, and dense layers work together in the Sequential API to extract features and make predictions. The author walks through both binary and multi-class classification examples using Keras, highlighting key differences in output layers and loss functions. Overall, the guide is beginner-friendly and demonstrates how to build and customize models effectively for visual data.",
      githubUrl: "https://medium.com/@pbairwa2/bc82ae63e015",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 12,
      title:
        "From Idea to App: The Iterative Process of Coding with Language Models",
      members: ["Raaghav Pillai"],
      description:
        "This blog explains how to build software using large language models like GPT-4 through an iterative process called prompt engineering. Instead of expecting perfect code from a single prompt, the author highlights the importance of treating the AI as a collaborative coding partner, refining and improving the code step by step. A case study of a weather alert app shows how each prompt builds on the last to create a functional tool. The post also shares useful prompting techniques and best practices to help developers get clearer and more reliable code.",
      githubUrl: "https://medium.com/@ravegerplaz/from-idea-to-app-the-iterative-process-of-coding-with-language-models-43f8eea84d2d",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 13,
      title: "Vision Transformers: A Friendly Introduction",
      members: ["Yash Ejjagiri"],
      description:
        "This blog introduces Vision Transformers (ViTs), which apply transformer models from natural language processing to image classification tasks. Unlike CNNs that focus on local features, ViTs divide images into patches and use self-attention to capture global context. The article explains the ViT architecture step by step, compares it with CNNs, and covers popular variants like DeiT, Swin, and BEiT that improve data efficiency and scalability. It also includes PyTorch examples for fine-tuning and training ViTs, showing how they can be applied effectively in real-world computer vision projects.",
      githubUrl: "https://medium.com/@yse2/vision-transformers-a-friendly-introduction-74270159381a",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 14,
      title: "Web Scrapers",
      members: ["Roma Chandra", "Janice Mei"],
      description:
        "This blog introduces web scraping as a method to collect and organize data from websites using tools like Python and BeautifulSoup. It walks through the basic steps of sending requests, parsing HTML, extracting data, and storing it, with a simple example of scraping blog headlines. The post also highlights practical uses of web scraping such as market research, news tracking, and competitor analysis. Lastly, it covers important ethical and technical considerations like respecting site terms, avoiding server overload, and handling security measures like CAPTCHAs and honeypot traps.",
      githubUrl: "https://medium.com/@rchan31_18952/web-scrapers-13d4f5d958e0",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 16,
      title: "Building Your First Chatbot with OpenAI API, A Simple Guide For Beginners",
      members: ["Sriram Natarajan"],
      description:
        "This blog provides a step-by-step tutorial for building a simple, custom chatbot using OpenAI’s API in Python. It walks through generating an API key, setting up a virtual environment, and installing the necessary packages. The chatbot’s behavior is defined using a system message, and it runs in a loop that accepts user input, generates replies using the OpenAI API, and maintains message history for better context. Error handling is built in with try and except blocks, and the blog emphasizes writing clean, well-commented code while encouraging readers to tailor the bot’s tone and functionality to their needs.",
      githubUrl: "https://medium.com/@sriram6/building-your-first-chatbot-a-simple-guide-for-beginners-d02159b0c5f0",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 17,
      title: "Why Use Large Language Models in Robots?",
      members: ["Esha Mujumdar"],
      description:
        "This blog explains how large language models like ChatGPT have transformed robots from rigid, scripted responders into dynamic conversational partners. By using GPT-3.5 in a NAO robot, researchers at UChicago explored how language tone affected group dynamics in human-robot interaction. The system allowed for flexible, natural dialogue but faced challenges like latency and tone control. Looking ahead, robots will likely use multimodal AI, combining language with vision and movement to create even more human-like interactions.",
      githubUrl: "https://medium.com/@eshasm2/why-use-large-language-models-in-robots-35843794d34c",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 15,
      title: "Introduction to Web Scraping",
      members: ["Keshat Mehra"],
      description:
        "This blog introduces web scraping as an automated method to extract data from websites, aimed at CS 124 Honors students exploring data collection. It explains how scraping works using HTML structure and tools like BeautifulSoup, Scrapy, and Selenium, with code examples to illustrate the process. The post also covers practical applications such as market research and content aggregation, along with ethical and legal considerations like respecting robots.txt files. Lastly, it offers tips on handling challenges such as anti-scraping measures and layout changes, plus resources for further learning.",
      githubUrl: "https://medium.com/@keshat.mehra/introduction-to-web-scraping-6ae72b43f7d6",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
    {
      id: 9,
      title: "Building a Simple Rule-Based Chatbot for Beginners",
      members: ["Prachod Kakatur"],
      description:
        "The blog is a beginner’s guide to building a simple rule-based chatbot using Python. It explains the basics of chatbots, how they work, and walks through creating one using a dictionary of responses and a loop for user interaction. The post encourages experimenting with added features like jokes or showing the current time. It also links to resources for deeper learning.",
      githubUrl: "https://medium.com/@kakatur2/building-your-first-chatbot-a-simple-guide-for-beginners-353420e704f9",
      imageUrl: "https://placehold.co/600x400/cccccc/ffffff?text=Blog Post",
    },
  ],
};
// --- Components ---

/**
 * Renders a single project card
 */
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      {/* <img
        src={project.imageUrl}
        alt={`${project.title} Placeholder`}
        className={styles.cardImage}
        // Basic fallback using placeholder service URL structure
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x400/cccccc/ffffff?text=Image+Error`;
        }}
      /> */}
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
          <NoteIcon
            size={16}
            style={{ marginRight: "8px", transform: "scale(1)" }}
            className={styles.githubIcon}
          />
          {/* <MediumLogo
            size={16}
           
          /> */}
          View on Medium
        </a>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function HallOfFamePage() {
  // state to keep track of the selected sem
  // list of sems from the data keys
  const blogPosts = lectureContentData["Blog Posts"] || [];

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {/* Main content area */}
      <main className={styles.mainContent}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Blog Posts</h1>
          {/* <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        {/* Project Grid Section */}
        {blogPosts.length > 0 ? (
          <div className={styles.projectGrid}>
            {blogPosts.map((project) => (
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
