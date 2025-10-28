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
          <Route path="/attention-analysis" element={<AttentionAnalysis />} />
          <Route path="/realtime-insights" element={<RealTimeInsights />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;