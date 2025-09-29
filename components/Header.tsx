import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'Sobre Mim' },
        { href: '#portfolio', label: 'Portfólio' },
        { href: '#contact', label: 'Contato' },
    ];

    const MenuIcon = () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    );

    const CloseIcon = () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
    
    const navLinkClasses = "text-gray-300 hover:text-green-400 font-medium transition-colors duration-300";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="text-2xl font-bold text-white hover:text-green-400 transition-colors duration-300">
                        Marcelo Gomes
                    </a>
                    
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className={navLinkClasses}>{link.label}</a>
                        ))}
                    </nav>
                    
                    <div className="md:hidden">
                         <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-300 hover:text-green-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <nav className="flex flex-col items-center space-y-6 py-8">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setIsMenuOpen(false)} 
                            className={`${navLinkClasses} text-xl`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;