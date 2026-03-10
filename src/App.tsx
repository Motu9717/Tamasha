import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Instagram, Facebook, Linkedin, Mail, Phone, ExternalLink, ChevronRight, ChevronLeft, TrendingUp, BarChart3, Image as ImageIcon, Users, Wrench, Rocket, CheckCircle2 } from 'lucide-react';

interface VideoCardProps {
  videoId: string;
  title: string;
  type?: 'youtube' | 'drive';
  aspect?: '16/9' | '9/16';
  thumbnail?: string;
  rotation?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, type = 'youtube', aspect = '16/9', thumbnail, rotation = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = thumbnail || (type === 'youtube' 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : `https://drive.google.com/thumbnail?id=${videoId}&sz=w1280`);

  const embedUrl = type === 'youtube'
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      viewport={{ once: true }}
      className={`group relative bg-[#1a1a1d] rounded-[2rem] overflow-hidden border border-white/5 hover:border-violet-500/50 transition-all duration-300 shadow-2xl hover:shadow-violet-500/10 w-full mx-auto`}
    >
      <div className={`relative overflow-hidden ${aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'} m-2 rounded-[1.5rem]`}>
        {!isPlaying ? (
          <div 
            className="w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ 
                transform: rotation ? `rotate(${rotation}deg)` : undefined,
                width: rotation ? '56.25%' : '100%',
                height: rotation ? '177.77%' : '100%',
                left: rotation ? '21.875%' : '0',
                top: rotation ? '-38.88%' : '0'
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-violet-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.5)]"
              >
                <Play className="text-white fill-white ml-1" size={40} />
              </motion.div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      <div className="px-6 py-6 text-left">
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      </div>
    </motion.div>
  );
};

const SliderSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 'results',
      title: 'Results Dashboard',
      subtitle: 'Account Growth Case Study',
      icon: <TrendingUp className="text-emerald-400" size={32} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Total Reach</p>
              <h4 className="text-3xl font-bold text-white">3.3M+</h4>
              <p className="text-emerald-400 text-xs mt-1">Accounts reached in 90 days</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Engagement</p>
              <h4 className="text-3xl font-bold text-white">430K</h4>
              <p className="text-emerald-400 text-xs mt-1">Engaged audience members</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Growth</p>
              <h4 className="text-3xl font-bold text-white">13K → 43K</h4>
              <p className="text-emerald-400 text-xs mt-1">Follower growth milestone</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Viral Impact</p>
              <h4 className="text-3xl font-bold text-white">2.4M</h4>
              <p className="text-emerald-400 text-xs mt-1">Reach from non-followers</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'proof-1',
      title: 'Viral Reels',
      subtitle: 'Growth Proof #1',
      icon: <BarChart3 className="text-violet-400" size={32} />,
      content: (
        <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto w-fit">
          <img 
            src="https://drive.google.com/thumbnail?id=1UgqlfvbLW8FyIXFYEjUdeHKvWA43kTVO&sz=w1600" 
            alt="Viral Reels Proof"
            className="block max-w-full max-h-[550px] w-auto h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white text-sm font-medium">Detailed view of viral reel performance and reach metrics.</p>
          </div>
        </div>
      )
    },
    {
      id: 'proof-2',
      title: 'Monthly Insights',
      subtitle: 'Growth Proof #2',
      icon: <BarChart3 className="text-violet-400" size={32} />,
      content: (
        <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto w-fit">
          <img 
            src="https://drive.google.com/thumbnail?id=1obULYVC54_r_YZeHyWQzEsXTo26iI34-&sz=w1600" 
            alt="Monthly Insights Proof"
            className="block max-w-full max-h-[550px] w-auto h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white text-sm font-medium">Comprehensive monthly analytics showing consistent upward trends.</p>
          </div>
        </div>
      )
    },
    {
      id: 'proof-3',
      title: 'AI Cover Images',
      subtitle: 'Growth Proof #3',
      icon: <ImageIcon className="text-violet-400" size={32} />,
      content: (
        <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto w-fit">
          <img 
            src="https://drive.google.com/thumbnail?id=122FLmBvQ_Zb_vRlR1g0n_Bd71nvR5JlG&sz=w1600" 
            alt="AI Cover Images Proof"
            className="block max-w-full max-h-[550px] w-auto h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white text-sm font-medium">High-CTR AI generated covers that drive massive engagement.</p>
          </div>
        </div>
      )
    },
    {
      id: 'proof-4',
      title: 'Account Growth',
      subtitle: 'Growth Proof #4',
      icon: <Users className="text-violet-400" size={32} />,
      content: (
        <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto w-fit">
          <img 
            src="https://drive.google.com/thumbnail?id=1Dl581NeV1eyh5R3_F5lLZsquL7J6sF4x&sz=w1600" 
            alt="Account Growth Proof"
            className="block max-w-full max-h-[550px] w-auto h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white text-sm font-medium">Follower growth visualization over the last 30 days.</p>
          </div>
        </div>
      )
    },
    {
      id: 'tools',
      title: 'Tech Stack',
      subtitle: 'Professional Software & AI',
      icon: <Wrench className="text-orange-400" size={32} />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="p-2 bg-violet-500/20 rounded-lg text-violet-400"><Play size={20} /></div>
            <div>
              <h5 className="font-bold text-white">Editing</h5>
              <p className="text-zinc-400 text-sm">Premiere Pro / CapCut</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><ImageIcon size={20} /></div>
            <div>
              <h5 className="font-bold text-white">Design</h5>
              <p className="text-zinc-400 text-sm">Adobe Photoshop</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><Users size={20} /></div>
            <div>
              <h5 className="font-bold text-white">AI Tools</h5>
              <p className="text-zinc-400 text-sm">Firefly, ChatGPT, Gemini</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><BarChart3 size={20} /></div>
            <div>
              <h5 className="font-bold text-white">Analytics</h5>
              <p className="text-zinc-400 text-sm">Instagram Insights</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'strategy',
      title: 'Viral Strategy',
      subtitle: 'Content Optimization Framework',
      icon: <Rocket className="text-blue-400" size={32} />,
      content: (
        <div className="space-y-4">
          {[
            'Reel editing optimization for high retention',
            'Psychological hook editing techniques',
            'AI generated high-CTR cover images',
            'Data-driven consistent posting strategy'
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
              <span className="text-zinc-200 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-white">Results & Strategy</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 bg-violet-600 hover:bg-violet-500 rounded-full shadow-lg shadow-violet-600/20 transition-colors text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative min-h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="bg-[#1a1a1d] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3">
                <div className="mb-6">{slides[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">{slides[currentSlide].title}</h3>
                <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">{slides[currentSlide].subtitle}</p>
                
                <div className="mt-12 flex gap-2">
                  {slides.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-violet-500' : 'w-2 bg-white/10'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                {slides[currentSlide].content}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default function App() {
  const videos: VideoCardProps[] = [
    { 
      videoId: '1JaAVkzIDYEA0q5xaL4tVyx_QvbJo5wUY', 
      title: 'Sasta Vloger Part -1', 
      type: 'drive', 
      aspect: '16/9',
      thumbnail: 'https://drive.google.com/thumbnail?id=1gPnTThIUbGLDCi_6hL4GABPV0j8Ho29-&sz=w1920'
    },
    { 
      videoId: '1PLfPG2RT2lsrBbCZulYoQjIgfzH8Xci-', 
      title: 'Sasta Vloger Part -2', 
      type: 'drive', 
      aspect: '16/9',
      thumbnail: 'https://drive.google.com/thumbnail?id=1C93rjdghnT1MMZr9KdgHKXGM0qcsYYOH&sz=w1920'
    },
    { videoId: 'TlwJ1_KEUzA', title: 'Arjan Velly x I Wanna Be Your Slave', type: 'youtube', aspect: '16/9' },
    { 
      videoId: '1ZG1Pm0BGD57I7_fqfOcJTj3MyHYv3d3C', 
      title: 'Trending Instagram Reel', 
      type: 'drive', 
      aspect: '9/16',
      thumbnail: 'https://drive.google.com/thumbnail?id=1YqHBCG_werIyT8-lwCm1uA2ylE1FsFQ6&sz=w1280'
    },
    { 
      videoId: '1AAe2PoOvBdl5OVuw8BotkrSPshOJIu0M', 
      title: 'Simple Edit', 
      type: 'drive', 
      aspect: '9/16',
      thumbnail: 'https://drive.google.com/thumbnail?id=1YY3PxmUW0aF6l6JNGx0l6O8kpS2EaBCn&sz=w1280'
    },
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
            Ved Portfolio
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
          <h2 className="text-3xl font-bold text-white">Long Form & landscape Video</h2>
          <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block" />
        </div>
        
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {videos.slice(0, 3).map((video) => (
            <div key={video.videoId} className={`w-full ${video.aspect === '16/9' ? 'max-w-4xl' : 'max-w-[400px]'}`}>
              <VideoCard {...video} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Reel & Sort Form Video</h2>
          <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {videos.slice(3).map((video) => (
            <div key={video.videoId} className="w-full max-w-[320px]">
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </section>

      <SliderSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#151518] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Grow Your Account</h2>
          <p className="text-zinc-400 mb-12">Ready to go viral? Contact me below.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ved_tamashaaa/' },
              { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585087603860' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mithlesh-kumar-1a4353327/' },
              { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=motu8920@gmail.com' },
              { 
                icon: Phone, 
                label: 'Call', 
                href: '#', 
                onClick: (e: React.MouseEvent) => {
                  e.preventDefault();
                  const msg = document.getElementById('phone-unavailable-msg');
                  if (msg) {
                    msg.classList.remove('opacity-0', 'translate-y-2');
                    msg.classList.add('opacity-100', 'translate-y-0');
                    setTimeout(() => {
                      msg.classList.add('opacity-0', 'translate-y-2');
                      msg.classList.remove('opacity-100', 'translate-y-0');
                    }, 3000);
                  }
                } 
              },
            ].map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                target={item.href !== '#' ? "_blank" : undefined}
                rel={item.href !== '#' ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <item.icon className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">{item.label}</span>
              </motion.a>
            ))}
          </div>
          
          <div 
            id="phone-unavailable-msg" 
            className="mt-8 text-violet-400 font-medium opacity-0 translate-y-2 transition-all duration-300 pointer-events-none"
          >
            Unavailable, please try other social handles.
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Ved Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
