import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { VERTICAL_VIDEOS, HORIZONTAL_VIDEOS } from '../constants';

type VideoCategory = 'vertical' | 'horizontal';

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<VideoCategory>('vertical');

    const videosToShow = activeTab === 'vertical' ? VERTICAL_VIDEOS : HORIZONTAL_VIDEOS;
    const isVertical = activeTab === 'vertical';

    const gridClasses = isVertical
        ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8";

    const TabButton: React.FC<{ category: VideoCategory, label: string }> = ({ category, label }) => (
        <button
            onClick={() => setActiveTab(category)}
            className={`px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black ${
                activeTab === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
             role="tab"
             aria-selected={activeTab === category}
        >
            {label}
        </button>
    );

    return (
        <section id="portfolio" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Meu <span className="text-green-500">Portfólio</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">Uma seleção dos meus melhores trabalhos.</p>
                </div>

                <div className="flex justify-center items-center space-x-4 mb-12" role="tablist" aria-label="Categorias de Vídeo">
                    <TabButton category="vertical" label="Vídeos Verticais" />
                    <TabButton category="horizontal" label="Vídeos Horizontais" />
                </div>

                <div className={`grid ${gridClasses}`}>
                    {videosToShow.map(video => (
                        <VideoCard 
                            key={video.id} 
                            video={video} 
                            isVertical={isVertical} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;