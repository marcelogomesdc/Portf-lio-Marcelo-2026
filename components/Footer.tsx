import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-900/50">
            <div className="container mx-auto px-4 py-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Marcelo Gomes. Todos os direitos reservados.</p>
                 <p className="text-sm mt-2">
                    Desenvolvido com foco na performance e design.
                </p>
            </div>
        </footer>
    );
};

export default Footer;