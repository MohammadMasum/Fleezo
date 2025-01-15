import Image from "next/image";
import Banner from "@/app/components/Banner/Banner";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import Brand from "./components/Brand/Brand";
import Pricing from "./components/Pricing/Pricing";
import Faq from "./components/Faq/Faq";
import ContactUs from "./components/ContactUs/ContactUs";
export default function Home() {
  return (
    <>
      <Banner />
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <Brand/>
      <Pricing/>
      <Faq/>
      <ContactUs/>
    </>
  );
}
