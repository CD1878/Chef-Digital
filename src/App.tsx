/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Search, 
  Globe, 
  BarChart3, 
  Star, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2,
  Users,
  Code2,
  PhoneCall,
  MapPin,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Chef Digital</span>
            </div>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Producten</a>
              <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Klanten</a>
              <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Developers</a>
              <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Prijzen</a>
              <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Over ons</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            <a href="#" className="text-gray-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Login</a>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-base font-bold hover:bg-blue-950 transition-all shadow-xl shadow-blue-900/30">
              Plan demo
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1">
          <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Producten</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Klanten</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Developers</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Prijzen</a>
          <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Login</a>
          <div className="pt-4">
            <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-full text-base font-semibold">Plan demo</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-none w-full mx-auto px-4"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Ruim 210 restaurants maken gebruik van Chef Digital</span>
            </div>
            <h1 className="text-5xl lg:text-[84px] font-bold text-gray-900 leading-[0.95] mb-8 tracking-tight max-w-[1200px] mx-auto">
              Meer gasten door een betere online zichtbaarheid van jouw horecazaak
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ruim <span className="font-bold text-gray-900">210 restaurants</span> maken gebruik van Chef Digital. Van lokale pizzeria's tot ketens met meerdere locaties. Wij zetten jouw zaak digitaal op de kaart al <span className="font-bold text-gray-900">vanaf €129 per maand</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-950 transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2">
                Afspraak maken
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
                Pakketten
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 relative w-full max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600" 
                alt="Restaurant sfeer" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
            </div>
            
            {/* Dashboard Overlays */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-10 left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-72 hidden md:block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Reserveringen</span>
                <Calendar className="text-blue-900" size={18} />
              </div>
              <div className="text-4xl font-bold text-gray-900">+124</div>
              <div className="text-xs text-green-600 font-medium mt-1">↑ 14% t.o.v. vorige week</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-900 w-3/4"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-64 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Search className="text-blue-900" size={20} />
                </div>
                <span className="text-base font-bold text-gray-900">Google Search</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Routeklikken</span>
                  <span className="font-bold">482</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Calls</span>
                  <span className="font-bold">156</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-1/2 -translate-y-1/2 -left-16 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-base font-bold">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Gebaseerd op 850+ reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoCloud = () => {
  const logos = [
    { text: "BISTRO.", className: "font-black tracking-tighter" },
    { text: "The Social", className: "font-serif italic" },
    { text: "OCEAN", className: "font-bold tracking-widest" },
    { text: "Urban.", className: "font-mono uppercase" },
    { text: "L'AVENUE", className: "font-bold" },
    { text: "COCKTAILS", className: "font-light tracking-[0.2em]" }
  ];

  return (
    <div className="bg-white py-12 border-y border-gray-50 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 md:gap-24 opacity-40 grayscale"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className={`text-2xl md:text-3xl ${logo.className}`}>{logo.text}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const MainPlatform = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Eén platform voor al je horeca marketing</h2>
          <p className="text-xl text-gray-600">
            Beheer je website, advertenties en online reputatie vanuit één dashboard. Chef Digital helpt je meer gasten aan te trekken en tijd te besparen.
          </p>
        </div>
        
        <div className="relative bg-[#111] rounded-[32px] overflow-hidden p-8 md:p-16 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-6">
                Alles-in-één Dashboard
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Beheers je groei met precisie</h3>
              <p className="text-lg text-gray-400 mb-8">
                Van Rankmaster SEO tot gerichte Ads en razendsnelle websites. Wij bieden de tools die horecaondernemers echt nodig hebben.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Ontdek meer
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbb652167014?auto=format&fit=crop&q=80&w=800" 
                  alt="Dashboard Preview" 
                  className="rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-blue-900 p-4 rounded-xl shadow-xl">
                <BarChart3 size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MapPin className="text-blue-900" />,
      title: "Ontvang meer reserveringen",
      text: "Word gevonden in Google Maps en Search wanneer gasten zoeken naar restaurants in jouw buurt.",
      link: "Ontdek meer"
    },
    {
      icon: <Globe className="text-blue-900" />,
      title: "Professionele horeca websites",
      text: "Snelle, mobielvriendelijke websites die direct gekoppeld zijn aan je reserveringssysteem.",
      link: "Bekijk voorbeelden"
    },
    {
      icon: <BarChart3 className="text-blue-900" />,
      title: "Sneller groeien met data",
      text: "Realtime inzicht in calls, reserveringen en gastinteracties vanuit één centraal punt.",
      link: "Start met data"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h4>
              <p className="text-gray-600 mb-8 flex-grow">{f.text}</p>
              <a href="#" className="inline-flex items-center text-blue-900 font-semibold hover:gap-2 transition-all">
                {f.link} <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisualSection = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1556740734-7f9589451ab8?auto=format&fit=crop&q=80&w=800" 
                alt="Gast reserveert" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Reservering Bevestigd</div>
                      <div className="text-xs text-white/60">Vandaag om 19:30 • 4 personen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Gasten vinden en reserveren direct via Google en je website.</h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Wij optimaliseren elk contactmoment. Van de eerste zoekopdracht in Maps tot de uiteindelijke klik op je reserveringsknop. Geen drempels, alleen gasten.
            </p>
            <ul className="space-y-4">
              {['Directe koppeling met Zenchef & Formitable', 'Geoptimaliseerd voor mobiel gebruik', 'Real-time beschikbaarheid sync'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <div className="w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-blue-900" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const owners = [
    { name: "Marco van den Berg", role: "Restaurant eigenaar", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Sophie de Vries", role: "Bar manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Thomas Bakker", role: "Beachclub eigenaar", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Lisa Jansen", role: "Café ondernemer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Een betrouwbare partner voor horeca in Nederland</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {owners.map((o, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
              <img 
                src={o.img} 
                alt={o.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-bold">{o.name}</div>
                <div className="text-white/60 text-sm">{o.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold mb-6">Voor elke horecazaak een oplossing</h2>
          <p className="text-xl text-gray-600">Krijg toegang tot een compleet marketingecosysteem dat meegroeit met jouw zaak.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Integrations */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-lg font-bold mb-8">Integraties</h4>
            <div className="grid grid-cols-3 gap-6 opacity-60">
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 font-bold text-[10px]">ZENCHEF</div>
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 font-bold text-[10px]">FORMITABLE</div>
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 font-bold text-[10px]">GUESTPLAN</div>
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 font-bold text-[10px]">QUANDOO</div>
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 font-bold text-[10px]">GOOGLE</div>
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 font-bold text-[10px]">INSTA</div>
            </div>
            <p className="mt-8 text-sm text-gray-500">Koppel naadloos met al je favoriete reserveringssystemen.</p>
          </div>

          {/* Support */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <h4 className="text-lg font-bold mb-6 w-full text-left">Support</h4>
            <div className="my-auto">
              <div className="text-6xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 font-medium">Persoonlijke support van een team dat horeca begrijpt.</p>
            </div>
          </div>

          {/* Developer Tools */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-8">
              <Code2 className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-bold mb-4">Developer tools</h4>
            <p className="text-gray-600 mb-8">API en koppelingen voor reserveringssystemen en dashboards.</p>
            <a href="#" className="text-blue-900 font-semibold flex items-center gap-2">
              Bekijk documentatie <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[40px] p-8 md:p-16 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-sm text-gray-500 font-medium mb-1">Totale Omzet via Ads</div>
                    <div className="text-3xl font-bold">€12.450,00</div>
                  </div>
                  <div className="text-green-600 font-bold text-sm">+24%</div>
                </div>
                <div className="flex items-end gap-2 h-40">
                  {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-50 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-blue-900 rounded-t-sm transition-all duration-500" 
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] text-gray-400 font-medium">
                  <span>JAN</span>
                  <span>MRT</span>
                  <span>MEI</span>
                  <span>JUL</span>
                  <span>SEP</span>
                  <span>NOV</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Alles op één plek met het Chef Digital dashboard</h2>
              <p className="text-xl text-gray-600 mb-8">
                Zie precies wat je advertenties opleveren. Monitor je rankings, beheer je reviews en analyseer je gastgedrag in real-time.
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-950 transition-all">
                Bekijk demo dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111] rounded-[32px] overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benieuwd hoeveel extra gasten wij voor jouw zaak kunnen realiseren?</h2>
              <p className="text-lg text-white/60 mb-10">Ons team helpt je graag met een vrijblijvend adviesgesprek op maat.</p>
              <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-950 transition-all w-fit flex items-center gap-2">
                Plan een gesprek <PhoneCall size={20} />
              </button>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Teamlid" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-white font-bold">Kevin van Rijn</div>
                <div className="text-white/60 text-sm">Horeca Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-10 tracking-tight">Vereenvoudig je marketing en groei je horecazaak</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-950 transition-all shadow-2xl shadow-blue-900/30">
            Start nu
          </button>
          <button className="bg-white text-gray-900 border border-gray-200 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-50 transition-all">
            Neem contact op met sales
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    {
      title: "Producten",
      links: ["Rankmaster", "Ads Management", "Websites", "Reputatie", "Dashboard"]
    },
    {
      title: "Resultaten",
      links: ["Case studies", "Reviews", "Statistieken", "Horeca trends"]
    },
    {
      title: "Developers",
      links: ["API Docs", "Integraties", "Webhooks", "Status"]
    },
    {
      title: "Over Chef Digital",
      links: ["Ons verhaal", "Team", "Vacatures", "Contact", "Pers"]
    },
    {
      title: "Help",
      links: ["Helpcenter", "Support", "Academy", "Community"]
    }
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          {columns.map((col, i) => (
            <div key={i}>
              <h5 className="font-bold text-gray-900 mb-6">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">C</span>
            </div>
            <span className="text-sm font-bold text-gray-900">Chef Digital</span>
            <span className="text-sm text-gray-400 ml-4">© 2026 Chef Digital B.V.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-900">
              <Globe size={16} />
              <span>Nederlands (Nederland)</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Voorwaarden</a>
              <a href="#" className="hover:text-gray-900">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <MainPlatform />
        <Features />
        <VisualSection />
        <TrustSection />
        <Solutions />
        <DashboardSection />
        <ContactCard />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
