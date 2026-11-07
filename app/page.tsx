import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  Education,
  Athletics,
  Record,
  Research,
  Leadership,
  International,
  Skills,
} from "@/components/Content";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Education />
        <Athletics />
        <Record />
        <Research />
        <Leadership />
        <International />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
