
export const Experience = () => {
  const experiences = [
    {
      title: "Information Technology Specialist 2 - Programmer",
      company: "NYS Office of Information Technology Services",
      period: "Jun 2024 – Present",
      location: "Albany, New York",
      description: "Engineering and maintaining enterprise-grade applications using Java, Spring Framework, and JPA within IBM WebSphere. Leading Agile development and architectural decision-making for distributed systems.",
      achievements: [
        "Reduced application downtime by 20% through enhanced scalability",
        "Improved UI responsiveness and user engagement by 25%",
        "Optimized database queries reducing execution time by 30%",
        "Achieved 95% on-time delivery of key user stories",
        "Boosted test reliability by 40% through robust testing suites"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "State Street",
      period: "May 2023 – June 2024",
      location: "New York",
      description: "Developed microservices-based applications using Spring Boot and React.js. Implemented security measures and managed CI/CD pipelines for scalable cloud-native operations.",
      achievements: [
        "Built responsive UIs with React.js and Redux",
        "Implemented OAuth 2.0 and OpenID Connect security",
        "Containerized applications using Docker",
        "Integrated Apache Kafka for real-time data processing",
        "Managed CI/CD pipelines using Jenkins"
      ]
    },
    {
      title: "Research Assistant",
      company: "University at Albany",
      period: "Aug 2022 – Apr 2023",
      location: "Albany, New York",
      description: "Designed web-based research tools using React.js, Node.js, and MongoDB. Developed full-stack prototypes for machine learning model testing and performance benchmarking.",
      achievements: [
        "Created interactive data visualization tools",
        "Integrated Python Flask backends with React frontends",
        "Implemented secure, responsive UIs",
        "Managed CI/CD workflows with Git and Jenkins"
      ]
    },
    {
      title: "Software Engineer",
      company: "Informatica",
      period: "Jan 2021 – Jul 2022",
      location: "Bengaluru, India",
      description: "Engineered full-stack solutions for Informatica Cloud Data Integration platform. Developed high-performance connectors and microservices for data integration.",
      achievements: [
        "Reduced integration setup time by 30%",
        "Improved data sync reliability by 60%",
        "Enhanced data retrieval times by 20% using AWS S3 caching",
        "Increased test coverage by 50% with TDD practices",
        "Reduced support tickets by 15% through documentation"
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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                  <p className="text-slate-500 text-sm">{exp.location}</p>
                </div>
                <div className="text-slate-500 font-medium mt-2 md:mt-0 md:text-right">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">{achievement}</span>
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
