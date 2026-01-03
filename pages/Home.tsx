import React from 'react';
import SolarAdvisor from '../components/SolarAdvisor';
import { TileDivider } from '../components/AndalusianTile';
import { ArrowRight, CheckCircle2, Battery, Zap, Sun, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image - Andalusian White Village + Sun */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/seed/andalusia-solar/1920/1080" 
                alt="Pueblo blanco andaluz con sol" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-andalusia-dark/90 via-andalusia-dark/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fadeInUp">
                <div className="inline-block bg-andalusia-yellow text-andalusia-dark font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    Líderes en Andalucía
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                    Tu Energía, Tu Sol, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-andalusia-yellow to-orange-400">Tu Ahorro.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                    Aprovecha las más de 3.000 horas de sol de nuestra tierra. Reduce tu factura hasta un 90% con instalaciones diseñadas para el clima andaluz.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contacto" className="bg-andalusia-yellow hover:bg-yellow-500 text-andalusia-dark font-bold py-4 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2">
                        Solicitar Estudio Gratis <ArrowRight size={20}/>
                    </Link>
                    <Link to="/proyectos" className="bg-transparent border-2 border-white hover:bg-white hover:text-andalusia-dark text-white font-semibold py-4 px-8 rounded-lg transition-all flex items-center justify-center">
                        Ver Instalaciones
                    </Link>
                </div>
                
                <div className="pt-8 flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="text-andalusia-green"/> Garantía 25 años
                    </div>
                    <div className="flex items-center gap-2">
                        <Sun className="text-andalusia-yellow"/> Instaladores Locales
                    </div>
                </div>
            </div>

            {/* AI Advisor Widget in Hero */}
            <div className="hidden lg:block animate-fadeInRight delay-200">
                <SolarAdvisor />
            </div>
        </div>
      </section>

      {/* Mobile Advisor Visibility */}
      <div className="lg:hidden p-6 md:px-12 -mt-20 relative z-20 container mx-auto">
        <SolarAdvisor />
      </div>

      <TileDivider />

      {/* Why Choose Us (Redesigned) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-andalusia-dark mb-4">¿Por qué elegir TopSolar?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    No somos una multinacional impersonal. Somos expertos locales que entienden las necesidades energéticas de los hogares andaluces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Zap className="w-10 h-10 text-andalusia-yellow" />,
                        title: "Ahorro Garantizado",
                        desc: "Reduce tu factura drásticamente desde el primer día. Amortización media en 4-5 años."
                    },
                    {
                        icon: <Battery className="w-10 h-10 text-andalusia-green" />,
                        title: "Independencia",
                        desc: "Olvídate de las subidas de la luz. Gestiona tu propia energía con baterías de última generación."
                    },
                    {
                        icon: <Sun className="w-10 h-10 text-andalusia-blue" />,
                        title: "Clima Ideal",
                        desc: "Diseñamos el sistema específicamente para resistir y aprovechar el calor del sur."
                    }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-stone-50 rounded-xl hover:shadow-xl transition-shadow border border-stone-100 group">
                        <div className="mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-andalusia-blue text-white">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Nuestras Soluciones</h2>
                    <p className="text-blue-200">Adaptadas a cada tipo de vivienda y consumo.</p>
                </div>
                <Link to="/servicios" className="hidden md:inline-flex items-center gap-2 text-andalusia-yellow hover:text-white transition font-semibold mt-4 md:mt-0">
                    Ver todos los servicios <ArrowRight size={20}/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition cursor-pointer">
                    <h3 className="text-2xl font-bold mb-4">Residencial 3kW - 5kW</h3>
                    <p className="mb-6 text-blue-100">Ideal para familias de 3-4 personas. Cubre aire acondicionado y electrodomésticos habituales.</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-2 items-center"><CheckCircle2 size={18} className="text-andalusia-yellow"/> Paneles Monocristalinos Tier 1</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 size={18} className="text-andalusia-yellow"/> Inversor Híbrido incluido</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 size={18} className="text-andalusia-yellow"/> Tramitación de subvenciones</li>
                    </ul>
                    <div className="text-2xl font-bold text-andalusia-yellow mb-2">Desde 3.000€</div>
                </div>
                <div className="bg-white text-andalusia-dark p-8 rounded-2xl shadow-xl relative overflow-hidden transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-andalusia-yellow text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Más Popular</div>
                    <h3 className="text-2xl font-bold mb-4">Residencial Premium + Batería</h3>
                    <p className="mb-6 text-gray-600">Máxima independencia. Almacena energía para la noche y días nublados.</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-2 items-center"><CheckCircle2 size={18} className="text-andalusia-blue"/> 10-15 Paneles de Alta Eficiencia</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 size={18} className="text-andalusia-blue"/> Batería 5kWh - 10kWh</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 size={18} className="text-andalusia-blue"/> Monitorización por App móvil</li>
                    </ul>
                    <div className="text-2xl font-bold text-andalusia-blue mb-2">Desde 8.000€</div>
                </div>
            </div>
            
             <div className="mt-8 text-center md:hidden">
                <Link to="/servicios" className="inline-flex items-center gap-2 text-andalusia-yellow hover:text-white transition font-semibold">
                    Ver todos los servicios <ArrowRight size={20}/>
                </Link>
             </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl text-center border-t-8 border-andalusia-yellow max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-andalusia-dark mb-6">
                    ¿Listo para dejar de pagar de más?
                </h2>
                <p className="text-xl text-gray-600 mb-10">
                    Nos encargamos de todo: diseño, instalación y legalización. Tú solo disfruta del ahorro.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <Link to="/contacto" className="bg-andalusia-yellow text-andalusia-dark text-lg font-bold py-4 px-10 rounded-lg hover:bg-yellow-500 shadow-lg transition-transform hover:-translate-y-1">
                        Pedir Presupuesto Gratuito
                    </Link>
                    <a href="tel:+34664490778" className="bg-white border-2 border-gray-200 text-gray-700 text-lg font-bold py-4 px-10 rounded-lg hover:border-andalusia-dark hover:text-andalusia-dark transition-colors flex items-center justify-center gap-2">
                        <Phone size={20} /> Llamar Ahora
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;