import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
import { useState } from 'react';

export default function Hero(props) {
  const [secondAnimation, setSecondAnimation] = useState(false);
  const [thirdAnimation, setThirdAnimation] = useState(false);
  const [jaadu ,setJaadu]= useState(false);
  const { func } = props;
  return (
    <>
   {!jaadu && <section className={styles.hero}>
     {/* Enlarging Circle */}
      <motion.div
        className={styles.circle}
        initial={{ scale: 1 ,  y: 150, x: +665 }}//200150
        animate={thirdAnimation ? { scale: 2,  y: -1000, x: +665 } :{ scale: 2,  y: 150, x: +665 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (!thirdAnimation) {
    
            setThirdAnimation(true);
          }
        }}
      ></motion.div>

      {/* Text Fade-In */}
      <motion.div
        className={styles.content}
        initial={{scale:1, opacity: 0, y: -200, x:0 }}
        animate={secondAnimation ? { scale:1, opacity: 1, y: -1000, x:0 } : { scale:1, opacity: 1, y: -200, x:0 }}
        transition={{ duration :1.5, delay: 0.5,ease: "easeInOut" }}
      > 
        <h1 className={styles.title}>The Ultimate Companion <br/>for Hydration</h1>
        <p  className={styles.subtitle}>
          We believe in the power of hydration.<br/>Our mission is simple yet vital.
        </p>
        <motion.button
          className={styles.inquiryButton}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Inquiry Now
        </motion.button>
      </motion.div>

      {/* Bottle with Cap Animation */}
      
      {/* Side Blue Circles */}
      <motion.div
        className={styles.leftCircle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={thirdAnimation ? { scale:1, opacity: 1, y: -1000 } :{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1,ease: "easeInOut" }}
      >
        <img src="./sbl.png" alt="Small Bottle Left" />
      </motion.div>
      <motion.div
        className={styles.rightCircle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={thirdAnimation ? { scale:1, opacity: 1, y: -1000 } :{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      >
        <img src="./sbr.png" alt="Small Bottle Right" />
      </motion.div>
      </section>
}
      <div className={styles.bottle}>
  {/* Bottle Cap */}
  <motion.img
    src="./bottle-cap.png"
    alt="Bottle Cap"
    className={styles.bottleCap}
    initial={{ y: -750, x: -95 }} // Starting position
    animate={secondAnimation ? { y: +210, x: -95 } : { y: -1000, x: -95 }} // Animation states
    transition={{ duration: 3, ease: "easeInOut" }}
    onAnimationComplete={() => {
      if (!secondAnimation) {

        setSecondAnimation(true);
      }
      setTimeout(() =>{ setJaadu(true); func(true);}, 2000);
    }}
  />

  {/* Bottle Body */}
  <motion.img
    src="./bottle-body.png"
    alt="Bottle Body"
    className={styles.bottleBody}
    initial={{ y: -1600, x: -95 }} // Starting position
    animate={secondAnimation ? { y: -630, x: -95 } : { y: -1400, x: -95 }} // Animation states
    transition={{ duration: 3, ease: "easeInOut" }}
  />
</div>



      <section>
      <img src="./Special Features.png" alt= "Special Features" style={{width: '100%',height:'auto',objectFit: 'cover'}} />
    </section>
    </>
  );
}

