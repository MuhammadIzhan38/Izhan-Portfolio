/*import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Terminal, Clock } from 'lucide-react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="glass-panel h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Terminal size={24} className="text-[#00ff41]" />
          <h3 className="text-2xl font-bold text-white neon-text">
            &lt;System_Info /&gt;
          </h3>
        </div>
        
        <p className="text-gray-400 mb-8 font-mono text-sm">
          // Establishing secure connection to developer...<br/>
          // Status: Online<br/>
          // Mode: Open to opportunities
        </p>

        <div className="space-y-4">
          <div className="contact-item group">
            <div className="p-3 rounded-full bg-black/50 border border-[#00ff41]/30 group-hover:border-[#00ff41]">
              <MapPin className="icon-glow" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#00ff41] uppercase tracking-wider">Location_Node</p>
              <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">Karachi, Pakistan</p>
            </div>
          </div>

          <div className="contact-item group">
            <div className="p-3 rounded-full bg-black/50 border border-[#00ff41]/30 group-hover:border-[#00ff41]">
              <Phone className="icon-glow" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#00ff41] uppercase tracking-wider">Comm_Link / WhatsApp</p>
              <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">+92 319 5916813</p>
            </div>
          </div>

          <div className="contact-item group">
            <div className="p-3 rounded-full bg-black/50 border border-[#00ff41]/30 group-hover:border-[#00ff41]">
              <Clock className="icon-glow" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#00ff41] uppercase tracking-wider">Time_Zone</p>
              <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">Flexible / Remote Ready</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs text-[#00ff41] mb-4 uppercase tracking-wider border-b border-[#00ff41]/30 pb-2">External_Protocols</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/m-izhan-akram-612591229" target="_blank" rel="noreferrer" className="p-3 bg-black/50 border border-gray-700 rounded hover:border-[#00ff41] hover:text-[#00ff41] hover:-translate-y-1 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/MuhammadIzhan38" target="_blank" rel="noreferrer" className="p-3 bg-black/50 border border-gray-700 rounded hover:border-[#00ff41] hover:text-[#00ff41] hover:-translate-y-1 transition-all">
            <Github size={20} />
          </a>
          <a href="mailto:example@gmail.com" className="p-3 bg-black/50 border border-gray-700 rounded hover:border-[#00ff41] hover:text-[#00ff41] hover:-translate-y-1 transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;*/




import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Terminal, Clock } from 'lucide-react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="glass-panel h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Terminal size={24} className="text-[#00ff41]" />
          <h3 className="text-2xl font-bold text-white neon-text">
            &lt;System_Info /&gt;
          </h3>
        </div>
        
        <p className="text-gray-400 mb-8 font-mono text-sm">
          // Establishing secure connection to developer...<br/>
          // Status: Online<br/>
          // Mode: Open to opportunities
        </p>

        <div className="space-y-4">
          <div className="contact-item group">
            <div className="p-3 rounded-full bg-black/50 border border-[#00ff41]/30 group-hover:border-[#00ff41]">
              <MapPin className="icon-glow" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#00ff41] uppercase tracking-wider">Location_Node</p>
              <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">Karachi, Pakistan</p>
            </div>
          </div>

          <div className="contact-item group">
            <div className="p-3 rounded-full bg-black/50 border border-[#00ff41]/30 group-hover:border-[#00ff41]">
              <Phone className="icon-glow" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#00ff41] uppercase tracking-wider">Comm_Link / WhatsApp</p>
              <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">+92 319 5916813</p>
            </div>
          </div>

          <div className="contact-item group">
            <div className="p-3 rounded-full bg-black/50 border border-[#00ff41]/30 group-hover:border-[#00ff41]">
              <Clock className="icon-glow" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#00ff41] uppercase tracking-wider">Time_Zone</p>
              <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">Flexible / Remote Ready</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs text-[#00ff41] mb-4 uppercase tracking-wider border-b border-[#00ff41]/30 pb-2">External_Protocols</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/m-izhan-akram-612591229" target="_blank" rel="noreferrer" className="social-link">
            <Linkedin className="social-icon" />
          </a>
          <a href="https://github.com/MuhammadIzhan38" target="_blank" rel="noreferrer" className="social-link">
            <Github className="social-icon" />
          </a>
          <a href="mailto:mizhanakram@gmail.com" className="social-link">
            <Mail className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
