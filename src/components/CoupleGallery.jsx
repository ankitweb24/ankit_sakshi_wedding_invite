
import React, { useState } from 'react';
import {
  motion,
  useReducedMotion
} from 'framer-motion';

import { wedding } from '../data/weddingData';
import './CoupleGallery.css';

const captions = [
  {
    number: '01',
    title: 'The First Chapter',
    subtitle: 'Where our beautiful story begins'
  },
  {
    number: '02',
    title: 'Little Moments',
    subtitle: 'The smiles that mean everything'
  },
  {
    number: '03',
    title: 'My Favourite Person',
    subtitle: 'In every lifetime, I choose you'
  },
  {
    number: '04',
    title: 'Beautiful Memories',
    subtitle: 'Every moment feels like magic'
  },
  {
    number: '05',
    title: 'Side By Side',
    subtitle: 'Together is our favourite place'
  },
  {
    number: '06',
    title: 'Forever Starts Here',
    subtitle: '24 November 2026'
  }
];

function GalleryPhoto({ src, index, reduceMotion }) {
  const [failed, setFailed] = useState(false);
  const caption = captions[index] || captions[0];

  return (
    <motion.figure
      className={`cinema-photo gallery-photo-${index + 1}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 70, scale: 0.94 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: 1.1,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -10,
              scale: 1.015,
              transition: { duration: 0.5 }
            }
      }
    >
      <div className="cinema-photo-image">
        {!failed && src ? (
          <img
            src={src}
            alt={`Ankit and Sakshi memory ${index + 1}`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="gallery-placeholder">
            <span>♡</span>
            <strong>{caption.title}</strong>
            <small>Add your photograph</small>
          </div>
        )}

        <div className="cinema-photo-overlay" />

        <div className="photo-corner photo-corner-tl">✧</div>
        <div className="photo-corner photo-corner-tr">✧</div>
        <div className="photo-corner photo-corner-bl">✧</div>
        <div className="photo-corner photo-corner-br">✧</div>

        <div className="photo-index">
          {caption.number} / 06
        </div>

        <figcaption className="cinema-photo-caption">
          <span>{caption.subtitle}</span>
          <h3>{caption.title}</h3>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function CoupleGallery() {
  const reduceMotion = useReducedMotion();

  const photos = Array.isArray(wedding.gallery)
    ? wedding.gallery.slice(0, 6)
    : [];

  return (
    <section className="cinematic-gallery" id="story">

      <div className="gallery-background-glow" />

      {/* Section heading */}
      <motion.div
        className="gallery-intro"
        initial={reduceMotion ? false : { opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="gallery-overline">
          <i /> THE ART OF US <i />
        </span>

        <h2>
          Every picture
          <br />
          <em>tells a love story.</em>
        </h2>

        <div className="gallery-heading-ornament">
          <span />
          <b>♡</b>
          <span />
        </div>

        <p>
          Six little windows into our world.
          A thousand memories, one beautiful forever.
        </p>
      </motion.div>

      {/* Editorial photo layout */}
      <div className="cinematic-gallery-grid">
        {photos.map((src, index) => (
          <GalleryPhoto
            key={`${src}-${index}`}
            src={src}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* Closing message */}
      <motion.div
        className="gallery-ending"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="gallery-ending-heart">♡</span>

        <h3>
          And this is just
          <em> the beginning.</em>
        </h3>

        <p>ANKIT JANGIR & SAKSHI · 24 NOVEMBER 2026</p>
      </motion.div>

    </section>
  );
}
