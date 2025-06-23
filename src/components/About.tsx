
export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a results-driven Full Stack Software Engineer with over 4 years of experience in 
              designing, developing, and deploying scalable applications. I specialize in Java, Spring, 
              React, and RESTful services with strong expertise in cloud development across AWS and OCI.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My passion lies in creating enterprise-level systems with a focus on Agile methodologies, 
              object-oriented programming, and performance optimization. I hold a Master's degree in 
              Computer Science and have a solid foundation in data engineering and test automation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-slate-600">Enterprise Applications</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/lovable-uploads/2cca9ee4-f36f-4c07-8426-6cd159de23ba.png" 
                alt="Rohith Dharuru" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
