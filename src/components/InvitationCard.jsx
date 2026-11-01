
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './InvitationCard.css';

export default function InvitationCard() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="royal-invitation-section" id="invitation">

      {/* Background decoration */}
      <div className="invitation-glow invitation-glow-one" />
      <div className="invitation-glow invitation-glow-two" />

      <motion.div
        className="invitation-intro"
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="invitation-eyebrow">
          <i /> A SPECIAL INVITATION <i />
        </span>

        <h2>
          The day our
          <br />
          <em>forever begins.</em>
        </h2>

        <p>A celebration of love, family and togetherness.</p>
      </motion.div>

      {/* Royal invitation paper */}
      <motion.div
        className="royal-paper-wrapper"
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 90, rotateX: 12, scale: 0.94 }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.div
          className="royal-paper"
          whileHover={
            reduceMotion
              ? {}
              : {
                  rotateY: 2,
                  rotateX: -1,
                  transition: { duration: 0.5 }
                }
          }
        >
          {/* Ornamental border */}
          <div className="royal-paper-border">
            <div className="paper-corner top-left">❧</div>
            <div className="paper-corner top-right">❧</div>
            <div className="paper-corner bottom-left">❧</div>
            <div className="paper-corner bottom-right">❧</div>

            {/* Header */}
            <div className="paper-header">
              <span className="paper-ganesh">
                ॥ श्री गणेशाय नमः ॥
              </span>

              <div className="paper-symbol">✧</div>

              <span className="paper-small-label">
                WITH THE BLESSINGS OF OUR ELDERS
              </span>
            </div>

            {/* Invitation message */}
            <div className="paper-message">
              <p>
                With immense joy and the blessings
                of our beloved families,
              </p>

              <p>
                we cordially invite you to grace
                the auspicious occasion of the wedding of
              </p>
            </div>

            {/* Couple names */}
            <div className="paper-couple">
              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Ankit Jangir
              </motion.h2>

              <div className="paper-heart">
                <span />
                <b>♡</b>
                <span />
              </div>

              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Sakshi
              </motion.h2>
            </div>

            {/* Date seal */}
            <div className="paper-date-seal">
              <span className="seal-top">SAVE THE DATE</span>

              <div className="seal-date">
                <strong>24</strong>

                <div>
                  <b>NOVEMBER</b>
                  <span>2026</span>
                </div>
              </div>

              <span className="seal-bottom">
                TUESDAY · A NEW BEGINNING
              </span>
            </div>

            {/* Footer */}
            <div className="paper-footer">
              <div className="paper-flourish">✧ ❦ ✧</div>

              <p>
                Your gracious presence and blessings
                will make our celebration truly special.
              </p>

              <span className="paper-signature">
                WITH LOVE, ANKIT & SAKSHI
              </span>
            </div>
          </div>

          {/* Gold shimmer */}
          <div className="paper-shimmer" />
        </motion.div>
      </motion.div>

      <motion.div
        className="invitation-bottom-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <span>♡</span>
        WE CAN'T WAIT TO CELEBRATE WITH YOU
        <span>♡</span>
      </motion.div>

    </section>
  );
}
