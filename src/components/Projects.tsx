
import { Button } from "@/components/ui/button";
import { Link, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Enterprise Data Integration Platform",
      description: "Built high-performance connectors for Informatica Cloud Data Integration supporting 100+ concurrent connections and 50+ data types. Reduced integration setup time by 30% and improved throughput by 20%.",
      technologies: ["Java", "Spring Boot", "REST APIs", "AWS S3", "MySQL"],
      category: "Enterprise Software",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Microservices E-commerce Platform",
      description: "Developed secure RESTful APIs for e-commerce platform with robust authentication mechanisms. Optimized API protocols resulting in 15% improvement in response times and 10% reduction in data transfer errors.",
      technologies: ["Spring Cloud", "React.js", "OAuth 2.0", "Docker", "Jenkins"],
      category: "Full Stack Development",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Data Processing System",
      description: "Implemented microservices for platforms like Mailchimp and Klaviyo achieving 60% improvement in data sync reliability. Integrated Apache Kafka and RabbitMQ for asynchronous messaging.",
      technologies: ["Apache Kafka", "RabbitMQ", "Spring Boot", "Redux", "MongoDB"],
      category: "Data Engineering",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Research Analytics Dashboard",
      description: "Designed web-based research tools with interactive data visualization and real-time analytics. Integrated Python Flask backends with React frontends for machine learning model testing.",
      technologies: ["React.js", "Node.js", "Python Flask", "MongoDB", "D3.js"],
      category: "Research & Analytics",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
