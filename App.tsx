import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-[#0A0A0A] text-gray-200">
            <main>
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;