import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Netflix-style overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
          alt="People Interacting" 
          className="w-full h-full object-cover opacity-30 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        >
          Talk Smarter, Together
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8 font-medium"
        >
          Experience the future of human-AI connection. Anytime, anywhere.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-lg text-white/90">
            Ready to start? Enter your email to create or restart your membership.
          </p>
          
          <div className="flex flex-col md:flex-row items-stretch gap-2 w-full max-w-2xl">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow px-4 py-4 bg-black/40 border border-white/30 rounded text-white focus:outline-none focus:ring-2 focus:ring-preberry-600 transition-all backdrop-blur-sm"
            />
            <button className="px-8 py-4 bg-preberry-600 text-white text-xl font-bold rounded flex items-center justify-center gap-2 hover:bg-preberry-700 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              Get Started
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
