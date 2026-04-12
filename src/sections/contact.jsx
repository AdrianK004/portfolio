import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await emailjs.send(
        'service_z57maho',
        'template_k96p4el',    
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'qkpEhEKVrFi4Uvi0i'     
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="py-1 bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className='border-t-4 mx-0 sm:mx-4 md:mx-20 rounded-full border-blue-800'></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 mt-8">
            HERE'S A CONTACT FORM
          </h2>
          <p className="text-gray-200 font-semibold text-2xl">
            Have Any Questions ?
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-200 text-center max-w-2xl mx-auto mb-8"
        >
          I am a Software Developer specializing in modern applications.
          If you are looking for a reliable developer to build scalable and efficient solutions, feel free to get in touch.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
            />
          </div>
          
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
          ></textarea>
          
          <div className="text-left">
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-12 py-4 bg-blue-600/40 text-white rounded-md hover:bg-blue-500 transition-colors font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'SENDING...' : 'SEND'}
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {status === 'success' && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-blue-500 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 9l5 -5" />
                <path d="M15 5l0 4l4 0" />
              </svg>
            </div>
            <h3 className="text-gray-200 text-sm font-semibold mb-2">MY PHONE</h3>
            <p className="text-white text-lg">(+383) 49 427 652</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-green-500 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" />
                <path d="M15 18h6" />
                <path d="M18 15l3 3l-3 3" />
              </svg>
            </div>
            <h3 className="text-gray-200 text-sm font-semibold mb-2">MY EMAIL</h3>
            <p className="text-white text-lg">adrian1992krasniqi@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-purple-500 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" />
                <path d="M8 7l0 .01" />
                <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" />
                <path d="M16 15l0 .01" />
              </svg>
            </div>
            <h3 className="text-gray-200 text-sm font-semibold mb-2">MY ADDRESS</h3>
            <p className="text-white text-lg">Hamez Fetahu 23, Suharekë 23000, Kosovo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;