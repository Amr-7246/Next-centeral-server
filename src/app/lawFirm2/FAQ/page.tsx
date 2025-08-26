"use client"
import Topper from "@/components/Topper";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import Faq from "./Faq";
import Hero from "./Hero/Hero";

export default function Page() {
  return (
    <section className="overflow-hidden ">
      <Hero/>
      <Faq />
      <div className="relative">
        <Topper
        className={''}
        direction = {"top"}
        shapeColor = {"#fff"}
        circleColor ={ "#fff"}
        iconColor = {"#000000"}
        />
        <ContactForm/>
      </div>
      <Footer/>
    </section>
  );
}
