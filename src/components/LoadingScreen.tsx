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
     <img src="/logoo.png" alt="Line Design Logo" className="shrink-0" style={{ width: '60px', height: '60px' }} />
      <div className="text-white font-light tracking-[0.4em] text-sm uppercase mb-1">Line Design</div>
      <div className="text-stone-500 text-[9px] tracking-[0.4em] uppercase mb-10">Architect Abdelrahman Khaled</div>

      <div className="relative w-48 h-px overflow-hidden bg-stone-800">
        <div
          className="absolute inset-y-0 left-0 transition-all duration-150 bg-amber-400"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="text-stone-600 text-[10px] tracking-widest mt-3">{Math.min(Math.round(progress), 100)}%</div>
    </div>
  );
}
