import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About/About';
import Career from './components/Career/Career';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './components/NotFound/NotFound';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
    useSmoothScroll();
    const location = useLocation();

    useEffect(() => {
        const isNotFound = location.pathname !== '/';

        if (isNotFound) {
            const loader = document.getElementById('initial-loader');
            if (loader && loader.parentNode) {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }
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
                            <Career />
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