import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhychooseUs";
import Projects from "@/components/Projects";
import Booking from "@/components/Booking";
import WhatsApp from "@/components/WhatsApp";
export default function Home() {
  return (
    <>
      <Navbar />
<div className="pt-20">
  <Hero />
</div>
      <About />
<WhyChooseUs />
<Services />
<Projects />
<Testimonials />
<Booking />
<Contact />
<Footer />
<WhatsApp />
    </>
  );
}