import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}
