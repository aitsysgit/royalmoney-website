import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Cards from '../../components/Cards';
import Info from '../../components/Info';
import Steps from '../../components/Steps';
import Screenshots from '../../components/Screenshots';
import Download from '../../components/Download';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <>
 
      <main>
        {/* Your main content */}
        <Navbar />
      <Hero/>
      <Cards/>
      <Info/>
      <Steps/>
      <Screenshots/>
      <Download/>
      <Contact/>
      <Footer/>
      </main>
    </>
  );
}
