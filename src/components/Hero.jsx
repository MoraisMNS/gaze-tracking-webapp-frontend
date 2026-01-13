import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

// Put the optimized video in src/assets/
import introVideo from "../assets/Application_intro_1.mp4"; 
// If your file is still Application_intro.mp4, change to that.

function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Only attach video src when needed (prevents downloading early)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const downloadApplicationZip = () => {
    const fileId = "1NDpwmpfJXvc7j9iEDgKF6uozYnBhzyCQ";
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.href = directUrl;
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = entry.isIntersecting;

        setIsInView(visible);

        // Start loading video when hero is close to viewport
        if (visible) setShouldLoadVideo(true);
      },
      {
        root: null,
        // Start loading a bit before it becomes visible
        rootMargin: "200px 0px",
        threshold: 0.15,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      // Try to play when visible
      const playPromise = video.play();
      // Avoid "Unhandled Promise Rejection" in some browsers
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      // Pause when off-screen (saves CPU/GPU)
      video.pause();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative overflow-hidden text-white pt-32 pb-24"
    >
      {/* Background Video (only loads when shouldLoadVideo === true) */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        // No src until it should load -> prevents downloading early
        src={shouldLoadVideo ? introVideo : undefined}
      />

      {/* 0.5 overlay layer */}
      <div className="hero-overlay" />

      {/* Optional floating orbs (can be heavy on low-end devices) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 orb-1" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-500/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 orb-2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 orb-3" />

      <div className="hero-content relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full text-sm font-medium text-blue-300 glass-tag">
            Next-Generation Eye Tracking Technology
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 hero-title">
            Track Every Gaze.{" "}
            <span className="hero-gradient">Understand Every Vision.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed hero-text">
            Look Track Vision uses AI-powered gaze tracking to enable real-time,
            hands-free human–computer interaction. By interpreting eye movements,
            blinks, and head pose through a standard webcam, it translates user
            intent into seamless computer control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="primary-btn" onClick={downloadApplicationZip}>
              Download
            </button>
            <button className="secondary-btn">Learn More</button>
          </div>

          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            <div>
              <div className="text-3xl font-bold text-cyan-400">95%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
