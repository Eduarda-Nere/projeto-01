import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Process from './components/Process/Process';
import Destaques from './components/Destaques/Destaques';
import ServicosCarrossel from './components/ServicosCarrossel/ServicosCarrossel';
import Projetos from './components/Projetos/Projetos';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Process />
      <Destaques />
      <ServicosCarrossel />
      <Projetos />
      <Faq />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;