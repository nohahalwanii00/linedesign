import { useEffect, useState } from 'react';

interface Props { onDone: () => void }

export default function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(onDone, 300); return 100; }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] bg-stone-950 flex flex-col items-center justify-center">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mb-8">
        <polygon points="30,4 56,18 56,42 30,56 4,42 4,18" stroke="#d4af7a" strokeWidth="1.5" fill="none"/>
        <rect x="20" y="14" width="8" height="32" stroke="#d4af7a" strokeWidth="1.5" fill="none"/>
        <rect x="32" y="14" width="8" height="32" stroke="#d4af7a" strokeWidth="1.5" fill="none"/>
        <rect x="23" y="18" width="2" height="24" fill="#d4af7a" opacity="0.6"/>
        <rect x="35" y="18" width="2" height="24" fill="#d4af7a" opacity="0.6"/>
      </svg>
      <div className="text-white font-light tracking-[0.4em] text-sm uppercase mb-1">Line Design</div>
      <div className="text-stone-500 text-[9px] tracking-[0.4em] uppercase mb-10">Architect Abdelrahman Khaled</div>

      <div className="w-48 h-px bg-stone-800 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-amber-400 transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="text-stone-600 text-[10px] tracking-widest mt-3">{Math.min(Math.round(progress), 100)}%</div>
    </div>
  );
}
