import { motion } from "framer-motion";
import "./Hero.css"; 

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-24">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 orb-1"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-500/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 orb-2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 orb-3"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        {/* ---------- Left Section ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full text-sm font-medium text-blue-300 glass-tag">
            Next-Generation Eye Tracking Technology
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 hero-title">
            Track Every Gaze.{" "}
            <span className="hero-gradient">
              Understand Every Vision.
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed hero-text">
            Look Track Vision uses AI-powered eye tracking to decode human
            attention. Visualize gaze patterns, analyze behavior, and uncover
            how users truly see the world — in real time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="primary-btn">
              Download Software
            </button>
            <button className="secondary-btn">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            <div>
              <div className="text-3xl font-bold text-cyan-400">98.5%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">156ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">2.8K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
          </div>
        </motion.div>

        {/* ---------- Right Section ---------- */}
        {/* Future space for dashboard mockup */}
      </div>
    </section>
  );
}

export default Hero;
