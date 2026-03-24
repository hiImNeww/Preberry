import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What is Preberry?",
    answer: "Preberry is a revolutionary platform that allows you to have natural, real-time conversations with advanced AI agents. Whether you want a one-on-one face-to-face chat or a group discussion with multiple AI personalities, Preberry makes it possible."
  },
  {
    question: "How much does Preberry cost?",
    answer: "Talk to AI on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
  },
  {
    question: "Where can I use Preberry?",
    answer: "Watch and talk anywhere, anytime. Sign in with your Preberry account to talk instantly on the web at preberry.com from your personal computer or on any internet-connected device that offers the Preberry app."
  },
  {
    question: "How do I cancel?",
    answer: "Preberry is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I talk about with AI?",
    answer: "Anything! Our AI agents are trained on vast amounts of data and can discuss everything from science and history to personal advice, language learning, or just casual small talk. They have unique personalities and can even participate in group brainstorming sessions."
  },
  {
    question: "Is Preberry good for kids?",
    answer: "The Preberry Kids experience is included in your membership to give parents control while kids enjoy talking to friendly AI characters in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can talk about."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black border-t-8 border-[#222]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#2d2d2d] hover:bg-[#414141] transition-colors">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="text-xl md:text-2xl text-white">
                  {faq.question}
                </span>
                {activeIndex === index ? <X className="w-8 h-8 text-white" /> : <Plus className="w-8 h-8 text-white" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-1 border-t border-black text-xl md:text-2xl text-white leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-white mb-6">
            Ready to start? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col md:flex-row items-stretch gap-2 w-full max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow px-4 py-4 bg-black/40 border border-white/30 rounded text-white focus:outline-none focus:ring-2 focus:ring-preberry-600 transition-all"
            />
            <button className="px-8 py-4 bg-preberry-600 text-white text-xl font-bold rounded flex items-center justify-center gap-2 hover:bg-preberry-700 transition-all whitespace-nowrap">
              Get Started
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
