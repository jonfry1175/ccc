import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-wider relative inline-block ${light ? 'text-white' : 'text-color1'}`}>
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 transform scale-x-100"></span>
      </h2>
      
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${
          light 
            ? 'text-white bg-navy-DEFAULT/50 p-3 rounded-md shadow-md' 
            : 'text-color1 font-medium'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
} 