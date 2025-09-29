import React from 'react';
import { ABOUT_ME_TEXT, SKILLS } from '../constants';

// Skill Icons defined as simple, clean React components
const FilmIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>
);
const SparklesIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4m14-10l-2.293-2.293a1 1 0 00-1.414 0L10 10.586l-1.707 1.707a1 1 0 000 1.414L10 16m0 0l2.293 2.293a1 1 0 001.414 0L16 15.414m6-6l-4-4" />
    </svg>
);
const ColorSwatchIcon: React.FC<{className?: string}> = (props) => (
   <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l5.728-5.728a3.75 3.75 0 000-5.304l-7.072-7.072a3.75 3.75 0 00-5.304 0L1.146 8.442a3.75 3.75 0 000 5.304l2.952 2.952s.013.013.02.02a3.75 3.75 0 005.283 0l.02-.02 2.952 2.952a3.75 3.75 0 005.304 0l5.728-5.728a3.75 3.75 0 000-5.304l-7.072-7.072a3.75 3.75 0 00-5.304 0L1.146 8.442a3.75 3.75 0 000 5.304l2.952 2.952z" />
  </svg>
);

const SKILL_ICONS: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Edição de Vídeo Profissional': FilmIcon,
  'Motion Graphics & VFX': SparklesIcon,
  'Color Grading': ColorSwatchIcon,
};


const About: React.FC = () => {

    return (
        <section id="about" className="py-24 bg-[#111111]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Sobre <span className="text-green-500">Mim</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Minha jornada e minhas especialidades no mundo do audiovisual.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-3 text-gray-300 text-lg leading-relaxed space-y-6">
                        {ABOUT_ME_TEXT.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 sticky top-28">
                            <h3 className="text-2xl font-bold text-white mb-6">Principais Habilidades</h3>
                            <ul className="space-y-5">
                                {SKILLS.map((skill) => {
                                    const Icon = SKILL_ICONS[skill.name];
                                    return (
                                        <li key={skill.name} className="flex items-center">
                                            <div className="flex-shrink-0 bg-green-500/10 text-green-400 rounded-lg p-3">
                                                {Icon && <Icon className="w-6 h-6" />}
                                            </div>
                                            <span className="ml-4 text-gray-200 font-medium text-base">{skill.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;