import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Server, Shield, Users, Zap, Code, CheckCircle, ExternalLink, Menu, X } from 'lucide-react';
import Image from 'next/image'

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Configuration object - easy to customize for different users
  const config = {
    name: "Yogesh Kamble",
    title: "Microsoft 365 Expert",
    experience: "11+",
    location: "Pune, India",
    email: "yogesh@batein.com",
    phone: "+91 9599-495-265",
    linkedin: "https://www.linkedin.com/in/yogesh-kamble-76a9a665/",
    //github: "github.com/yourprofile",
    
    hero: {
      tagline: "Transforming businesses with Microsoft 365 solutions",
      description: "With over 11 years of experience in Microsoft 365 ecosystem, I help organizations optimize their digital workplace through Exchange, SharePoint, Teams, and advanced security implementations."
    },
    
    about: {
      intro: "I'm a seasoned Microsoft 365 expert with over 11 years of experience helping organizations transform their digital workplace. My expertise spans across the entire Microsoft 365 ecosystem, from Exchange migrations to advanced security implementations.",
      highlights: [
        "11+ years of hands-on experience with Microsoft 365",
        "Expert in Exchange On-premises and Online migrations",
        "Advanced PowerShell scripting and automation",
        "Security & Compliance implementations",
        "Teams and SharePoint architecture"
      ]
    },
    
    skills: [
      {
        category: "Exchange",
        icon: <Mail className="w-8 h-8" />,
        skills: ["Exchange On-premises 2013/2016/2019/SE", "Exchange Online", "Hybrid Deployments", "Migration Planning", "Mail Flow Management"]
      },
      {
        category: "SharePoint & Teams",
        icon: <Users className="w-8 h-8" />,
        skills: ["SharePoint Online", "Teams Administration", "Collaboration Solutions", "Document Management", "Workflow Automation"]
      },
      {
        category: "Security & Compliance",
        icon: <Shield className="w-8 h-8" />,
        skills: ["Entra ID (Azure AD)", "Conditional Access", "DLP Policies", "Compliance Center", "Security Baselines"]
      },
      {
        category: "Automation & Scripting",
        icon: <Code className="w-8 h-8" />,
        skills: ["PowerShell", "Power Automate", "Graph API", "Automation Scripts", "Bulk Operations"]
      },
      {
        category: "Device Management",
        icon: <Server className="w-8 h-8" />,
        skills: ["Microsoft Intune", "Device Compliance", "App Deployment", "Mobile Device Management", "Conditional Access"]
      },
      {
        category: "Identity & Access",
        icon: <Zap className="w-8 h-8" />,
        skills: ["Entra Connect", "Single Sign-On", "Multi-Factor Authentication", "Identity Governance", "Privileged Access"]
      }
    ],
    
    projects: [
      {
        title: "Tokiomarine Insurance",
        description: "Led a complex migration of 30,000+ mailboxes from Exchange 2016 to Exchange Online, including hybrid coexistence and mail flow optimization. SharePoint on-prem to SPO migration, Teams provisioning, Cisco Iron Port & Airwatch to Intune migration. Configure Security & Compliance center. Setup ADFS to configure federation with M365 tenant.",
        technologies: ["Exchange Hybrid", "PowerShell", "Azure AD Connect", "ADFS", "SMTP Relay", "Symantec Message Labs"],
        achievements: ["Zero downtime migration", "95% user satisfaction", "Reduced IT costs by 40%"],
        type: "Transformation | Migration"
      },
      {
        title: "Munich Reinsurance",
        description: "Manage 35,000+ mailboxes and Exchange on-prem PROD and UAT servers. Perform migrations during Mergers and De-Mergers",
        technologies: ["Quest ODMT", "Power Automate", "Power Apps", "Exchange Hybrid", "PowerShell", "SMTP Relay", "Proof Point"],
        achievements: ["Improved user adoption by 70%", "Reduced End-User incidents by 20%", "Enhanced collaboration", "Seamless merger"],
        type: ["Support | Merger"]
      },
      {
        title: "British Telecom",
        description: "Implement data classification, DLP and conditional access. Configure sensitivity labels and retention via S&C Center. Setup conditional access for end users and devices and manage Intune devices.",
        technologies: ["Conditional Access", "Azure AD", "Defender for Office 365", "Intune", "DLP"],
        achievements: ["Blocked 99.9% of threats", "Achieved compliance certification", "Reduced security incidents by 80%"],
        type: "Security"
      },
      {
        title: "PowerShell Automation",
        description: "Developed comprehensive PowerShell scripts for automated user provisioning, license management, and reporting across Microsoft 365. Developed automation scripts for provisioning Microsoft Teams Rooms, normal rooms, perform checks for users post migration, weekly shared mailbox permission checks etc.",
        technologies: ["PowerShell", "Graph API", "Power Apps", "Power BI"],
        achievements: ["Automated 80% of routine tasks", "Reduced provisioning time by 90%", "Real-time reporting dashboard", "Reduction in time taken for post migration checks by 90%", "End User incidents reduced by 20%"],
        type: "Automation"
      }
    ],
    
    certifications: [
      "Microsoft 365 Certified: Fundamentals",
      "Microsoft 365 Certified: Azure Fundamentals",
      "Microsoft 365 Certified: Security Compliance & Identity Fundamentals",
    ],
    
    services: [
      {
        title: "Migration Services",
        description: "End-to-end migration from on-premises to Microsoft 365 with minimal downtime",
        features: ["Exchange Migration", "SharePoint Migration", "Teams Integration", "End-User Training"]
      },
      {
        title: "Security Implementation",
        description: "Comprehensive security setup and compliance configuration",
        features: ["Threat Detection & Response", "Conditional Access", "DLP Implementation", "Security Monitoring"]
      },
      {
        title: "Automation & Scripting",
        description: "Custom PowerShell scripts and automation solutions",
        features: ["User Provisioning", "License Management", "MTR & Rooms Provisioning", "Bulk Operations"]
      },
      {
        title: "Consulting & Support",
        description: "Expert consulting and ongoing support for Microsoft 365 environments",
        features: ["Architecture Review", "Best Practices", "Troubleshooting", "Performance Optimization"]
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-600">{config.name}</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-700 hover:text-blue-600"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {config.experience} Years Experience
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {config.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
                {config.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {config.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                </button>
                <a
                href="https://docs.google.com/document/d/17gCC0-xTWy6ILh-alHPQLUawTqk0VjWH/edit?usp=sharing&ouid=117609289532226870854&rtpof=true&sd=true"
                download
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                <Download className="w-4 h-4" />
                Download CV
                </a>
              </div>
            </div>
            <div className="relative">
            <Image
                src="/yogi.png"             // ← your file in /public
                alt="Yogesh Kamble"
                width={400}                  // adjust as needed
                height={400}                 // adjust as needed
                className="rounded-2xl object-cover"
            />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {config.about.intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                {config.about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-3">
                {config.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expertise</h2>
            <p className="text-lg text-gray-600">
              Comprehensive knowledge across the Microsoft 365 ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.skills.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Successful Microsoft 365 implementations and transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {config.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive Microsoft 365 services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-blue-100">
              Ready to transform your Microsoft 365 environment? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-200" />
                    <a
                        href={`mailto:${config.email}`}
                        className="underline hover:text-blue-100"
                    >
                        {config.email}
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <a
                        href={`tel:${config.phone.replace(/[^+\d]/g, "")}`}
                        className="underline hover:text-blue-100"
                    >
                        {config.phone}
                    </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-200" />
                  <span>{config.location}</span>
                </div>
                <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-200" />
                    <a
                    href={config.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-100"
                    >
                        {config.linkedin}
                    </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Thank you for your message! I will get back to you soon.')}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 {config.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;