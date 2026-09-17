import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About/About';
import Processo from './components/Processo/Processo';
import Cultura from './components/Cultura/Cultura';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './components/NotFound/NotFound';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { hideInitialLoader } from './utils/initialLoader';

function App() {
    useSmoothScroll();
    const location = useLocation();

    useEffect(() => {
        const isNotFound = location.pathname !== '/';

        if (isNotFound) {
            hideInitialLoader(500, 500);
        }
    }, [location]);

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <About />
                            <Cultura />
                            <Processo />
                            <Projects />
                            <Faq />
                        </>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;