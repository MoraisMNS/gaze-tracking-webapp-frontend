import FeatureSection from "./components/FeatureSection";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero/>
      <FeatureSection/>
    </div>
  );
}

export default App;
