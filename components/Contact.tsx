import React from 'react';

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


const Contact: React.FC = () => {

    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/marcelo.g.costa.5/', Icon: FacebookIcon },
        { name: 'Instagram', url: 'https://www.instagram.com/marcelogomesdc/', Icon: InstagramIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marcelo-gomes-da-costa-85b387237/', Icon: LinkedinIcon },
    ];

    return (
        <section id="contact" className="py-24 bg-[#111111]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Vamos <span className="text-green-500">Trabalhar Juntos?</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-400">
                        Estou disponível para novos projetos, freelancers e parcerias. Se você tem uma ideia e precisa de um editor comprometido com a qualidade, encontre-me nas redes sociais.
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
            </div>
        </section>
    );
};

export default Contact;