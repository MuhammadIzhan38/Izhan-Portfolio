/*import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AContact: ${formData.contact}%0D%0AMessage: ${formData.message}`;
    
    setTimeout(() => {
        window.location.href = `mailto:example@gmail.com?subject=${subject}&body=${body}`;
        setStatus('PROTOCOL EXECUTED');
        setFormData({ name: '', contact: '', message: '' });
    }, 1500);
  };

  return (
    <div className="glass-panel h-full">
        <div className="mb-6 border-b border-[#00ff41]/30 pb-4">
            <h3 className="text-2xl font-bold text-white neon-text mb-2">
                &lt;Transmit_Message /&gt;
            </h3>
            <p className="text-gray-400 text-sm font-mono">
                &gt; Initializing secure transmission channel...
            </p>
        </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label className="field-label">&gt; USER_NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your identification..."
            value={formData.name}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="group">
          <label className="field-label">&gt; SIGNAL_SOURCE (Email/Phone)</label>
          <input
            type="text"
            name="contact"
            placeholder="Where can I reply?..."
            value={formData.contact}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="group">
          <label className="field-label">&gt; DATA_PACKET (Message)</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message command here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="cli-input"
            style={{ resize: 'none' }}
          ></textarea>
        </div>

        <button type="submit" className="cyber-button w-full mt-4">
          {status === 'Sending...' ? (
             <span className="animate-pulse">UPLOADING...</span>
          ) : (
             <>
               <span>EXECUTE_SEND</span>
               <Send size={18} />
             </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;*/


/*

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Replace with your actual email
    const yourEmail = "mizhanakram@gmail.com"; // CHANGE THIS TO YOUR ACTUAL EMAIL
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Contact: ${formData.contact}
Message: ${formData.message}

--- Sent from your portfolio website ---
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      // Open user's email client
      window.location.href = mailtoLink;
      setStatus('PROTOCOL EXECUTED');
      setFormData({ name: '', contact: '', message: '' });
    }, 1500);
  };

  return (
    <div className="glass-panel h-full">
      <div className="mb-6 border-b border-[#00ff41]/30 pb-4">
        <h3 className="text-2xl font-bold text-white neon-text mb-2">
          &lt;Transmit_Message /&gt;
        </h3>
        <p className="text-gray-400 text-sm font-mono">
          &gt; Initializing secure transmission channel...
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label className="field-label">&gt; USER_NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your identification..."
            value={formData.name}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="form-group">
          <label className="field-label">&gt; SIGNAL_SOURCE (Email/Phone)</label>
          <input
            type="text"
            name="contact"
            placeholder="Where can I reply?..."
            value={formData.contact}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="form-group">
          <label className="field-label">&gt; DATA_PACKET (Message)</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message command here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="cli-input"
            style={{ resize: 'none' }}
          ></textarea>
        </div>

        <button type="submit" className="cyber-button w-full mt-4">
          {status === 'Sending...' ? (
            <span className="animate-pulse">UPLOADING...</span>
          ) : (
            <>
              <span>EXECUTE_SEND</span>
              <Send size={18} />
            </>
          )}
        </button>
        
        {status === 'PROTOCOL EXECUTED' && (
          <p className="text-[#00ff41] text-center mt-4 font-mono">
            &gt; Message queued for transmission. Check your email client.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
*/



