import Navbar from "./Componnents/Navbar";
import MainPage from "./Componnents/MainPage";
import BentoGrid from "./Componnents/BentoGrid";
import WhyUs from "./Componnents/whyUs";
import SmileSection from "./Componnents/SmileSection";
import Footer from "./Componnents/Footer";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-5 sm:p-10 ">
      <Navbar/>
      <MainPage/>
      <BentoGrid/>
      <WhyUs/>
      <SmileSection/>
      <Footer/>
    </div>
  );
}
