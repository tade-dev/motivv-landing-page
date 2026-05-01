import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Privacy from "./components/Privacy";
import BuiltBy from "./components/BuiltBy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Feature />
      <Pricing />
      <Privacy />
      <BuiltBy />
      <Footer />
    </>
  );
}
