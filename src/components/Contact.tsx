import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const whatsappMessage = `New Contact from Line Design Website:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}
Subject: ${form.subject || 'Not provided'}
Message: ${form.message}`;
    
    const whatsappUrl = `https://wa.me/96181213016?text=${encodeURIComponent(whatsappMessage)}`;
    
    setLoading(false);
    setSuccess(true);
    setForm(initialForm);
    
    setTimeout(() => {
      // Mobile browsers often block window.open from inside async handlers.
      // Use a normal navigation so WhatsApp reliably opens on phone.
      window.location.href = whatsappUrl;
    }, 300);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-stone-950">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Info */}
          <div>
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h2 className="mb-8 text-4xl font-light leading-tight text-white lg:text-5xl">
              Let's Build<br />
              <span className="italic text-stone-300">Something Together</span>
            </h2>
            <div className="w-12 h-px mb-10 bg-amber-400" />

            <p className="mb-10 leading-relaxed text-stone-400">
              Whether you have a specific project in mind or simply want 
              to explore possibilities, we'd love to hear from you.
               Every great building begins with a conversation.
            </p>

            <div className="mb-12 space-y-6">
              {[
                { icon: MapPin, label: 'Studio Address', value: 'Tripoli, Lebanon' },
                { icon: Phone, label: 'Phone / WhatsApp', value: '+961 81 213 016' },
                { icon: Mail, label: 'Email', value: 'Linedesign.lb@gmail.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 border border-amber-400/30 shrink-0">
                    <Icon size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs tracking-[0.15em] uppercase mb-0.5">{label}</div>
                    <div className="text-sm text-stone-200">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+96181213016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600/20 border border-green-600/40 text-green-400 text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-green-600/30 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="p-8 border bg-stone-900 border-white/5 lg:p-10">
            {success ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={48} className="mb-4 text-green-400" />
                <h3 className="mb-2 text-xl font-light text-white">Message Sent</h3>
                <p className="text-sm text-stone-400">Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="mb-6 text-lg font-light tracking-wide text-white">Send a Message</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm text-white transition-colors duration-300 border bg-stone-800 border-white/10 focus:outline-none focus:border-amber-400/60 placeholder:text-stone-600"
                      placeholder="Abdelrahman Khaled"
                    />
                  </div>
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm text-white transition-colors duration-300 border bg-stone-800 border-white/10 focus:outline-none focus:border-amber-400/60 placeholder:text-stone-600"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm text-white transition-colors duration-300 border bg-stone-800 border-white/10 focus:outline-none focus:border-amber-400/60 placeholder:text-stone-600"
                      placeholder="+961 ** *** ***"
                    />
                  </div>
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm text-white transition-colors duration-300 border bg-stone-800 border-white/10 focus:outline-none focus:border-amber-400/60"
                    >
                      <option value="">Select a subject</option>
                      <option>Residential Project</option>
                      <option>Commercial Project</option>
                      <option>Interior Design</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm text-white transition-colors duration-300 border resize-none bg-stone-800 border-white/10 focus:outline-none focus:border-amber-400/60 placeholder:text-stone-600"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-amber-400 text-stone-950 text-xs tracking-[0.2em] uppercase py-4 font-medium hover:bg-amber-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
