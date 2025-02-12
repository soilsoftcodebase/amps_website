// import React from "react";
// import {
//   Phone,
//   Shield,
//   Users,
//   GraduationCap,
//   MessageSquare,
//   Menu,
//   X,
//   Award,
//   Building,
//   Globe,
//   Clock,
//   ChevronDown,
// } from "lucide-react";

// const Menu = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const menuItems = [
//     {
//       name: "About Us",
//       description: "Our legacy of excellence since 1998",
//       icon: <Users className="w-5 h-5" />,
//     },
//     {
//       name: "Services",
//       description: "Professional industrial solutions",
//       icon: <Shield className="w-5 h-5" />,
//     },
//     {
//       name: "Portfolio",
//       description: "Our successful projects",
//       icon: <Award className="w-5 h-5" />,
//     },
//     {
//       name: "Contact Us",
//       description: "Get in touch with us",
//       icon: <MessageSquare className="w-5 h-5" />,
//     },
//   ];
//   return (
//     <div>
//       <nav
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/90 backdrop-blur-sm shadow-lg py-2"
//             : "bg-transparent py-4"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-2"
//             >
//               <motion.div
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//                 className=" flex items-center justify-center"
//               >
//                 {/* <Users className="w-6 h-6 text-white" /> */}
//                 <img src={logo} alt="Logo" className="w-48" />
//               </motion.div>
//               {/* <span
//                 className={`text-2xl font-bold ${
//                   scrolled ? "text-blue-600" : "text-white"
//                 }`}
//               >
//                 <img src="assets/logo.png" alt="Logo" className="h-8" />
//               </span> */}
//             </motion.div>

//             <div className="hidden md:flex space-x-1">
//               {menuItems.map((item) => (
//                 <motion.div
//                   key={item.name}
//                   className="relative"
//                   onHoverStart={() => setHoveredItem(item.name)}
//                   onHoverEnd={() => setHoveredItem(null)}
//                 >
//                   <motion.button
//                     className={`px-4 py-2 rounded-lg flex items-center space-x-1 ${
//                       scrolled
//                         ? "text-gray-600 hover:text-blue-600"
//                         : "text-white hover:text-blue-200"
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span>{item.name}</span>
//                     {/* <ChevronDown className="w-4 h-4" /> */}
//                   </motion.button>

//                   {/* <AnimatePresence>
//                     {hoveredItem === item.name && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl p-2"
//                       >
//                         <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
//                           <div className="flex-shrink-0 mt-1">{item.icon}</div>
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               {item.name}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               {item.description}
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence> */}
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full ${
//                 scrolled
//                   ? "bg-blue-600 text-white"
//                   : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
//               }`}
//             >
//               <Phone className="w-4 h-4" />
//               <span>Get in Touch</span>
//             </motion.button>

//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <motion.div
//                 animate={{ rotate: isMenuOpen ? 90 : 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {isMenuOpen ? (
//                   <X
//                     className={`w-6 h-6 ${
//                       scrolled ? "text-gray-900" : "text-white"
//                     }`}
//                   />
//                 ) : (
//                   <Menu
//                     className={`w-6 h-6 ${
//                       scrolled ? "text-gray-900" : "text-white"
//                     }`}
//                   />
//                 )}
//               </motion.div>
//             </motion.button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white border-t mt-2"
//             >
//               <div className="max-w-7xl mx-auto px-4 py-3">
//                 {menuItems.map((item) => (
//                   <motion.button
//                     key={item.name}
//                     whileHover={{ x: 10 }}
//                     className="flex items-start space-x-3 w-full p-3 rounded-lg hover:bg-gray-50"
//                     onClick={() => {
//                       setActiveSection(item.name.toLowerCase());
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     <div className="flex-shrink-0 mt-1">{item.icon}</div>
//                     <div className="text-left">
//                       <p className="font-medium text-gray-900">{item.name}</p>
//                       <p className="text-sm text-gray-500">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </div>
//   );
// };

// export default Menu;
