import { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import project cover images
import TravelShowcaseImage from "../assets/Project_cover/travel_showcase.png";

import PBX94MediaImage from "../assets/Project_cover/pbx94_media.png";

import ModernSwipeCardsImage from "../assets/Project_cover/Modernswipe_card.png";

import ExpensetrackerImage from "../assets/Project_cover/Expense_tracker.png";

import AddFriendFeatureWithSameButtonImage from "../assets/Project_cover/addfriendfeaturewith_samebutton.png";

import WeatherAppImage from "../assets/Project_cover/Weather_app.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Travel-Showcase",
      category: "Personal",
      description:
        "A frontend project for showcasing travel destinations with user-friendly UI and interactive elements.",
      image: TravelShowcaseImage,
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/siddharthsharma983/travel-showcase",
      liveUrl: "https://travel-showcase.vercel.app",
      featured: true,
      date: "2025",
      highlights: [
        "Responsive and interactive UI with React.js and Tailwind CSS",
        "Showcases multiple travel destinations with images and info",
        "Smooth animations and transitions for better UX",
        "Fully mobile responsive design",
      ],
    },

    {
      id: 2,
      title: "PBX94 Media",
      category: "Personal",
      description:
        "PBX94 Media — Where Creativity Meets Innovation 🎙️ A modern media studio for podcast production, content creation & brand storytelling. Offering end-to-end services: scripting, recording, editing, publishing & strategy — powered by creative excellence, not just tools.",
      image: PBX94MediaImage,
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/siddharthsharma983/pbx94-media-studio",
      liveUrl: "https://pbx94-media-studio.vercel.app",
      featured: true,
      date: "2025",
      highlights: [
        "Modern media studio interface for podcast production and content creation",
        "Interactive UI with React.js and Tailwind CSS",
        "End-to-end workflow: scripting, recording, editing, publishing",
        "Creative and brand storytelling focus",
        "Fully responsive and visually appealing design",
      ],
    },

    {
      id: 3,
      title: "Modern Swipe Cards",
      category: "Personal",
      description:
        "Modern swipe cards with smooth drag interactions and glassmorphism UI. A frontend-focused project showcasing clean design, animations, and intuitive swipe-based UX.",
      image: ModernSwipeCardsImage,

      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/siddharthsharma983/Modern-Swipe-Cards",
      liveUrl: "https://modern-swipe-cards.vercel.app",
      featured: true,
      date: "2025",
      highlights: [
        "Smooth swipe and drag interactions",
        "Modern glassmorphism UI design",
        "Clean and minimal frontend-focused layout",
        "Responsive across all devices",
        "Optimized animations for better UX",
      ],
    },

    {
      id: 4,
      title: "Expense Tracker",
      category: "Personal",
      description:
        "Track your expenses easily with a dark-themed web app. Add, delete, and view your total expenses instantly. Built using core frontend technologies with a clean and user-friendly interface.",
      image: ExpensetrackerImage,
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/siddharthsharma983/Expense-Tracker",
      liveUrl: "https://expense-tracker-rust-chi.vercel.app",
      featured: false,
      date: "2025",
      highlights: [
        "Dark-themed, clean and minimal UI",
        "Add and delete expenses dynamically",
        "Instant total expense calculation",
        "Built using pure HTML, CSS, and JavaScript",
        "Lightweight and fully responsive frontend project",
      ],
    },

    {
      id: 5,
      title: "Add Friend Feature (Single Button)",
      category: "Personal",
      description:
        "💫 A simple HTML, CSS & JavaScript project demonstrating an Add/Remove Friend toggle using a single dynamic button with real-time UI updates.",
      image: AddFriendFeatureWithSameButtonImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl:
        "https://github.com/siddharthsharma983/Add-Friend-Feature-with-same-button",
      liveUrl: "https://add-friend-feature-with-same-button-omega.vercel.app",
      featured: false,
      date: "2025",
      highlights: [
        "Single-button Add / Remove Friend toggle feature",
        "Dynamic UI update using JavaScript",
        "Clean and minimal frontend logic",
        "Built with pure HTML, CSS & JavaScript",
        "Beginner-friendly and lightweight project",
      ],
    },

    {
      id: 6,
      title: "Weather App",
      category: "Frontend",
      description:
        "💫 A simple weather app that shows real-time temperature and weather details using the OpenWeather API.",
      image: WeatherAppImage,
      technologies: ["JavaScript", "CSS", "HTML"],
      githubUrl: "https://github.com/siddharthsharma983/weather-app",
      liveUrl: "https://weather-app-three-xi-38.vercel.app",
      featured: false,
      date: "2025",
      highlights: [
        "Fetches real-time weather data from OpenWeather API",
        "Displays temperature, humidity, and weather conditions",
        "Clean and responsive frontend UI",
        "Built using vanilla JavaScript, HTML & CSS",
        "Beginner-friendly and lightweight project",
      ],
    },
  ];

  const tabs = [{ id: "all", label: "All Projects", icon: <Code size={18} /> }];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              My Projects
            </h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work across personal projects
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Featured Projects
            </motion.h3>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={`featured-${project.id}-${index}`}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    </div>

                    <div className="relative z-10 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.date}
                        </span>
                        <span className="ml-auto px-2 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 dark:bg-gray-700/80 backdrop-blur text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all text-sm font-medium shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Project Tabs */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 backdrop-blur-xl border ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg border-primary-500/20"
                      : "bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`all-${project.id}-${index}`}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar
                        size={16}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.date}
                      </span>
                      <span className="ml-auto px-2 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 dark:bg-gray-700/80 backdrop-blur text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all text-sm font-medium shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-blue-600/20 opacity-50"></div>

              <div className="relative z-10">
                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Interested in seeing more of my work or collaborating on a
                  project?
                </motion.p>
                <motion.a
                  href="https://github.com/siddharthsharma983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Github size={24} />
                  View All on GitHub
                </motion.a>
              </div>

              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
