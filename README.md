# Ankit & Sakshi — Interactive Wedding Invitation

A responsive React + Vite wedding invitation with a canvas scratch-to-reveal intro, cinematic transition, Three.js flower scene, photo gallery, countdown, invitation, events, venue link and opt-in music player.

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build`.

## Personalize before publishing

1. Replace images in `public/images/` with your real photos. Keep the filenames listed below (or edit `src/data/weddingData.js`):
   - `couple.jpg`, `ankit.jpg`, `sakshi.jpg`, `memory-4.jpg`, `memory-5.jpg`, `memory-6.jpg`
2. Add your licensed wedding audio as `public/music/wedding.mp3`. Music only starts after a guest presses the music button.
3. Edit venue address, Google Maps URL, event dates/times/descriptions in `src/data/weddingData.js`.
4. Update the event list there to match your final wedding schedule.

## Notes

- Scratch interaction uses a responsive HTML canvas and reveals the invitation after roughly 45% of the overlay is cleared.
- The 3D garden is built from procedural Three.js flower geometry (not downloaded 3D rose assets). For photorealistic roses, replace the procedural bloom with licensed GLB flower models.
- Photo files and music are intentionally not fabricated or included. Add Ankit and Sakshi's actual photographs and your chosen audio.
- Google Maps currently points to a generic Jhunjhunu search until you set the exact venue.
- The scratch percentage is sampled when the pointer/touch is released; continue scratching and lift your finger/mouse to update the reveal state.