/*
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Your actual email address
    const yourEmail = "mizhanakram@gmail.com";
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `
Name: ${formData.name}
Contact: ${formData.contact}
Message: ${formData.message}

Sent from your portfolio website
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Reset form after a delay
    setTimeout(() => {
      setStatus('SENT');
      setFormData({ name: '', contact: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="glass-panel h-full">
      <div className="mb-6 border-b border-[#00ff41]/30 pb-4">
        <h3 className="text-2xl font-bold text-white neon-text mb-2">
          &lt;Transmit_Message /&gt;
        </h3>
        <p className="text-gray-400 text-sm font-mono">
          &gt; Initializing secure transmission channel...
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label className="field-label">&gt; USER_NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your identification..."
            value={formData.name}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="form-group">
          <label className="field-label">&gt; SIGNAL_SOURCE (Email/Phone)</label>
          <input
            type="text"
            name="contact"
            placeholder="Where can I reply?..."
            value={formData.contact}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="form-group">
          <label className="field-label">&gt; DATA_PACKET (Message)</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message command here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="cli-textarea"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="cyber-button w-full mt-4"
          disabled={status === 'Sending...'}
        >
          {status === 'Sending...' ? (
            <span className="animate-pulse">UPLOADING...</span>
          ) : status === 'SENT' ? (
            <span className="text-[#00ff41]">TRANSMISSION_COMPLETE</span>
          ) : (
            <>
              <span>EXECUTE_SEND</span>
              <Send size={18} />
            </>
          )}
        </button>
        
        {status === 'SENT' && (
          <div className="mt-4 p-3 border border-[#00ff41] bg-[#00ff41]/10 rounded">
            <p className="text-[#00ff41] text-center font-mono text-sm">
              &gt; Message queued for transmission. Check your email client.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;*/





import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef(); // Create a reference to the form
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = "service_xruhtuz";
    const TEMPLATE_ID = "template_a490x9m";
    const PUBLIC_KEY = "auuXTAlUCJWgwO8ux";

    emailjs.sendForm(
      SERVICE_ID, 
      TEMPLATE_ID, 
      form.current, 
      PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setStatus('SENT');
          setFormData({ name: '', contact: '', message: '' }); // Clear inputs

          // Reset status after 3 seconds
          setTimeout(() => setStatus(''), 3000);
      }, (error) => {
          console.log(error.text);
          setStatus('ERROR');
          alert("Transmission Failed: " + error.text); // Optional error alert
          setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <div className="glass-panel h-full">
      <div className="mb-6 border-b border-[#00ff41]/30 pb-4">
        <h3 className="text-2xl font-bold text-white neon-text mb-2">
          &lt;Transmit_Message /&gt;
        </h3>
        <p className="text-gray-400 text-sm font-mono">
          &gt; Initializing secure transmission channel...
        </p>
      </div>

      {/* Add ref={form} to the form element */}
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label className="field-label">&gt; USER_NAME</label>
          <input
            type="text"
            name="name" // This must match {{name}} in EmailJS template
            placeholder="Enter your identification..."
            value={formData.name}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="form-group">
          <label className="field-label">&gt; SIGNAL_SOURCE (Email/Phone)</label>
          <input
            type="text"
            name="contact" // This must match {{contact}} in EmailJS template
            placeholder="Where can I reply?..."
            value={formData.contact}
            onChange={handleChange}
            required
            className="cli-input"
          />
        </div>

        <div className="form-group">
          <label className="field-label">&gt; DATA_PACKET (Message)</label>
          <textarea
            name="message" // This must match {{message}} in EmailJS template
            rows="4"
            placeholder="Type your message command here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="cli-textarea"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="cyber-button w-full mt-4"
          disabled={status === 'Sending...'}
        >
          {status === 'Sending...' ? (
            <span className="animate-pulse">UPLOADING...</span>
          ) : status === 'SENT' ? (
            <span className="text-[#00ff41]">TRANSMISSION_COMPLETE</span>
          ) : status === 'ERROR' ? (
            <span className="text-red-500">TRANSMISSION_FAILED</span>
          ) : (
            <>
              <span>EXECUTE_SEND</span>
              <Send size={18} />
            </>
          )}
        </button>
        
        {status === 'SENT' && (
          <div className="mt-4 p-3 border border-[#00ff41] bg-[#00ff41]/10 rounded">
            <p className="text-[#00ff41] text-center font-mono text-sm">
              &gt; Data packet successfully uploaded to server.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;