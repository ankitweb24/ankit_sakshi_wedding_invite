import React,{ useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScratchCard({ onContinue }) {
  const canvasRef=useRef(null), wrapRef=useRef(null), drawing=useRef(false), [revealed,setRevealed]=useState(false), [percent,setPercent]=useState(0);
  useEffect(()=>{
    const canvas=canvasRef.current, ctx=canvas.getContext('2d');
    const resize=()=>{ const r=canvas.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,2); canvas.width=r.width*dpr; canvas.height=r.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); const g=ctx.createLinearGradient(0,0,r.width,r.height); g.addColorStop(0,'#f4e5bd');g.addColorStop(.45,'#c9a45f');g.addColorStop(1,'#ead6a5');ctx.fillStyle=g;ctx.fillRect(0,0,r.width,r.height); ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=1; for(let i=0;i<r.width;i+=18){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,r.height);ctx.stroke();} ctx.fillStyle='rgba(104,76,35,.78)';ctx.textAlign='center';ctx.font='500 12px Poppins';ctx.fillText('✧  GENTLY SCRATCH TO REVEAL  ✧',r.width/2,r.height/2); };
    resize(); const observer=new ResizeObserver(resize);observer.observe(canvas);return()=>observer.disconnect();
  },[]);
  const point=e=>{const r=canvasRef.current.getBoundingClientRect();const t=e.touches?.[0]||e;return{x:t.clientX-r.left,y:t.clientY-r.top};};
  const scratch=e=>{if(!drawing.current)return; e.preventDefault();const p=point(e),ctx=canvasRef.current.getContext('2d');ctx.globalCompositeOperation='destination-out';ctx.beginPath();ctx.arc(p.x,p.y,25,0,Math.PI*2);ctx.fill();};
  const start=e=>{drawing.current=true;scratch(e)};const stop=()=>{drawing.current=false;const c=canvasRef.current,ctx=c.getContext('2d'),data=ctx.getImageData(0,0,c.width,c.height).data;let clear=0;for(let i=3;i<data.length;i+=4)if(data[i]<30)clear++;const p=clear/(data.length/4)*100;setPercent(p);if(p>45)setRevealed(true);};
  return <section className="scratch-screen" ref={wrapRef}><div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="scratch-heading"><span className="eyebrow">A little magic, just for you</span><h1>Something beautiful<br/><em>is waiting to be revealed</em></h1><p>Scratch the golden surface to discover our special day</p></div>
    <div className="scratch-card-shell"><div className="scratch-card"><div className="scratch-inner"><span className="mini-ornament">✧ ❦ ✧</span><span className="eyebrow">An invitation to our forever</span><div className="revealed-date">24 <small>NOVEMBER</small> 2026</div><div className="couple-script">Ankit <i>&</i> Sakshi</div><span className="mini-ornament">✧ ❦ ✧</span></div><canvas ref={canvasRef} onPointerDown={start} onPointerMove={scratch} onPointerUp={stop} onPointerCancel={stop} onPointerLeave={stop} /></div></div>
    <div className="scratch-bottom">{revealed?<motion.button className="gold-button" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} onClick={onContinue}>Continue to invitation <span>→</span></motion.button>:<span className="scratch-hint">{Math.min(45,Math.round(percent))}% revealed · Keep scratching</span>}</div>
    <div className="edge-flower flower-left">❀</div><div className="edge-flower flower-right">❀</div>
  </section>;
}
