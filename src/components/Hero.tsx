import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/2325d1eb-09fb-480f-9614-31ceb6bc32e0/files/1ceff5d3-ffd9-4b95-87c3-84b5bb73a4f8.jpg"
          alt="Звёздное небо"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ВАШЕ НЕБО
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Карта звёздного неба точно такой, какой она была в вашу особенную дату — для печати и подарка
        </p>
        <button className="bg-white text-black border border-white px-8 py-3 text-sm transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer uppercase tracking-wide">
          Создать карту
        </button>
      </div>
    </div>
  );
}