import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const slideshowItems = [
  {
    text: "The vibe",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop"
    ]
  },
  {
    text: "Professional closer",
    images: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
    ]
  },
  {
    text: "The only chance",
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1920&auto=format&fit=crop"
    ]
  }
];

const sections = [
  {
    isSlideshow: true,
    items: [
      {
        title: "Keep talking for",
        reverse: false
      }
    ]
  },
  {
    isSlideshow: false,
    items: [
      {
        title: "Join group discussions.",
        description: "Create rooms where multiple people and AI agents can brainstorm, debate, or just hang out together. The ultimate collaborative experience.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920&auto=format&fit=crop",
        reverse: true
      },
      {
        title: "Available on all your devices.",
        description: "Practice anywhere, anytime. Your safe space for conversation is always just a tap away, helping you prepare for the real world on your own terms.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop",
        reverse: false
      }
    ]
  }
];

export default function Features() {
  const [[slideIndex, direction], setSlide] = useState([0, 0]);

  const setSlideIndex = (newIndex: number) => {
    setSlide([newIndex, newIndex > slideIndex ? 1 : -1]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (slideIndex + 1) % slideshowItems.length;
      setSlide([nextIndex, 1]);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <section id="features" className="bg-black">
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`border-t-8 border-[#222] w-full ${section.isSlideshow ? 'min-h-[80vh] pt-8 md:pt-12 pb-24 md:pb-32' : 'min-h-screen py-24 md:py-32'} flex flex-col justify-center gap-24 md:gap-48 overflow-hidden`}
        >
          {section.items.map((item, itemIdx) => (
            <div key={itemIdx} className={`container mx-auto px-6 flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${section.isSlideshow ? 'items-stretch' : 'items-center'} gap-12 w-full`}>
              <div className={`${section.isSlideshow ? 'w-full' : 'flex-1'} text-center md:text-left`}>
                <div className={`${section.isSlideshow ? 'flex flex-col items-start justify-center min-h-[20vh] mb-8' : ''}`}>
                  <div className="w-full max-w-[1408px] text-left">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`${section.isSlideshow ? 'text-4xl md:text-7xl' : 'text-3xl md:text-5xl'} font-display font-bold text-white mb-6`}
                    >
                      {item.title}
                    </motion.h2>
                    
                    {section.isSlideshow ? (
                      <div className="flex flex-wrap justify-start items-center gap-x-8 gap-y-4 text-white/40 font-medium text-4xl md:text-5xl">
                        {slideshowItems.map((sItem, i) => (
                          <div key={i} className="flex items-center">
                            <button 
                              onClick={() => setSlideIndex(i)}
                              className={`transition-all duration-300 hover:text-white/70 ${
                                slideIndex === i ? "text-white" : ""
                              }`}
                            >
                              {sItem.text}
                            </button>
                            {i < slideshowItems.length - 1 && <span className="ml-4 text-white/20">•</span>}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>
                </div>

                {section.isSlideshow && (
                  <div className="w-full h-[38vh] flex justify-start items-end overflow-hidden">
                    <AnimatePresence mode="popLayout" custom={direction}>
                      <motion.div 
                        key={slideIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                        className="flex justify-start items-stretch gap-4 h-full w-full max-w-[1126px]"
                      >
                        {slideshowItems[slideIndex].images.map((img, imgIdx) => (
                          <div 
                            key={imgIdx}
                            className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] h-full shrink-0 ${
                              imgIdx === 1 ? 'aspect-[9/16]' : 'aspect-[4/3]'
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`Slide ${slideIndex} Image ${imgIdx}`} 
                              className="absolute inset-0 w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {!section.isSlideshow && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-[#111]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
