import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
    video: Video;
    isVertical: boolean;
}

const PlayIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const VideoCard: React.FC<VideoCardProps> = ({ video, isVertical }) => {
    const aspectRatioClass = isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]';

    return (
        <a
            href={video.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block relative rounded-lg overflow-hidden cursor-pointer bg-gray-900 shadow-lg ${aspectRatioClass} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20`}
            aria-label={`Abrir vídeo em nova aba: ${video.title}`}
        >
            <img 
                src={video.thumbnailUrl} 
                alt={`Thumbnail para ${video.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center p-4">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-black/40 backdrop-blur-sm border-2 border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:border-white">
                    <PlayIcon className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white text-sm font-semibold truncate transition-colors duration-300 group-hover:text-green-300">
                    {video.title}
                </h4>
            </div>
        </a>
    );
};

export default VideoCard;