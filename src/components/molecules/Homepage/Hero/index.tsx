"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ThemedButton from "@/components/atoms/ThemedButton";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleLoadedData = () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setIsVideoLoaded(true);
      };
      
      const handleVideoError = () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setVideoError(true);
        setIsVideoLoaded(true); // Hide the loader
      };
      
      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('error', handleVideoError);
      
      // Fallback: if video takes too long to load, show content anyway
      timeoutRef.current = setTimeout(() => {
        setIsVideoLoaded(true);
      }, 5000); // 5 second timeout
      
      // Clean up event listeners on component unmount
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('error', handleVideoError);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, []); // Empty dependency array to run only on mount

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Loading indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-navy-DEFAULT to-navy-light z-10">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 tracking-wider drop-shadow-lg">
                MARINA PRIMA SUKSES
              </h2>
              <div className="w-16 h-16 border-4 border-t-transparent border-gold rounded-full animate-spin mb-6"></div>
              <p className="text-gold text-lg">Loading ocean view...</p>
            </div>
          </div>
        )}
        
        {/* Fallback image if video failed */}
        {videoError && (
          <Image
            src="/images/hero.jpg"
            alt="Ocean Background"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        )}
        
        {/* Video background */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/videos/hero-video-background.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-navy-DEFAULT/60"></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="bg-navy-DEFAULT/85 border-2 border-gold/70 rounded-2xl shadow-2xl p-12 backdrop-blur-sm">
          {/* Main title with gold accents */}
          <div className="mb-14">
            <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider relative inline-block">
              <span className="relative z-20 text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Marina Prima Sukses</span>
            </h1>
            <div className="w-64 h-1 bg-gold mx-auto mt-8"></div>
          </div>
          
          {/* Buttons inside container */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
            <Link href="/about">
              <ThemedButton variant="primary" size="xl" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                COMPANY
              </ThemedButton>
            </Link>
            
            <Link href="/candidate">
              <ThemedButton variant="primary" size="xl" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                APPLY AS CANDIDATE
              </ThemedButton>
            </Link>
            
            <Link href="/contact">
              <ThemedButton variant="primary" size="xl" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                CONTACT US
              </ThemedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
