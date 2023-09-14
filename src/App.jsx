import "./App.css";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
