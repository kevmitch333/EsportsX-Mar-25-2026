import React, { useState, useEffect } from 'react';

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let raf: number;
    const followMouse = () => {
      setCursorPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.14,
        y: prev.y + (mousePos.y - prev.y) * 0.14,
      }));
      raf = requestAnimationFrame(followMouse);
    };
    raf = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(raf);
  }, [mousePos]);

  return (
    <>
      <div
        className="fixed w-2.5 h-2.5 bg-brand-green rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height] duration-150 hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div
        className="fixed w-9 h-9 border border-brand-green/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
    </>
  );
}
