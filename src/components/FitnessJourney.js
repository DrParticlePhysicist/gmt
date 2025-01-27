import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FitnessJourney = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = ["Frame 1", "Frame 2", "Frame 3", "Frame 4", "Frame 5", "Frame 6"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 3000); // Change frame every 3 seconds

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div
      style={{
        backgroundImage: "url('/bg2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: currentFrame === index ? 1 : 0,
            scale: currentFrame === index ? 1 : 0.8,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        >
          {index > 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: currentFrame === index ? "100%" : "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "4px",
                backgroundColor: "red",
              }}
            />
          )}
          {index > 0 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: currentFrame === index ? "100%" : "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "4px",
                backgroundColor: "red",
              }}
            />
          )}
          {index > 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: currentFrame === index ? "100%" : "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "4px",
                backgroundColor: "red",
              }}
            />
          )}
          {index > 0 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: currentFrame === index ? "100%" : "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                backgroundColor: "red",
              }}
            />
          )}
          <img
            src={`/f${index + 1}.jpg`}
            alt={`Frame ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FitnessJourney;
