import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
    </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.902 4.902 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
    </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
    </svg>
);

const Hero: React.FC = () => {

    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/marcelo.g.costa.5/', Icon: FacebookIcon },
        { name: 'Instagram', url: 'https://www.instagram.com/marcelogomesdc/', Icon: InstagramIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marcelo-gomes-da-costa-85b387237/', Icon: LinkedinIcon },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-10"></div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-green-900 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-green-900 rounded-full filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
            </div>
            
            <div className="relative z-20 px-4">
                <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="Marcelo Gomes" 
                    className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-green-500/50 shadow-2xl"
                />
                <h1 className="font-montserrat text-5xl md:text-7xl font-normal text-white tracking-tight leading-tight">
                    Marcelo Gomes
                </h1>
                <p className="mt-4 text-lg md:text-xl text-green-400 font-bold tracking-widest uppercase">
                    Editor de Vídeo
                </p>
                <div className="mt-12 flex justify-center items-center gap-8">
                    {socialLinks.map(({ name, url, Icon }) => (
                        <a 
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Meu perfil no ${name}`}
                            className="text-gray-400 hover:text-green-500 transition-transform duration-300 transform hover:scale-110"
                        >
                            <Icon className="w-8 h-8" />
                        </a>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes pulse-slow {
                    50% { transform: scale(1.2) rotate(15deg); opacity: 0.7; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-4000 {
                    animation-delay: -6s;
                }
            `}</style>
        </section>
    );
};

export default Hero;