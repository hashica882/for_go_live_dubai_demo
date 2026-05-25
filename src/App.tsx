import React, { useState } from 'react';
import { Menu, X, ArrowRight, Check, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data
  const capabilities = [
    {
      title: 'Insights & Strategy',
      description: 'Strategy and insights are forward-looking plan for your brand.',
      features: ['Research & Data', 'Branding & Positioning', 'Business Consulting', 'Go To Market', 'Innovation']
    },
    {
      title: 'Advertising',
      description: 'Advertising helps your company to increase brand value.',
      features: ['Social Media', 'Paid Ads', 'Email Marketing', 'SEO / SEM', 'Illustrations', 'Photography & Video']
    },
    {
      title: 'Video Production',
      description: "We're your go-to for creating, editing, and distributing video content on multiple platforms.",
      features: ['Film Shooting', 'Events / Occasions Shoot', 'Personal Branding', 'Corporate Videos', 'ROTO (VFX)', 'Visual CV']
    },
    {
      title: 'Develop & Scale',
      description: "Develop and scale help to have a unique plan for your brand's life.",
      features: ['UI & UX Design', 'Application Development', 'Web Development', 'API Development', 'Enterprise CMS', 'Emerging Tech', 'Annual Maintenance']
    },
    {
      title: 'Experience Design',
      description: "UI/UX design gives the appearance above your brand's behavior.",
      features: ['User Research & Analysis', 'Information Architecture', 'Wireframing', 'UI Prototyping', 'UX Testing', 'Editorial Design']
    },
    {
      title: 'WhatsApp Chatbot',
      description: 'Elevate your business communication with GoLiveBot.',
      features: ['Automate service', 'Integrate catalogs', 'Facilitate purchases', 'Send updates', 'Multi-agent support', 'Scale messaging']
    }
  ];

  const recentPosts = [
    {
      date: 'April 20, 2026',
      read: '6 min read',
      title: 'Why a User Who Sees You on LinkedIn, Searches You on Google, and Chats on WhatsApp Is Your Highest-Value Lead'
    },
    {
      date: 'April 16, 2026',
      read: '5 min read',
      title: 'Using AI to Generate 100 Ad Variations, But Humans Choose the One That Converts'
    },
    {
      date: 'April 13, 2026',
      read: '6 min read',
      title: 'Performance Marketing: Why Static Ads Are Dying & How Short-Form Video Series Drive 40% Lower CPA...'
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="font-serif font-bold text-2xl text-dark-900 tracking-tight">Go Live Dubai</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-brand-500 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">About us</a>
              <a href="#" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Our Services</a>
              <a href="#" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Our Products</a>
              <a href="#" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Events</a>
              <a href="#" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Blogs</a>
              <a href="#" className="bg-dark-900 hover:bg-dark-800 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#" className="block px-3 py-3 text-brand-500 font-medium border-b border-gray-50">Home</a>
              <a href="#" className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">About us</a>
              <a href="#" className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Our Services</a>
              <a href="#" className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Our Products</a>
              <a href="#" className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Events</a>
              <a href="#" className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Blogs</a>
              <a href="#" className="block px-3 py-3 text-dark-900 font-bold">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">We're Go Live Dubai</div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
                Strategy.<br />
                Design.<br />
                Scale.
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Using year-over-year approaches and the latest technologies, we will ensure that your new website will be <span className="text-brand-500 font-semibold">visible, accessible, and treads lightly.</span>
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-full font-semibold transition-all">
                  Our Services <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="text-right">
                <p className="text-gray-400 mb-2">Modern and cutting-edge approach</p>
                <p className="text-xl font-serif">for creating digital and connected <span className="text-brand-500">brands,</span></p>
                <p className="text-xl font-serif"><span className="text-brand-500">services, and </span> products</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-500 font-medium mb-4 tracking-wider uppercase text-sm">Capabilities</div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark-900 leading-tight mb-8">
                Digital solutions.<br />Brand strategy.
              </h2>
              <a href="#" className="inline-flex items-center gap-2 text-dark-900 border-b-2 border-dark-900 font-semibold pb-1 hover:text-brand-500 hover:border-brand-500 transition-colors">
                View Services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-500 font-medium mb-4 tracking-wider uppercase text-sm">Showcase</div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark-900 leading-tight mb-8">
                Our most recent<br />digital and strategy projects.
              </h2>
              <a href="#" className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-medium pointer-events-none">
                Coming Soon!
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* One Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="text-brand-500 font-medium mb-4 tracking-wider uppercase text-sm">Our Capabilities</div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark-900 leading-tight">
                One Team, <br/>Many Talents
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-brand-500 pl-6">
                Go Live Dubai is a group of <strong className="text-dark-900">creatives, strategists, and innovators</strong> that combine creativity and innovation to <strong className="text-dark-900">help brands grow</strong>. We re-imagine digital transformation. Our cutting-edge digital strategies make the vision of our clients digitally impactful.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-serif font-bold text-dark-900 mb-4">{cap.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[48px]">{cap.description}</p>
                <ul className="space-y-3">
                  {cap.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-dark-900 text-sm">
                      <span className="text-brand-500 mr-3 font-bold">–</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Stats banner */}
      <section className="py-24 bg-dark-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-800 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">What we do</div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-8">
                Does more than ever platform to achieve goal stages.
              </h2>
              <p className="text-xl text-gray-300">
                Ready to talk business? <a href="mailto:sales@golivedubai.com" className="text-brand-500 font-bold hover:underline">Shoot us an email.</a>
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="text-6xl font-serif font-bold text-brand-500 mb-4 mt-2">80</div>
                  <h6 className="text-xl font-bold mb-3">designers and<br/>developers</h6>
                  <p className="text-gray-400 text-sm">Using year-over-year approaches and the latest technologies, we ensure that your new website will be visible and accessible.</p>
               </div>
               <div>
                  <div className="text-6xl font-serif font-bold text-brand-500 mb-4 mt-2">300</div>
                  <h6 className="text-xl font-bold mb-3">projects<br/>delivered</h6>
                  <p className="text-gray-400 text-sm">Out of all challenges still we managed to have more happy patrons who transformed their business through our solutions.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-24 bg-white border-bottom border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-4xl font-serif font-bold text-dark-900 mb-12">Our Blogs.</h3>
           
           <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/2] bg-gray-100 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-dark-900/10 group-hover:bg-dark-900/0 transition-colors"></div>
                    {/* Placeholder for blog image */}
                    <div className="w-full h-full bg-gray-200"></div>
                  </div>
                  <div className="flex gap-4 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    <span className="text-brand-500">{post.date}</span>
                    <span>{post.read}</span>
                  </div>
                  <h4 className="text-xl font-bold text-dark-900 group-hover:text-brand-500 transition-colors leading-snug">
                    {post.title}
                  </h4>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Locations & Contact */}
      <section className="py-24 bg-dark-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
               <div className="text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">Where we are</div>
               <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Offices</h3>
               <p className="text-gray-400">Visit us or get in touch for any inquiries.</p>
            </div>
            <div>
               <div className="flex items-center gap-3 text-brand-500 mb-4">
                 <MapPin className="w-6 h-6" />
                 <h4 className="font-bold text-xl uppercase tracking-wider text-white">Dubai</h4>
               </div>
               <p className="text-gray-400">M20, Arabilla Building,<br/>Al Wuheida Street,<br/>Hor Al Anz East, Dubai,<br/>United Arab Emirates</p>
            </div>
            <div>
               <div className="flex items-center gap-3 text-brand-500 mb-4">
                 <MapPin className="w-6 h-6" />
                 <h4 className="font-bold text-xl uppercase tracking-wider text-white">Abu Dhabi</h4>
               </div>
               <p className="text-gray-400">#49-55, Block D,<br/>Elite Business Zone Investment,<br/>Mussafah Industrial Area 44,<br/>Abu Dhabi - UAE.</p>
            </div>
            <div>
               <h4 className="font-bold text-xl mb-4 uppercase tracking-wider">Branches</h4>
               <p className="text-gray-400 font-semibold mb-6">Portugal / Spain / India</p>

               <div className="space-y-4">
                 <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-brand-500" />
                    <span>+971 56 686 6174</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-brand-500" />
                    <a href="mailto:sales@golivedubai.com" className="hover:text-white transition-colors">sales@golivedubai.com</a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="py-24 bg-brand-500 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="font-medium mb-4 tracking-wider uppercase text-sm text-brand-900">Careers</div>
                  <h3 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
                    Join our team to <br/>
                    create the best digital<br/> solutions.
                  </h3>
               </div>
               <div>
                  <p className="text-xl mb-8 leading-relaxed max-w-lg">
                    We're <strong className="text-white">a team of creatives</strong> who are excited about unique ideas and help companies to <strong className="text-white">create amazing identity</strong> by crafting top-notch UI/UX & Technologies.
                  </p>
                  <a href="https://www.linkedin.com/company/golivedubai/jobs/" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-white text-dark-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-xl">
                    See Open Positions <ArrowRight className="w-5 h-5" />
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xl text-white">Go Live Dubai</span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()}. Go Live Dubai. Made with ❤️
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
