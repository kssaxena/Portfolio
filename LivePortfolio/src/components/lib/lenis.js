import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export function createLenis(options = {}) {
  // Sensible defaults; override in provider if needed
  const lenis = new Lenis({
    // Two main “speed feel” controls:
    // 1) duration: ms it takes to settle after an input
    // 2) lerp: smoothing factor (0–1). If you set 'duration', leave 'lerp' undefined.
    duration: 1.2, // ~1.2s “fixed-feel” smoothing
    // lerp: 0.1,             // alternative mode; comment out if you use duration
    smoothWheel: true,
    smoothTouch: true, // virtualize touch too
    wheelMultiplier: 1.0, // scale wheel/trackpad delta (↑ = faster)
    touchMultiplier: 1.0, // scale touch delta
    normalizeWheel: true, // normalize device quirks
    syncTouch: false, // set true if you want touch to match wheel exactly
    ...options,
  });

  return lenis;
}

export function setLenis(instance) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}
