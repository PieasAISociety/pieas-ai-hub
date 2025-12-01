import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

interface EventGalleryProps {
  images: { url: string; title: string; date: string }[];
}

export const EventGallery = ({ images }: EventGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

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

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="font-orbitron font-bold text-white mb-1">{image.title}</h4>
                      <p className="text-sm text-white/80">{image.date}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {images.length > 3 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border-primary/50 hover:bg-primary/20 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border-primary/50 hover:bg-primary/20 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="font-orbitron font-bold text-white text-xl mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-white/80">{images[selectedImage].date}</p>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
