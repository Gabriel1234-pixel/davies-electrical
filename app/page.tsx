import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhychooseUs";

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
<Gallery />

<Testimonials />
<Booking />
<Contact />
<Footer />
<WhatsApp />
    </>
  );
}