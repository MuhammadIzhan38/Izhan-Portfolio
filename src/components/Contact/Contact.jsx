/*import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 cli-theme" id="contact">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text tracking-tighter">
                CONTACT_ME
            </h2>
            <div className="h-1 w-24 bg-[#00ff41] mx-auto rounded shadow-[0_0_10px_#00ff41]"></div>
            <p className="mt-4 text-[#00ff41] font-mono animate-pulse">
                &gt; Ready to deploy your next project?
            </p>
        </div>

        <div className="grid grid-layout gap-8">
          <div className="transform hover:scale-[1.01] transition-transform duration-500">
             <ContactDetails />
          </div>

          <div className="transform hover:scale-[1.01] transition-transform duration-500">
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;*/



/*

import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 cli-theme" id="contact">
      <div className="max-w-6xl w-full mx-auto">
     
        <div className="contact-header">
          <h2 className="contact-title neon-text">
            CONTACT_ME
          </h2>
          <div className="h-1 w-24 bg-[#00ff41] mx-auto rounded shadow-[0_0_10px_#00ff41] mb-4"></div>
          <p className="text-[#00ff41] font-mono animate-pulse text-lg">
            &gt; Ready to deploy your next project?
          </p>
        </div>

        <div className="grid grid-layout gap-8">
          <div className="transform hover:scale-[1.01] transition-transform duration-500">
            <ContactDetails />
          </div>

          <div className="transform hover:scale-[1.01] transition-transform duration-500">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
*/





import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 cli-theme" id="contact">
      <div className="contact-container">
        {/* Updated Header Section */}
        <div className="contact-header">
          <h2 className="contact-title neon-text">
            CONTACT_ME
          </h2>
          <div className="h-1 w-24 bg-[#00ff41] mx-auto rounded shadow-[0_0_10px_#00ff41] mb-4"></div>
          <p className="text-[#00ff41] font-mono animate-pulse text-lg">
            &gt; Ready to deploy your next project?
          </p>
        </div>

        <div className="grid grid-layout">
          <div className="transform hover:scale-[1.01] transition-transform duration-500">
            <ContactDetails />
          </div>

          <div className="transform hover:scale-[1.01] transition-transform duration-500">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;