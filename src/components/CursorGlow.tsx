import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  // Ref mirrors state so the mousemove handler can read it without being
  // re-registered every time visibility changes (eliminates stale-closure
  // listener churn that caused the glow to lag/flicker).
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]); // isVisible intentionally omitted — handled via ref

  if (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed pointer-events-none z-[10] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(224,231,255,0.07)_0%,transparent_70%)] will-change-transform"
    />
  );
};

export default CursorGlow;
