"use client"
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import Hero from "./Hero/Hero";

export default function Page() {
  return (
    <section className="overflow-hidden ">
      <Hero/>
      <ContactForm/>
      <Footer/>
    </section>
  );
}