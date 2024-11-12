import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import { AsciiName } from './components/AsciiName';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import vpIcon from './assets/vp.svg';
import CodeRain from './components/CodeRain';
import FloatingCode from './components/FloatingCode';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <FloatingCode isDark={isDark} />
      
      {!isDark && (
        <>
          <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-white via-blue-50 to-white opacity-90" />
          <div className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-difference">
            <div className="absolute inset-0 animate-noise-1 bg-[url('/noise-1.png')] animate-pulse" />
          </div>
        </>
      )}
      
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed w-full backdrop-blur-sm bg-background/80 border-b border-[#ff2a6d]/50 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a 
              href="#top" 
              onClick={scrollToTop}
              className="text-xl font-mono text-[#ff2a6d] hover:text-[#ff2a6d]/80 hover:shadow-[0_0_15px_#ff2a6d] transition-all flex items-center gap-2"
            >
              <img src={vpIcon} alt="VP Logo" className="w-9 h-9 drop-shadow-[0_0_8px_#ff2a6d]" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 font-mono">
              <a href="#top" className="hover:text-[#FF1E1E] hover:shadow-[0_0_10px_#FF1E1E] transition-all">0x7C00</a>
              <a href="#projects" className="hover:text-[#4DFF00] hover:shadow-[0_0_10px_#4DFF00] transition-all">0xC0DE</a>
              <a href="#skills" className="hover:text-[#FF00F5] hover:shadow-[0_0_10px_#FF00F5] transition-all">0xDEAD</a>
              <a href="#contact" className="hover:text-[#00E5FF] hover:shadow-[0_0_10px_#00E5FF] transition-all">0xCAFE</a>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-[#ff2a6d]/20 hover:shadow-[0_0_10px_#ff2a6d] rounded-full transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-[#ff2a6d]/20 hover:shadow-[0_0_10px_#ff2a6d] rounded-full transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-[#ff2a6d]/20 hover:shadow-[0_0_10px_#ff2a6d] rounded-full transition-all"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <div className="md:hidden fixed inset-0 top-[73px] z-40">
                {/* Backdrop blur layer */}
                <div className="absolute inset-0 backdrop-blur-md bg-background/80" />
                
                {/* Menu items */}
                <div className="relative z-10 flex flex-col items-center gap-8 pt-12 font-mono">
                  <a 
                    href="#top" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl hover:text-[#FF1E1E] hover:shadow-[0_0_10px_#FF1E1E] transition-all"
                  >
                    0x7C00
                  </a>
                  <a 
                    href="#projects" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl hover:text-[#4DFF00] hover:shadow-[0_0_10px_#4DFF00] transition-all"
                  >
                    0xC0DE
                  </a>
                  <a 
                    href="#skills" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl hover:text-[#FF00F5] hover:shadow-[0_0_10px_#FF00F5] transition-all"
                  >
                    0xDEAD
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl hover:text-[#00E5FF] hover:shadow-[0_0_10px_#00E5FF] transition-all"
                  >
                    0xCAFE
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main role="main" className="relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:to-transparent" aria-hidden="true" />
        
        <section aria-label="Introduction" className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative">
          <h1 className="sr-only">Vladimir Pejic - Full Stack Developer & Software Architect</h1>
          <div className="w-full">
            <AsciiName />
            <div className="text-center mt-8 space-y-4">
              <p className="text-xl text-[#ff2a6d] font-bold drop-shadow-[0_0_8px_#ff2a6d]">
                Full Stack Developer, Software Architect & Tech Enthusiast
              </p>
              <p className="text-sm text-[#ffd319] max-w-md mx-auto drop-shadow-[0_0_5px_#ffd319]">
                Crafting business applications with code and creativity
              </p>
              <div className="flex justify-center gap-6 mt-8">
                <div className="group relative">
                  <a
                    href="https://www.linkedin.com/in/vladimirpejic/"
                    className="p-3 hover:bg-[#00f9ff]/20 hover:shadow-[0_0_15px_#00f9ff] rounded-full transition-all duration-300 hover:scale-110 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} className="text-[#00f9ff]" />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#ffd319] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    Meet me in public
                  </span>
                </div>
                <div className="group relative">
                  <a
                    href="mailto:vladimir.pejic@gmail.com"
                    className="p-3 hover:bg-[#00f9ff]/20 hover:shadow-[0_0_15px_#00f9ff] rounded-full transition-all duration-300 hover:scale-110 block"
                  >
                    <Mail size={24} className="text-[#00f9ff]" />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#ffd319] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Meet me in private
                  </span>
                </div>
                <div className="group relative">
                  <a
                    href="/vladimir-pejic-cv.pdf"
                    className="p-3 hover:bg-[#00f9ff]/20 hover:shadow-[0_0_15px_#00f9ff] rounded-full transition-all duration-300 hover:scale-110 block"
                    download="vladimir-pejic-cv.pdf"
                  >
                    <Download size={24} className="text-[#00f9ff]" />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#ffd319] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    Download probably *not-updated* resume
                  </span>
                </div>
                <div className="group relative">
                  <a
                    href="https://github.com"
                    className="p-3 hover:bg-[#00f9ff]/20 hover:shadow-[0_0_15px_#00f9ff] rounded-full transition-all duration-300 hover:scale-110 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} className="text-[#00f9ff]" />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#ffd319] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    My GitHub although all the magic is in private GitLab :/
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer role="contentinfo" className="border-t border-[#ff2a6d]/30">
        <div className="container mx-auto px-4 py-8 text-center text-[#ffd319]">
          <p className="text-[#FF4D00] dark:text-[#FF8A00] drop-shadow-[0_0_5px_#FFB700]">© {new Date().getFullYear()} Vladimir Pejic. All rights reserved.</p>
          <p className="text-sm mt-2 text-[#00FFDD] dark:text-[#00FF95] drop-shadow-[0_0_5px_#4DFFAB]">Built with React + TypeScript + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

export default App;