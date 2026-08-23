import About from './components/About/About';
import Career from './components/Career/Career';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
    useSmoothScroll();
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Career />
            <Projects />
            <Faq />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;