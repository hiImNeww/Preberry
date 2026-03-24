import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-preberry-600 rounded-xl flex items-center justify-center shadow-lg shadow-preberry-500/20">
          <MessageSquare className="text-white fill-current w-5 h-5" />
        </div>
        <span className="text-3xl font-display font-bold text-white tracking-tighter">Preberry</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="px-4 py-1.5 bg-preberry-600 text-white text-sm font-bold rounded hover:bg-preberry-700 transition-colors">
          Sign In
        </button>
      </div>
    </motion.nav>
  );
}
