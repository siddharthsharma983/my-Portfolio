import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vaish College of Engineering (MDU)",
      location: "Rohtak (Haryana), India",
      duration: "2022 - 2025",
      CGPA: "6.33",
      status: "Complete",
      description:
        "Specialized in creating high-performance, visually appealing, and responsive user interfaces. Throughout my degree, I focused on mastering the art of converting complex designs into clean, functional code, with a strong emphasis on user accessibility and modern web standards.",
      coursework: [
        "Advanced Web Development (HTML5, CSS3, Modern JS)",
        "User Interface (UI) Design Principles",
        "Responsive Web Design & Frameworks",
        "Client-Side Scripting",
        "Computer Graphics",
        "Software Engineering & Agile Development",
      ],
    },
    {
      id: 2,
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      location: "Chandigarh, India",
      duration: "2025 - 2027",
      status: "Pursuing",
      description:
        "Currently pursuing MCA with a strong focus on Frontend Development. Actively learning and building responsive, interactive, and user-centric web interfaces using modern frontend technologies and UI/UX best practices.",
      coursework: [
        "Frontend Development",
        "Web Technologies",
        "JavaScript & Modern Frameworks",
        "UI/UX Design Principles",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      degree: "Intermediate (12th – Arts Stream)",
      institution: "A.F.C. Sr. Sec. School",
      location: "Sampla, Rohtak",
      duration: "2021 - 2022",
      percentage: "71%",
      status: "Completed",
      description:
        "Successfully completed Intermediate (12th) in Arts stream with consistent academic performance.",
      coursework: [
        "Hindi Core",
        "Political Science",
        "Physical Education",
        "Geography",
        "English Core",
      ],
    },
    {
      id: 3,
      degree: "Matriculation (10th)",
      institution: "A.F.C. Sr. Sec. School",
      location: "Sampla, Rohtak",
      duration: "2019 - 2020",
      percentage: "57%",
      status: "Completed",
      description:
        "Completed Matriculation (10th), building a strong foundation in core academic subjects.",

      coursework: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "Hindi",
        "Physical and Health Education",
      ],
    },
  ];

  const certifications = [
    {
      name: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2025",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-5afa46ff-2689-4212-95eb-ac6ec4461b65/",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Learning
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6 shadow-md"></div>
            <p className="text-lg text-blue-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              My academic journey and continuous learning through formal
              education and online certifications.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Academic Background
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {index !== education.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary-300 dark:bg-primary-700"></div>
                  )}

                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h4>

                          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <GraduationCap size={16} />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{edu.duration}</span>
                            </div>
                          </div>

                          <div className="mt-3 flex gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                edu.status === "Pursuing"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              }`}
                            >
                              {edu.status}
                            </span>
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-xs font-medium">
                              {edu.cgpa || edu.percentage || "—"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-2/3 space-y-6">
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                      {/* Coursework */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      Achievements (SAFE)
                      {edu.achievements && (
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {edu.achievements.map((ach, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <Award
                                  size={16}
                                  className="text-primary-600 dark:text-primary-400 mt-0.5"
                                />
                                <span className="text-sm">{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Online Learning
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-400 font-medium text-sm"
                  >
                    View Credential
                    <Award size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Lifelong Learning</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with modern
              frontend technologies, frameworks, and UI/UX best practices to
              build high-quality, user-centric web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
