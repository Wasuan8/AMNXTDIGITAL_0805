'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Animate from '@/components/ui/Animate';

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
  category?: string;
}

export default function ProjectGallery({ gallery, title, category }: ProjectGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [numCols, setNumCols] = useState(2);

  // Update columns based on screen width
  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w >= 1280) setNumCols(4);
      else if (w >= 1024) setNumCols(3);
      else if (w >= 768) setNumCols(3);
      else setNumCols(2);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  // Disable scroll when lightbox is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedIdx]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % gallery.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
  };

  // Distribute images into columns (Masonry logic)
  const columns = Array.from({ length: numCols }, (_, i) => 
    gallery.map((img, idx) => ({ img, originalIdx: idx })).filter((_, idx) => idx % numCols === i)
  );

  return (
    <div className="w-full">
      {/* Masonry Grid */}
      <div className="flex gap-4 md:gap-6 items-start">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4 md:gap-6">
            {col.map((item, i) => (
              <Animate key={item.originalIdx} delay={item.originalIdx * 40} direction="up">
                <div 
                  onClick={() => setSelectedIdx(item.originalIdx)}
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-50 border border-gray-100"
                >
                  {/* Using a standard img tag here to allow natural aspect ratio flow if needed, 
                      but Next.js Image is preferred for performance. 
                      To make it masonry-friendly with Next.js Image, we use a wrapper with no fixed aspect ratio. */}
                  <div className="relative w-full h-auto">
                    <img
                      src={item.img}
                      alt={`${title} screenshot ${item.originalIdx + 1}`}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Same as before) */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {gallery.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={gallery[selectedIdx]}
                  alt={`${title} full view`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wide">
              {selectedIdx + 1} / {gallery.length} — {title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
