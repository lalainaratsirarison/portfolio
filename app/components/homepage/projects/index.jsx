"use client";

import { projectsData } from '@/utils/data/projects-data';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa6';
import { FiX } from 'react-icons/fi';
import { useState, useRef, useEffect, useCallback } from 'react';

// ─── Project Detail Modal ────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!project) return null;
  const { details } = project;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] rounded-xl border border-[#3b82f633] bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl shadow-blue-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Header */}
        <div className="relative">
          {/* Project image banner */}
          <div className="h-48 overflow-hidden">
            <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0f172a]/80 border border-[#1e293b] text-gray-400 hover:text-white hover:border-sky-400/30 transition-all duration-200"
          >
            <FiX size={18} />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono px-2 py-1 rounded bg-sky-400/10 text-sky-400 border border-sky-400/20">
                {details?.role}
              </span>
              <span className="text-xs font-mono text-gray-500">
                {details?.year}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-192px)] p-6 custom-scrollbar">
          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {details?.fullDescription}
          </p>

          {/* Context */}
          {details?.context && (
            <div className="mb-6 p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
              <p className="text-xs text-sky-400 font-mono mb-1">// Context</p>
              <p className="text-sm text-slate-400">{details.context}</p>
            </div>
          )}

          {/* Features */}
          {details?.features && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-sky-400 mt-1 flex-shrink-0">›</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {details?.technologies && (
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#1e293b] border border-[#334155] text-slate-300 hover:border-sky-400/30 hover:text-sky-400 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom gradient line */}
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-600 to-sky-400"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #38bdf8; }
      `}</style>
    </div>
  );
};

// ─── Project Card ────────────────────────────────────────────────
const ProjectCard = ({ item, onViewDetails }) => {
  return (
    <div className="group relative flex-shrink-0 w-[350px] sm:w-[420px] rounded-xl border border-[#1e293b] bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden transition-all duration-500 hover:border-sky-400/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]">
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-600 to-sky-400"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 to-transparent"></div>
      </div>

      {/* Image preview */}
      <div className="relative h-[200px] overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-400/5" />
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-white mb-2 line-clamp-1 group-hover:text-sky-400 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2 mb-5 leading-relaxed">
          {item.des}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Tech icons */}
          <div className="flex items-center">
            {item.skills.map((skill, index) => {
              const icon = skillsImage(skill);
              return (
                <div
                  key={index}
                  className="border border-white/[0.1] rounded-full bg-[#0f172a] w-8 h-8 flex justify-center items-center"
                  style={{ transform: `translateX(-${5 * index}px)` }}
                  title={skill}
                >
                  {icon && <Image src={icon} alt={skill} width={20} height={20} className="p-0.5" />}
                </div>
              );
            })}
          </div>

          {/* View details button */}
          <button
            onClick={(e) => { e.stopPropagation(); onViewDetails(item); }}
            className="flex items-center gap-1.5 text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 hover:text-white cursor-pointer"
          >
            <span>View Details</span>
            <FaLocationArrow size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Projects Section ────────────────────────────────────────────
const Projects = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Seamless infinite auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isHovered) return;

    const interval = setInterval(() => {
      // Each "set" of cards occupies 1/3 of total scrollWidth
      const oneSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= oneSetWidth * 2) {
        // Silently reset to equivalent position in first set
        container.scrollLeft = container.scrollLeft - oneSetWidth;
      }
      container.scrollLeft += 1;
    }, 25);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Drag-to-scroll
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStart.current.x) * 1.5;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Wrap scroll position on manual scroll (wheel / drag)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const oneSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= oneSetWidth * 2) {
        container.scrollLeft -= oneSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += oneSetWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-sky-400 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1e293b] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1e293b]"></span>
        </div>
      </div>

      <div className="pt-24 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-24 bottom-0 w-16 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-24 bottom-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {[...projectsData, ...projectsData, ...projectsData].map((item, index) => (
            <ProjectCard
              key={`${item.id}-${index}`}
              item={item}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;