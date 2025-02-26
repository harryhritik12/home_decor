import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/splashStyle.css';

const SplashScreen = ({ onAnimationComplete }) => {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Simultaneous animations
      await Promise.all([
        controls.start({
          opacity: 0,
          transition: { delay: 2.5, duration: 0.5 }
        }),
        textControls.start({
          y: -50,
          opacity: 0,
          transition: { delay: 2, duration: 0.5 }
        })
      ]);
      onAnimationComplete();
    };
    sequence();
  }, [controls, textControls, onAnimationComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      className="splash-screen"
    >
      {/* Background overlay */}
      <motion.div
        className="background-overlay"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 3 }}
      />
      
      {/* Main text */}
      <motion.div
        className="text-container"
        initial={{ y: 0 }}
        animate={textControls}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="splash-title"
        >
          Home Decor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="splash-subtitle"
        >
          Crafting Beautiful Spaces
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;