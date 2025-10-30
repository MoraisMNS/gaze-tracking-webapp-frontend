import Benefits from "./components/Benefits";
import CompatibleApps from "./components/CompatibleApps";
import EyeTrackingShowcase from "./components/EyeTrackingShowCase";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileAppSection from "./components/MobileAppSection";
import Testimonials from "./components/Testimonials";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GazeTracking from "./pages/GazeTracking";
import AttentionAnalysis from "./pages/AttentionAnalysis";
import RealTimeInsights from "./pages/RealTimeInsights";
import VoiceIntegration from "./pages/VoiceIntegration";
import CaseStudies from "./pages/CaseStudies";
import ComputerApplication from "./pages/ComputerApplication";
import BlinkDetection from "./pages/BlinkDetection";
import CalibrationSystem from "./pages/CalibrationSystem";
import HybridPrediction from "./pages/HybridPrediction";
import Documentation from "./pages/Documentation";
import Team from "./pages/Team";

function Home() {
  return (
    <>
      <Hero/>
      <FeatureSection/>
      <Benefits/>
      <EyeTrackingShowcase/>
      <CompatibleApps/>
      <Testimonials/>
      <MobileAppSection/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gaze-tracking" element={<GazeTracking />} />
          {/*<Route path="/attention-analysis" element={<AttentionAnalysis />} />*/}
          <Route path="/blink-detection" element={<BlinkDetection />} />
          <Route path="/calibration-system" element={<CalibrationSystem />} />
          <Route path="/hybrid-prediction" element={<HybridPrediction />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/team" element={<Team />} />
          <Route path="/realtime-insights" element={<RealTimeInsights />} />
          <Route path="/voice-integration" element={<VoiceIntegration />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/application-control" element={<ComputerApplication />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;