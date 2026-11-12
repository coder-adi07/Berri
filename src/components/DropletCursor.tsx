import React, { useEffect, useState } from 'react';

export const DropletCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer') ||
          target.getAttribute('role') === 'button';
        setIsPointer(!!isClickable);
      }

      // Add trail point every few moves
      setTrail(prev => [
        { x: clientX, y: clientY, id: Date.now() + Math.random() },
        ...prev.slice(0, 5)
      ]);
    };

    const handleClick = (e: MouseEvent) => {
      setRipples(prev => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
      setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 700);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Click ripples */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full border border-berri-cyan/60 animate-ping opacity-75"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            animationDuration: '650ms'
          }}
        />
      ))}

      {/* Droplet Trail */}
      {trail.map((t, idx) => (
        <span
          key={t.id}
          className="absolute rounded-full bg-berri-teal/30 blur-[1px] transition-opacity duration-500"
          style={{
            left: t.x - (3 - idx * 0.4),
            top: t.y - (3 - idx * 0.4),
            width: Math.max(2, 6 - idx),
            height: Math.max(2, 6 - idx),
            opacity: 0.4 - idx * 0.07
          }}
        />
      ))}

      {/* Main Droplet Cursor */}
      <div
        className="absolute transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ${
            isPointer
              ? 'w-10 h-10 border-berri-teal bg-berri-teal/15 shadow-[0_0_15px_rgba(0,168,150,0.35)] scale-110'
              : 'w-5 h-5 border-berri-blue/40 bg-white/40 shadow-sm backdrop-blur-[2px]'
          }`}
        >
          {/* Inner liquid dot */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
              isPointer ? 'w-2 h-2 bg-berri-teal' : 'w-1.5 h-1.5 bg-berri-royal'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

