import Header from "@/components/Header";
import Hero from "@/components/Hero"
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white ">
      <Header />
      <Hero />
      <FirstSection  />
      <SecondSection  />
      <ThirdSection  />
      <Footer />
    </div>
  )
  }
