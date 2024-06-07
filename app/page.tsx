import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar";
import { HeroSection1 } from "./components/HeroSection1";
import { HeroSection2 } from "./components/HeroSection2";
import { TryNow } from "./components/TryNow";
import HeroSection3 from "./components/HeroSection3";
import HeroSection4 from "./components/HeroSection4";
import HeroSection5 from "./components/HeroSection5";
import TrustAndSafetyCard from "./components/TrustAndSafetyCard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <HeroSection1 />
      <TryNow />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4/>
      <HeroSection5 />
      <TrustAndSafetyCard />
      <FAQ />
      <Footer/>
    </main>
  );
}
