import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ScratchCard from './components/ScratchCard';
import CinematicTransition from './components/CinematicTransition';
import Hero from './components/Hero';
import FlowerGarden3D from './components/FlowerGarden3D';
import CoupleGallery from './components/CoupleGallery';
import InvitationCard from './components/InvitationCard';
import WeddingTimeline from './components/WeddingTimeline';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import GardenExperience from './components/GardenExperience';

import { wedding } from './data/weddingData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [entered, setEntered] = useState(false);
  const [showSite, setShowSite] = useState(false);

  const finish = useCallback(() => {
    setShowSite(true);
  }, []);

  useEffect(() => {
    if (!showSite) return;

    const ctx = gsap.context(() => {
      // Section heading and content animations
      gsap.utils
        .toArray(
          '.section-heading, .event, .invitation-paper, .venue-section'
        )
        .forEach((el) => {
          gsap.fromTo(
            el,
            {
              y: 55,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 86%',
                once: true,
              },
            }
          );
        });

      // Gallery animations
      gsap.utils.toArray('.gallery-item').forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            y: 70,
            rotate: i % 2 ? 3 : -3,
            opacity: 0,
          },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, [showSite]);

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <ScratchCard
            key="scratch"
            onContinue={() => setEntered(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {entered && !showSite && (
          <CinematicTransition onDone={finish} />
        )}
      </AnimatePresence>

      {showSite && (
        <main>
          <MusicPlayer autoStart={entered} />

          <Hero />

          <GardenExperience />

          <section className="countdown-section section-wrap">
            <span className="eyebrow">
              Counting every moment
            </span>

            <h2>
              Until our <em>forever</em>
            </h2>

            <Countdown target={wedding.dateISO} />
          </section>

  

          <InvitationCard />

          <WeddingTimeline />

          <Venue />

          <Footer />
        </main>
      )}
    </>
  );
}