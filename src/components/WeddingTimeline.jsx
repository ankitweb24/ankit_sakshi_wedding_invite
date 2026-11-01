
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { wedding } from '../data/weddingData';
import './WeddingTimeline.css';

const eventIcons = ['✧', '❀', '♡', '✦', '❦'];

export default function WeddingTimeline() {
  const reduceMotion = useReducedMotion();

  const events = Array.isArray(wedding.events) ? wedding.events : [];

  return (
    <section className="luxury-timeline-section" id="events">

      {/* Background decorations */}
      <div className="timeline-glow timeline-glow-left" />
      <div className="timeline-glow timeline-glow-right" />

      {/* Heading */}
      <motion.div
        className="timeline-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span className="timeline-eyebrow">
          <i /> THE CELEBRATION BEGINS <i />
        </span>

        <h2>
          Moments to <em>remember.</em>
        </h2>

        <p>
          A beautiful beginning, surrounded by love, laughter
          and the blessings of our families.
        </p>

        <div className="timeline-heading-flourish">✧ ❦ ✧</div>
      </motion.div>

      {/* Events */}
      <div className="luxury-timeline">

        <div className="timeline-center-line" />

        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.article
              className={`luxury-event ${isLeft ? 'event-left' : 'event-right'}`}
              key={`${event.title}-${index}`}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: isLeft ? -45 : 45, y: 20 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: reduceMotion ? 0 : 0.1
              }}
            >

              {/* Timeline marker */}
              <div className="event-marker">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Event card */}
              <div className="event-card">
                <div className="event-card-top">
                  <span className="event-index">
                    CELEBRATION {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="event-icon">
                    {eventIcons[index % eventIcons.length]}
                  </span>
                </div>

                <div className="event-date">
                  <span>{event.date}</span>
                  <i />
                  <span>{event.time}</span>
                </div>

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <div className="event-card-bottom">
                  <span>ANKIT & SAKSHI</span>
                  <span className="event-heart">♡</span>
                </div>

                <div className="event-card-corner corner-tl" />
                <div className="event-card-corner corner-br" />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Closing message */}
      <motion.div
        className="timeline-closing"
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>AND THEY LIVED THEIR BEAUTIFUL BEGINNING...</span>
        <h3>24 November 2026</h3>
        <div>✧ ♡ ✧</div>
      </motion.div>

    </section>
  );
}
