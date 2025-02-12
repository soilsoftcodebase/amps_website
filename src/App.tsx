import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "./assets/logo.png";
import YoutubeVideo from "./components/YoutubeVideo";
import {
  Phone,
  Shield,
  Users,
  GraduationCap,
  MessageSquare,
  Menu,
  X,
  Award,
  Building,
  Globe,
  Clock,
  ChevronDown,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  // NEW: State to manage the contact form modal visibility and submission confirmation
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const menuItems = [
    {
      name: "About Us",
      description: "Our legacy of excellence since 1998",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Services",
      description: "Professional industrial solutions",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "Portfolio",
      description: "Our successful projects",
      icon: <Award className="w-5 h-5" />,
    },
    {
      name: "Contact Us",
      description: "Get in touch with us",
      icon: <MessageSquare className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Manpower to Industries",
      description:
        "Professional staffing solutions with over 8,000 skilled workers across various industries",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Security Guards",
      description:
        "Elite security personnel trained in modern security protocols and emergency response",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Industry Workers Training",
      description:
        "Comprehensive training programs designed to create skilled professionals ready for industry challenges",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600 mb-2" />,
      number: "8000+",
      label: "Skilled Workers",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600 mb-2" />,
      number: "25+",
      label: "Years Experience",
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600 mb-2" />,
      number: "500+",
      label: "Client Companies",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600 mb-2" />,
      number: "50+",
      label: "Cities Covered",
    },
  ];

  // NEW: Create additional refs for scrolling to each section
  const homeRef = React.useRef(null);
  const aboutSectionRef = React.useRef(null);
  const servicesSectionRef = React.useRef(null);
  const portfolioSectionRef = React.useRef(null);
  const contactSectionRef = React.useRef(null);

  // NEW: Helper function to scroll to the correct section
  const handleMenuClick = (section) => {
    switch (section) {
      case "About Us":
        if (aboutSectionRef.current) {
          aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Services":
        if (servicesSectionRef.current) {
          servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Portfolio":
        if (portfolioSectionRef.current) {
          portfolioSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Contact Us":
        if (contactSectionRef.current) {
          contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        if (homeRef.current) {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
  };

  // NEW: Handle form submission with confirmation animation
  const handleFormSubmit = () => {
    setFormSubmitted(true);
    // After 2 seconds, close the modal and reset submission state
    setTimeout(() => {
      setIsContactFormOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-sm shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className=" flex items-center justify-center"
              >
                {/* <Users className="w-6 h-6 text-white" /> */}
                <img src={logo} alt="Logo" className="w-48" />
              </motion.div>
              {/* <span
                className={`text-2xl font-bold ${
                  scrolled ? "text-blue-600" : "text-white"
                }`}
              >
                <img src="assets/logo.png" alt="Logo" className="h-8" />
              </span> */}
            </motion.div>

            <div className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.button
                    // NEW: onClick to scroll to the corresponding section
                    onClick={() => handleMenuClick(item.name)}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-1 ${
                      scrolled
                        ? "text-gray-600 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.name}</span>
                    {/* <ChevronDown className="w-4 h-4" /> */}
                  </motion.button>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // NEW: onClick opens the contact form modal
              onClick={() => setIsContactFormOpen(true)}
              className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full ${
                scrolled
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Get in Touch</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                  />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t mt-2"
            >
              <div className="max-w-7xl mx-auto px-4 py-3">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-3 w-full p-3 rounded-lg hover:bg-gray-50"
                    // NEW: onClick to scroll to the corresponding section and update state
                    onClick={() => {
                      handleMenuClick(item.name);
                      setActiveSection(item.name.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Attach homeRef to the top section (home) */}
      <div className="relative h-screen" ref={homeRef}>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Sb3h_d_jG-A?autoplay=1&vq=hd1080"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* <YoutubeVideo /> */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white max-w-4xl px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Empowering Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              25+ Years of Excellence in Industrial Solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="stat-item"
              >
                {stat.icon}
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        ref={(node) => {
          aboutRef(node);
          aboutSectionRef.current = node;
        }}
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Legacy of Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3"
                alt="Team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                25 Years of Industry Excellence
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since our inception in 1998, we've been at the forefront of
                industrial solutions, growing from a small team to managing over
                8,000 skilled professionals across multiple industries. Our
                journey is marked by continuous innovation, unwavering
                commitment to quality, and deep industry expertise.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We take pride in our comprehensive approach to workforce
                management, combining decades of experience with modern
                methodologies to deliver exceptional value to our clients. Our
                training programs have shaped thousands of careers, while our
                security solutions protect some of the most prestigious
                facilities across the nation.
              </p>
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-blue-600"
                >
                  <Award className="w-6 h-6" />
                  <span>ISO 9001:2015 Certified</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-blue-600"
                >
                  <Shield className="w-6 h-6" />
                  <span>Industry Leading Safety Standards</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={(node) => {
          servicesRef(node);
          servicesSectionRef.current = node;
        }}
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Industry Training Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600">
                Comprehensive Training Programs
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our state-of-the-art training facility offers specialized
                programs designed to create industry-ready professionals. With
                hands-on experience and expert instruction, we ensure our
                trainees are equipped with the latest skills and knowledge
                demanded by modern industries.
              </p>
              <ul className="space-y-4">
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span>Industrial Safety and Operations</span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span>Technical Skills Development</span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span>Leadership and Management Training</span>
                </motion.li>
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3"
                alt="Training Facility"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" ref={portfolioSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
                alt="Portfolio 1"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Industrial Staffing
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3"
                alt="Portfolio 2"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Security Services
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3"
                alt="Portfolio 3"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Training Programs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" ref={contactSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col items-center space-y-8">
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Ready to elevate your business with our professional solutions?
              Reach out to us today!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/YOUR_WHATSAPP_NUMBER"
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
              Contact via WhatsApp
            </motion.a>
            <div className="grid md:grid-cols-3 gap-8 w-full mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
              >
                <Phone className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-center">7410082553</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
              >
                <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-center">
                  adirajmspl.1@gmail.com
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
              >
                <Building className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 text-center">
                  Ambethan Chowk, Near Shri Laxmi Steel, A/p. Chakan, Tal.Khed,
                  Dist. Pune - 410 501
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Adiraj Manpower Solutions Pvt Ltd.
              </h3>
              <p className="text-gray-400">
                25+ years of excellence in providing professional industrial
                solutions
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: adirajmspl.1@gmail.com</p>
              <p className="text-gray-400">Phone: 7410082553</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-400">
                Ambethan Chowk, Near Shri Laxmi Steel, A/p. Chakan, Tal.Khed,
                Dist. Pune - 410 501
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Adiraj Manpower Solutions Pvt
              Ltd. . All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* NEW: Modal Contact Form */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsContactFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  X
                </button>
              </div>
              {/* NEW: Conditional rendering to show form or confirmation message */}
              {!formSubmitted ? (
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="mobile"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Your Mobile Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="company"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleFormSubmit}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-green-600 text-center text-lg">
                    Thank you! Your message has been sent.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
