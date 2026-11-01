
import React, { useState } from 'react';
import './Hero.css';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion
} from 'framer-motion';

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: (i % 6) * 0.8,
  duration: 7 + (i % 5) * 2,
  size: 5 + (i % 4) * 3
}));

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 90,
    damping: 20
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 90,
    damping: 20
  });

  const handleMouseMove = (e) => {
    if (reduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 12);
    mouseY.set(-y * 12);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="hero-luxury"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
    >
      {/* Background atmosphere */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grain" />

      {/* Floating petals */}
      <div className="hero-petals">
        {petals.map((petal) => (
          <motion.span
            key={petal.id}
            className="floating-petal"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.5
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    y: ['-5vh', '105vh'],
                    x: [0, 35, -25, 15, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 0.8, 0.7, 0]
                  }
            }
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Decorative corner ornaments */}
      <div className="hero-corner hero-corner-left">
        ✧
      </div>
      <div className="hero-corner hero-corner-right">
        ✧
      </div>

      <div className="hero-inner">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.22,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.div
            className="hero-top-label"
            variants={fadeUp}
          >
            <span className="label-line" />
            A CELEBRATION OF LOVE
            <span className="label-line" />
          </motion.div>

          <motion.p
            className="hero-pre-title"
            variants={fadeUp}
          >
            THE BEGINNING OF FOREVER
          </motion.p>

          <motion.h1
            className="hero-heading"
            variants={fadeUp}
          >
            Two souls,
            <br />
            <em>one destiny.</em>
          </motion.h1>

          <motion.div
            className="hero-divider"
            variants={fadeUp}
          >
            <span />
            <span className="divider-diamond">✧</span>
            <span />
          </motion.div>

          <motion.div
            className="hero-couple-names"
            variants={fadeUp}
          >
            <span>Ankit</span>
            <motion.span
              className="hero-ampersand"
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [1, 1.2, 1],
                      rotate: [0, 8, -8, 0]
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              &
            </motion.span>
            <span>Sakshi</span>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={fadeUp}
          >
            Two hearts, one beautiful journey.
            <br />
            Together with our families, we invite you
            <br />
            to celebrate the beginning of our forever.
          </motion.p>

          <motion.div
            className="hero-wedding-date"
            variants={fadeUp}
          >
            <span className="date-line" />
            <span>24 NOVEMBER 2026</span>
            <span className="date-line" />
          </motion.div>

          <motion.a
            href="#invitation"
            className="hero-cta"
            variants={fadeUp}
            whileHover={
              reduceMotion
                ? {}
                : {
                    scale: 1.05,
                    y: -4
                  }
            }
            whileTap={{ scale: 0.97 }}
          >
            <span>DISCOVER OUR INVITATION</span>
            <span className="cta-arrow">↗</span>
          </motion.a>
        </motion.div>

        {/* RIGHT PHOTO EXPERIENCE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.div
            className="hero-photo-scene"
            style={
              reduceMotion
                ? {}
                : {
                    rotateX,
                    rotateY,
                    transformPerspective: 1200
                  }
            }
          >
            {/* Outer ornamental ring */}
            <motion.div
              className="photo-orbit photo-orbit-one"
              animate={
                reduceMotion
                  ? {}
                  : { rotate: 360 }
              }
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            <motion.div
              className="photo-orbit photo-orbit-two"
              animate={
                reduceMotion
                  ? {}
                  : { rotate: -360 }
              }
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            {/* Photo frame */}
            <motion.div
              className="hero-photo-frame"
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -12, 0]
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="hero-photo-inner">
                {!imageFailed ? (
                  <img
                    src="/images/couple.png"
                    alt="Ankit and Sakshi wedding photograph"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="hero-photo-placeholder">
                    <span>AN</span>
                    <span className="placeholder-heart">♡</span>
                    <span>SA</span>
                    <p>Add your couple photograph</p>
                  </div>
                )}
              </div>

              <div className="photo-frame-decoration">
                <span>✧</span>
                <span>♡</span>
                <span>✧</span>
              </div>
            </motion.div>

            {/* Floating hearts */}
            <motion.div
              className="floating-heart heart-one"
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -15, 0],
                      rotate: [0, 12, 0]
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              ♡
            </motion.div>

            <motion.div
              className="floating-heart heart-two"
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, 12, 0],
                      rotate: [0, -15, 0]
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity
              }}
            >
              ✧
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo-caption"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <span>TOGETHER IS OUR FAVOURITE PLACE</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.a
        href="#invitation"
        className="hero-scroll"
        animate={
          reduceMotion
            ? {}
            : { y: [0, 9, 0] }
        }
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span>↓</span>
      </motion.a>

      <div className="hero-bottom-text">
        ANKIT <span>♡</span> SAKSHI · 2026
      </div>
    </section>
  );
}
