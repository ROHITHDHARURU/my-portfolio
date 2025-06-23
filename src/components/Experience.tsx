
export const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Worked closely with designers and product managers.",
      achievements: [
        "Built 15+ client projects",
        "Reduced deployment time by 60%",
        "Established coding standards"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2020",
      description: "Focused on creating responsive and interactive user interfaces. Collaborated with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Improved user engagement by 35%",
        "Optimized loading speeds",
        "Mentored 3 junior developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <div className="text-slate-500 font-medium mt-2 md:mt-0">{exp.period}</div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
