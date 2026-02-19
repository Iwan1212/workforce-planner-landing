import React, { useState, useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Injected CSS -- keyframes, scroll animation classes, smooth scroll
// ---------------------------------------------------------------------------

export const INJECTED_STYLES = `
html {
  scroll-behavior: smooth;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

@keyframes gridFade {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.06; }
}

.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-grid-fade {
  animation: gridFade 8s ease-in-out infinite;
}

.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-dot-pattern {
  background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
}

.stagger-1 { transition-delay: 100ms !important; }
.stagger-2 { transition-delay: 200ms !important; }
.stagger-3 { transition-delay: 300ms !important; }
.stagger-4 { transition-delay: 400ms !important; }
.stagger-5 { transition-delay: 500ms !important; }
.stagger-6 { transition-delay: 600ms !important; }
`;

// ---------------------------------------------------------------------------
// Custom Hook: useScrollAnimation
// ---------------------------------------------------------------------------

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
