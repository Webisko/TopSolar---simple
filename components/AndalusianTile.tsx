import React from 'react';

interface TileProps {
  className?: string;
}

export const AndalusianTile: React.FC<TileProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center opacity-20 ${className}`}>
        {/* Abstract representation of a geometric Andalusian tile pattern */}
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-andalusia-blue">
            <rect x="0" y="0" width="100" height="100" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
            <path d="M22 22 L78 78 M78 22 L22 78" stroke="currentColor" strokeWidth="2" />
            <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="2" />
        </svg>
    </div>
  );
};

export const TileDivider: React.FC = () => {
    return (
        <div className="flex overflow-hidden w-full py-4 space-x-4 justify-center">
            {[...Array(10)].map((_, i) => (
                <AndalusianTile key={i} className="w-12 h-12 shrink-0" />
            ))}
        </div>
    )
}