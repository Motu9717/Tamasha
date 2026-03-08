import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Instagram, Facebook, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  videoId: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#1a1a1d] rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/50 transition-all duration-500 shadow-2xl"
    >
      <div className="aspect-video relative overflow-hidden">
        {!isPlaying ? (
          <div 
            className="w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.6)]"
              >
                <Play className="text-white fill-white ml-1" size={32} />
              </motion.div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white/90 group-hover:text-violet-400 transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
};

export default function App() {
  const videos = [
    { id: 'TlwJ1_KEUzA', title: 'Arjan Velly x I Wanna Be Your Slave' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-violet-500/30">
      {/* Top Heading */}
      <div className="pt-12 pb-4 text-center overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic font-serif"
          style={{
            background: 'linear-gradient(to bottom, #f97316 20%, #dc2626 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(3px 3px 0px #ffffff) drop-shadow(8px 8px 0px #000000)',
          }}
        >
          TAMASHA
        </motion.h2>
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-radial-gradient from-violet-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-violet-500 bg-clip-text text-transparent tracking-tight"
          >
            Short-Form Editor Portfolio
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I turn boring footage into viral Reels & YouTube Shorts. 
            Expert in retention editing, captions, and Instagram growth strategies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] active:scale-95"
            >
              Hire Me <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">My Recent Edits</h2>
          <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} videoId={video.id} title={video.title} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#151518] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Grow Your Account</h2>
          <p className="text-zinc-400 mb-12">Ready to go viral? Contact me below.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/YOUR_USERNAME' },
              { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/YOUR_USERNAME' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_USERNAME' },
              { icon: Mail, label: 'Email', href: 'mailto:your@email.com' },
              { icon: Phone, label: 'Call', href: 'tel:+1234567890' },
            ].map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <item.icon className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Short-Form Editor Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
