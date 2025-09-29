import React, { useEffect, useState } from 'react';

interface VideoModalProps {
    videoUrl: string;
    isVertical: boolean;
    onClose: () => void;
}

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Spinner: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-t-green-500 border-gray-800 rounded-full animate-spin"></div>
    </div>
);

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, isVertical, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const modalContentClass = isVertical 
        ? 'w-full max-w-[340px] aspect-[9/16]' 
        : 'w-full max-w-6xl aspect-[16/9]';

    return (
        <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Player de Vídeo"
        >
            <div 
                className="relative transition-transform duration-300 ease-out transform scale-95 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`relative overflow-hidden rounded-lg shadow-2xl bg-black ${modalContentClass}`}>
                    {isLoading && <Spinner />}
                    <iframe
                        key={videoUrl}
                        src={`${videoUrl}?autoplay=1`}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setIsLoading(false)}
                    ></iframe>
                </div>
                 <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 md:-top-5 md:-right-5 w-10 h-10 bg-gray-900 border-2 border-gray-700 rounded-full text-white flex items-center justify-center hover:bg-green-500 hover:border-green-400 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 z-10"
                    aria-label="Fechar vídeo"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

                @keyframes scale-in {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default VideoModal;