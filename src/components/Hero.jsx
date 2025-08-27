import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useScroll, useMotionValue, useSpring, useAnimation } from 'framer-motion';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Parallax effects for background elements
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);
  
  // Spring values for smooth mouse following
  const springConfig = { damping: 20, stiffness: 300 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  // Transform values for interactive elements
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  
  // Handle mouse movement for interactive animations
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXValue = (e.clientX - rect.left) / width;
    const mouseYValue = (e.clientY - rect.top) / height;
    mouseX.set(mouseXValue);
    mouseY.set(mouseYValue);
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBg, scale: scaleBg }}
      >
        <div className="absolute left-1/2 top-0 h-[200%] w-[200%] -translate-x-1/2 bg-gradient-to-br from-orange-50/80 via-blue-50/50 to-white opacity-70" />
        
        {/* Animated shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-60 h-60 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 right-20 w-60 h-60 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6"
            style={{
              rotateX,
              rotateY,
              transformPerspective: "1000px",
            }}
          >
            Workforce solutions{" "}
            <motion.span 
              className="text-orange-500 relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={{
                color: isHovered ? "#ea580c" : "#f97316",
              }}
              transition={{ duration: 0.3 }}
            >
              reimagined
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 origin-left"
              />
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We help businesses build exceptional teams through innovative staffing and management solutions.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.a
            href="#contact"
            className="relative px-8 py-4 bg-orange-500 text-white rounded-full font-medium overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get started</span>
            <motion.div
              className="absolute inset-0 bg-orange-600 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.a
            href="#services"
            className="relative px-8 py-4 border border-gray-300 rounded-full font-medium overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-gray-700 group-hover:text-white">
              Learn more
            </span>
            <motion.div
              className="absolute inset-0 bg-gray-900 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Interactive cursor element */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 bg-orange-500 rounded-full pointer-events-none opacity-0 md:opacity-100"
        style={{
          x: useTransform(mouseXSpring, [0, 1], [0, window.innerWidth]),
          y: useTransform(mouseYSpring, [0, 1], [0, window.innerHeight]),
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 0.2 : 0,
        }}
        transition={{ type: "spring", damping: 10 }}
      />
    </section>
  );
};

export default Hero;