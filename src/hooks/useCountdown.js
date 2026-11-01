import { useEffect, useState } from 'react';
export default function useCountdown(target) {
  const calculate = () => { const diff = Math.max(0, new Date(target).getTime() - Date.now()); return { days: Math.floor(diff/86400000), hours: Math.floor(diff/3600000)%24, minutes: Math.floor(diff/60000)%60, seconds: Math.floor(diff/1000)%60, done: diff===0 }; };
  const [time,setTime] = useState(calculate);
  useEffect(() => { const id=setInterval(()=>setTime(calculate()),1000); return ()=>clearInterval(id); },[target]);
  return time;
}
