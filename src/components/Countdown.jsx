
import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import useCountdown from '../hooks/useCountdown';
import './Countdown.css';

const units = [
  { label: 'DAYS', key: 'days' },
  { label: 'HOURS', key: 'hours' },
  { label: 'MINUTES', key: 'minutes' },
  { label: 'SECONDS', key: 'seconds' }
];

function TimeCard({ label, value, index, reduceMotion }) {
  const formatted = String(value ?? 0).padStart(2, '0');

  return (
    <motion.div
      className="luxury-time-card"
      initial={reduceMotion ? false : { opacity: 0, y: 45, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="time-card-inner">
        <span className="time-card-top">✧</span>

        <div className="time-number">
          <AnimatePresence mode="popLayout">
            <motion.strong
              key={formatted}
              initial={reduceMotion ? false : { y: 22, opacity: 0, rotateX: -45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={reduceMotion ? {} : { y: -18, opacity: 0, rotateX: 45 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {formatted}
            </motion.strong>
          </AnimatePresence>
        </div>

        <span className="time-card-label">{label}</span>
        <span className="time-card-bottom">✧</span>
      </div>
    </motion.div>
  );
}

export default function Countdown({ target }) {
  const t = useCountdown(target);
  const reduceMotion = useReducedMotion();

  const targetTime = new Date(target).getTime();
  const isValid = Number.isFinite(targetTime);
  const isComplete = isValid && Date.now() >= targetTime;

  if (!isValid) {
    return (
      <div className="countdown-error">
        Please provide a valid wedding date.
      </div>
    );
  }

  return (
    <section className="luxury-countdown" id="countdown">
      <div className="countdown-glow countdown-glow-left" />
      <div className="countdown-glow countdown-glow-right" />

      <motion.div
        className="countdown-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="countdown-eyebrow">
          <i /> THE BIG DAY IS APPROACHING <i />
        </span>

        <h2>
          Counting down to
          <br />
          <em>our forever.</em>
        </h2>

        <div className="countdown-divider">
          <span />
          <b>♡</b>
          <span />
        </div>

        <p>
          Every second brings us closer to a beautiful new beginning.
        </p>
      </motion.div>

      {isComplete ? (
        <motion.div
          className="countdown-complete"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="complete-heart">♡</span>
          <h3>TODAY IS THE DAY!</h3>
          <p>Ankit & Sakshi · Forever Begins Today</p>
        </motion.div>
      ) : (
        <div className="luxury-countdown-grid">
          {units.map((unit, index) => (
            <React.Fragment key={unit.key}>
              <TimeCard
                label={unit.label}
                value={t[unit.key]}
                index={index}
                reduceMotion={reduceMotion}
              />
            </React.Fragment>
          ))}
        </div>
      )}

      <motion.div
        className="countdown-date-signature"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <span>24</span>
        <div>
          <b>NOVEMBER 2026</b>
          <small>ANKIT JANGIR ♥ SAKSHI</small>
        </div>
      </motion.div>

      <div className="countdown-bottom-text">
        A DAY TO REMEMBER · A LOVE TO LAST FOREVER
      </div>
    </section>
  );
}
