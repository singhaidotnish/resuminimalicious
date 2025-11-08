import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectsCarousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const projects = [
    {
      name: "neo-titanium-mp",
      image: "/assets/projects/neo-titanium-mp.png",
      description: "Monorepo scaffold for modern pipelines / MP utilities.",
      url: "https://zarir-engineer.github.io/neo-titanium-global-enery/",
      color: "#4A90E2"
    },
    {
      name: "aipyqtfylicious",
      image: "/assets/projects/aipyqtfylicious.png",
      description: "AI‑infused PyQt toolkit and sample apps.",
      url: "#",
      color: "#E24A4A"
    },
    {
      name: "varsity-audio-monorepo",
      image: "/assets/projects/varsity-audio-monorepo.png",
      description: "Varsity chapters → scrape, TTS, upload pipeline.",
      url: "https://varsity-audio-monorepo-frontend.onrender.com",
      color: "#50C878"
    },
    {
      name: "minimalgotronifylicious",
      image: "/assets/projects/minimalgotronifylicious.png",
      description: "Minimal, AI‑ready monorepo with docs & scripts.",
      url: "#",
      color: "#9B59B6"
    },
    {
      name: "hyperfotopixelicious",
      image: "/assets/projects/hyperfotopixelicious.png",
      description: "Imaging & VFX experiments, tools, and pipelines.",
      url: "#",
      color: "#F39C12"
    },
    {
      name: "newtabfirefoxylicious",
      image: "/assets/projects/newtabfirefoxylicious.jpg",
      description: "Custom new‑tab experiments for Firefox.",
      url: "https://singhaidotnish.github.io/newtabfirefoxylicious/",
      color: "#E67E22"
    },
    {
      name: "dm-mindmap",
      image: "/assets/projects/solar-system.jpg",
      description: "3D mindmap visualization tool",
      url: "#",
      color: "#1ABC9C"
    },
    {
      name: "TubeSidecarificity",
      image: "/assets/projects/tubesidecarificity.png",
      description: "YouTube sidecar tools: local ffmpeg, metadata, MP3.",
      url: "#",
      color: "#34495E"
    }
  ];

  const totalProjects = projects.length;

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, autoRotate]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setAutoRotate(false);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardStyle = (index) => {
    const diff = ((index - currentIndex + totalProjects) % totalProjects);
    const angle = (360 / totalProjects) * diff;
    const radius = 450;
    
    // Calculate position on circle
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius;
    
    // Scale and opacity based on position
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;
    
    if (diff === 0) {
      scale = 1.2;
      opacity = 1;
      zIndex = 10;
    } else if (diff === 1 || diff === totalProjects - 1) {
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
    } else if (diff === 2 || diff === totalProjects - 2) {
      scale = 0.65;
      opacity = 0.4;
      zIndex = 3;
    } else {
      scale = 0.5;
      opacity = 0.2;
      zIndex = 1;
    }

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: diff === 0 ? 'auto' : 'none'
    };
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Projects Gallery
          </h1>
          <p className="text-xl text-purple-200">
            Explore my portfolio in 3D
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center mb-12">
          {/* 3D Stage */}
          <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseEnter={() => setAutoRotate(false)}
              onMouseLeave={() => setAutoRotate(true)}
            >
              {projects.map((project, index) => {
                const style = getCardStyle(index);
                const isCenter = ((index - currentIndex + totalProjects) % totalProjects) === 0;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-600 ease-out"
                    style={{
                      ...style,
                      width: '380px',
                      height: '480px'
                    }}
                  >
                    <div 
                      className={`
                        relative w-full h-full rounded-2xl overflow-hidden
                        ${isCenter ? 'shadow-2xl ring-4 ring-purple-400' : 'shadow-xl'}
                        transition-all duration-300
                      `}
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-800">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        {isCenter && project.url !== "#" && (
                          <div className="absolute top-4 right-4">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 inline-flex"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-800" />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-6 bg-gray-900/80 backdrop-blur">
                        <h3 className="text-2xl font-bold text-white mb-3 truncate">
                          {project.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {isCenter && (
                          <div className="mt-4 flex gap-2">
                            <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur p-4 rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur p-4 rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating}
              className={`
                transition-all duration-300 rounded-full
                ${index === currentIndex 
                  ? 'w-12 h-3 bg-purple-500' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }
                disabled:cursor-not-allowed
              `}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-rotate Toggle */}
        <div className="text-center">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white rounded-full transition-all duration-200 hover:scale-105"
          >
            {autoRotate ? '⏸ Pause Auto-Rotate' : '▶ Resume Auto-Rotate'}
          </button>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8 text-white/70">
          <p className="text-lg">
            Project <span className="font-bold text-purple-400">{currentIndex + 1}</span> of <span className="font-bold">{totalProjects}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel3D;
