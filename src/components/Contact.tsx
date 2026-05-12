import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';
import type { Message } from '../lib/types';

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
    
    const messageData: Message = {
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      subject: form.subject || null,
      message: form.message
    };

    const { error: err } = await (supabase as any)
      .from('messages')
      .insert([messageData]);
    
    setLoading(false);
    if (err) { setError('Something went wrong. Please try again.'); return; }
    setSuccess(true);
    setForm(initialForm);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Info */}
          <div>
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-white text-4xl lg:text-5xl font-light leading-tight mb-8">
              Let's Build<br />
              <span className="italic text-stone-300">Something Together</span>
            </h2>
            <div className="w-12 h-px bg-amber-400 mb-10" />

            <p className="text-stone-400 leading-relaxed mb-10">
              Whether you have a specific project in mind or simply want 
              to explore possibilities, we'd love to hear from you.
               Every great building begins with a conversation.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, label: 'Studio Address', value: 'Tripoli, Lebanon' },
                { icon: Phone, label: 'Phone / WhatsApp', value: '+961 81 213 016' },
                { icon: Mail, label: 'Email', value: 'ArchitectAbdelRahmanKhaled@gmail.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs tracking-[0.15em] uppercase mb-0.5">{label}</div>
                    <div className="text-stone-200 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+961 81 213 016"
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
          <div className="bg-stone-900 border border-white/5 p-8 lg:p-10">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-white text-xl font-light mb-2">Message Sent</h3>
                <p className="text-stone-400 text-sm">Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white text-lg font-light mb-6 tracking-wide">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-stone-800 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-amber-400/60 transition-colors duration-300 placeholder:text-stone-600"
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
                      className="w-full bg-stone-800 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-amber-400/60 transition-colors duration-300 placeholder:text-stone-600"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-800 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-amber-400/60 transition-colors duration-300 placeholder:text-stone-600"
                      placeholder="+961 10 000 000"
                    />
                  </div>
                  <div>
                    <label className="text-stone-500 text-xs tracking-[0.15em] uppercase block mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-stone-800 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-amber-400/60 transition-colors duration-300"
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
                    className="w-full bg-stone-800 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-amber-400/60 transition-colors duration-300 resize-none placeholder:text-stone-600"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

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
