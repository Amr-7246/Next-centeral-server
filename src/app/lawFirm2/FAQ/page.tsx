"use client"
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import Faq from "./Faq";
import Hero from "./Hero/Hero";

export default function Page() {
  return (
    <section className="overflow-hidden ">
      <Hero/>
      <Faq />
      <ContactForm/>
      <Footer/>
    </section>
  );
}
