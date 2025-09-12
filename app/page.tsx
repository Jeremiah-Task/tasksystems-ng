import Home from "@/components/Home";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Partners />
        <Solutions />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
