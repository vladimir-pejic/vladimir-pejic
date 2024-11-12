import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const contactAsciiArt = `
   _____            _             _   
  / ____|          | |           | |  
 | |     ___  _ __ | |_ __ _  ___| |_ 
 | |    / _ \\| '_ \\| __/ _\` |/ __| __|
 | |___| (_) | | | | || (_| | (__| |_ 
  \\_____\\___/|_| |_|\\__\\__,_|\\___|\\__|
`;

const decorativeAscii = `
  ┌───┐
  │   │
  └───┘
`;

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <pre className="ascii-art ascii-shadow text-primary mb-12 text-center">{contactAsciiArt}</pre>
        
        <div className="max-w-2xl mx-auto relative">
          <pre className="absolute -top-10 -left-10 text-primary/10 pointer-events-none select-none">
            {decorativeAscii}
          </pre>
          <pre className="absolute -bottom-10 -right-10 text-primary/10 pointer-events-none select-none transform rotate-180">
            {decorativeAscii}
          </pre>
          
          <form className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <div className="relative group">
                <MessageSquare className="absolute left-3 top-3 text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                <textarea
                  id="message"
                  rows={5}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your message..."
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};