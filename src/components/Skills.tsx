
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C/C++", level: 80 }
      ]
    },
    {
      title: "Frameworks & Technologies", 
      skills: [
        { name: "Spring Framework", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Spring Boot", level: 90 },
        { name: "Redux", level: 85 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "Oracle", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "AWS", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jenkins", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
