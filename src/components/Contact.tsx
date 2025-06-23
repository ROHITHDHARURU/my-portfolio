import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import React, { useState } from 'react';

export const Contact = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // --- Handlers for "Let's Connect" buttons ---
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/rohith17899/', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:dharururohith@gmail.com', '_blank');
  };

  // Handler for "Download Resume" button
  const handleDownloadResume = () => {
    const resumeUrl = '/rohith_dharuru_resume.pdf'; // Ensure this path is correct for your hosted resume
    window.open(resumeUrl, '_blank');
  };

  // --- Handler for "Send Message" form submission (using mailto) ---
  const handleSendMessage = (event) => {
    event.preventDefault();

    const recipientEmail = 'dharururohith@gmail.com'; // Your target email address

    // Construct the email body with proper line breaks (%0A for new line, %0D for carriage return)
    // Using %0D%0A for cross-platform compatibility as CRLF
    const emailBody = [
      `Name: ${firstName} ${lastName}`,
      `Sender Email: ${senderEmail}`,
      '', // Empty line for spacing
      'Message:',
      message
    ].map(line => encodeURIComponent(line)).join('%0D%0A'); // Join with URL-encoded newlines

    const encodedSubject = encodeURIComponent(subject);

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    // Optionally, clear the form after attempting to send
    setFirstName('');
    setLastName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');

    alert('Your email client will open with the pre-filled message. Please click send there to complete.');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or collaborating on innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">dharururohith@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">518-212-0604</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-slate-600">Albany, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleLinkedInClick}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleEmailClick}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSendMessage}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="mt-2"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="mt-2"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project collaboration opportunity"
                    className="mt-2"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-slate-900 hover:bg-slate-800">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};