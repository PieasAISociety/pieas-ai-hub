import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventGalleryProps {
  images: { url: string; title: string; date: string }[];
}

export const EventGallery = ({ images }: EventGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const showPrevImage = () => {
    setSelectedImage((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setSelectedImage((prev) => (prev === null ? null : (prev + 1) % images.length));
  };

  // Calculate total width of one set of images (width + gap)
  const setWidth = (350 + 24) * images.length;
  // Duplicate images for seamless marquee
  const marqueeImages = [...images, ...images, ...images];

  return (
    <>
      <div className="relative overflow-hidden group py-10">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 cursor-pointer"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
          animate={{ x: [0, -setWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: images.length * 10, // Slower: 60s for 6 images
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] relative aspect-[4/3] rounded-xl overflow-hidden group/item border border-white/5"
              onClick={() => openLightbox(index % images.length)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                  <h4 className="font-oxanium font-bold text-white text-lg mb-1">{image.title}</h4>
                  <p className="font-rajdhani text-sm text-primary font-semibold">{image.date}</p>
                </div>
              </div>

              {/* Animated corner border */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-primary/0 group-hover/item:w-8 group-hover/item:h-8 group-hover/item:border-primary/50 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-primary/0 group-hover/item:w-8 group-hover/item:h-8 group-hover/item:border-primary/50 transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full w-12 h-12"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full w-16 h-16 hidden md:flex"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
            >
              <ChevronLeft className="h-10 w-10" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full w-16 h-16 hidden md:flex"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
            >
              <ChevronRight className="h-10 w-10" />
            </Button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative max-w-7xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl shadow-primary/20 border border-white/10"
                />
              </div>
              <div className="mt-8 text-center max-w-2xl">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-oxanium font-bold text-white text-2xl md:text-3xl mb-2"
                >
                  {images[selectedImage].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-rajdhani text-primary font-bold tracking-widest uppercase"
                >
                  {images[selectedImage].date}
                </motion.p>
              </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 font-mono text-sm tracking-widest">
              {String(selectedImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
