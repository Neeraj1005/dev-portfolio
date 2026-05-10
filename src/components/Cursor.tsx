import { useEffect, useRef } from 'react';

interface CursorPosition {
  mx: number;
  my: number;
  rx: number;
  ry: number;
}

export default function Cursor(): React.JSX.Element {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef<CursorPosition>({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMouseMove = (e: MouseEvent): void => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cursor.style.left = `${e.clientX - 6}px`;
      cursor.style.top = `${e.clientY - 6}px`;
    };

    const animateRing = (): void => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;
      ring.style.left = `${pos.current.rx - 18}px`;
      ring.style.top = `${pos.current.ry - 18}px`;
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const onEnter = (): void => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform = 'scale(1.5)';
      ring.style.borderColor = 'var(--neon2)';
    };

    const onLeave = (): void => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'scale(1)';
      ring.style.borderColor = 'var(--neon)';
    };

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animateRing);

    const addHoverListeners = (): void => {
      document.querySelectorAll<HTMLElement>('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const timer = setTimeout(addHoverListeners, 300);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
