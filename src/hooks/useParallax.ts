import { useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return y;
};
