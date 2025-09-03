import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WagonTypes from "@/components/WagonTypes";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WagonTypes />
      <Statistics />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;