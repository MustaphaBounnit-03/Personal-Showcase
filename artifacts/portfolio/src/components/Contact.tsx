import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        className: "bg-card border-primary text-white",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't hesitate to contact me. I'm currently open to new opportunities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaEnvelope />
                  </div>
                  <span>Send an Email</span>
                </a>
                <a 
                  href="https://github.com/MustaphaBounnit-03" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaGithub />
                  </div>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/mustapha-bounnit-3407b2421/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaLinkedin />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3 bg-card border border-white/5 p-8 rounded-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <input 
                    id="name" 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    id="email" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
