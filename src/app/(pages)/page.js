import MainPage from "../components/Landingpage/MainPage";
import About from "../components/Landingpage/About";
import Customized from "../components/Landingpage/Customized";
import Automate from "../components/Landingpage/Automate";
import Testimonial from "../components/Landingpage/Testimonial";
import Pricing from "../components/Landingpage/Pricing";
import Faq from "../components/Landingpage/Faq";
import Footer from "../components/Landingpage/Footer";
import Today from "../components/Landingpage/Today";

export default function Home() {
  return (
    <main className="">
      {/* <Banner /> */}
      <MainPage/>
      <About/>
      <Customized/>
      <Automate />
      <Testimonial/>
      <Pricing/>
      <Faq/>
      <Today/>
      <Footer/>
    </main>
  );
}
