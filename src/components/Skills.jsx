import { Globe, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 100 },
    },
  };

  // Fixed technicalSkills Array to show icons properly
  const technicalSkills = [
    { name: "React.js", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "C/C++", icon: "⚙️" },
    { name: "Git", icon: "📝" },
    { name: "VS Code", icon: "💻" },
  ];

  const softSkills = [
    {
      name: "Team Leadership",
      icon: <Users className="w-6 h-6" />,
      description: "Strong team collaboration and leadership abilities",
    },
    {
      name: "Problem Solving",
      icon: <Brain className="w-6 h-6" />,
      description: "Analytical thinking with data structures & algorithms",
    },
    {
      name: "Adaptability",
      icon: <Globe className="w-6 h-6" />,
      description: "Quick learning and adaptation to new technologies",
    },
    {
      name: "Perseverance",
      icon: <Users className="w-6 h-6" />,
      description: "Persistent approach to overcoming challenges",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900"></div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Content preserved as requested */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 dark:from-white dark:via-purple-100 dark:to-blue-100 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A professional overview of my frontend development expertise and
              soft skills, shaped through academic projects and hands-on
              experience in modern web technologie
            </p>
          </motion.div>

          {/* Technical Skills Box - Fixed */}
          <motion.div
            className="mb-16 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 md:p-8 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {technicalSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/40 rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-700/60 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 rounded-3xl shadow-xl hover:shadow-purple-500/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
