import { Button } from "@/components/ui/button";
import { FileText, User } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handler for "Download Resume" button
  const handleDownloadResume = () => {
    // Ensure this path is correct for your hosted resume.
    // It should be in the 'public' folder of your React project or a full URL if hosted elsewhere.
    const resumeUrl = '/Rohith_Dharuru_Resume.pdf'; // Example: if resume is in public/
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Rohith Dharuru
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
            Full Stack Software Engineer
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Results-driven engineer with 4+ years of experience in designing and developing
            scalable applications using Java, Spring, React, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => scrollToSection('projects')}
            >
              <User className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={handleDownloadResume} // Changed from scrollToSection('contact')
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};