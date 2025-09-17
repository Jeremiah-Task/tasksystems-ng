import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Why from "@/components/Why";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Solutions />
        <About />
        <Services />
        <Why />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
