import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './GardenExperience.css';
import FlowerGarden3D from './FlowerGarden3D';

function GardenExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="garden-experience" id="love-story">

      {/* 3D Garden Background */}
      <div className="garden-3d-layer">
        <FlowerGarden3D />
      </div>

      {/* Atmospheric overlays */}
      <div className="garden-overlay" />
      <div className="garden-light garden-light-left" />
      <div className="garden-light garden-light-right" />

      {/* Floating petals */}
      <div className="garden-petals">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="garden-petal"
            style={{
              left: `${(i * 29) % 100}%`,
              top: `${(i * 41) % 100}%`
            }}
            animate={reduceMotion ? {} : {
              y: [0, -80, 30, 0],
              x: [0, 35, -25, 0],
              rotate: [0, 160, 300, 360],
              opacity: [0.2, 0.85, 0.5, 0.2]
            }}
            transition={{
              duration: 9 + (i % 5) * 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Top label */}
      <motion.div
        className="garden-top-label"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span />
        OUR STORY IS WRITTEN IN THE STARS
        <span />
      </motion.div>

      {/* Main content */}
      <div className="garden-content">

        <motion.div
          className="garden-left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3 }}
        >
          <span className="garden-small-heading">
            TWO HEARTS, ONE DESTINY
          </span>

          <h2>
            A love that
            <br />
            <em>blooms forever.</em>
          </h2>

          <div className="garden-ornament">
            <span />
            <b>✧</b>
            <span />
          </div>

          <p>
            Some stories are written in the stars.
            Ours was written in every little moment,
            every smile and every heartbeat.
          </p>

          <div className="garden-date">
            <span>24</span>
            <div>
              <b>NOVEMBER</b>
              <small>2026 · OUR FOREVER BEGINS</small>
            </div>
          </div>
        </motion.div>

        {/* Center decorative heart */}
        <motion.div
          className="garden-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.div
            className="garden-heart-ring"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          <motion.div
            className="garden-heart"
            animate={reduceMotion ? {} : {
              scale: [1, 1.12, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ♡
          </motion.div>

          <span className="garden-heart-caption">
            FOREVER & ALWAYS
          </span>
        </motion.div>

        <motion.div
          className="garden-right"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3 }}
        >
          <span className="garden-small-heading">
            TWO SOULS. ONE BEAUTIFUL JOURNEY.
          </span>

          <div className="garden-names">
            <span>Ankit</span>
            <span className="garden-and">&</span>
            <span>Sakshi</span>
          </div>

          <div className="garden-ornament">
            <span />
            <b>✧</b>
            <span />
          </div>

          <p>
            Together, we begin a new chapter,
            surrounded by love, blessings
            and the people who mean the world to us.
          </p>

          <a href="#invitation" className="garden-explore">
            EXPLORE OUR INVITATION
            <span>↗</span>
          </a>
        </motion.div>

      </div>

      {/* Bottom signature */}
      <motion.div
        className="garden-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <span>MADE WITH LOVE</span>
        <span className="garden-bottom-line" />
        <span>ANKIT JANGIR ♥ SAKSHI</span>
      </motion.div>

    </section>
  );
}

export default GardenExperience;