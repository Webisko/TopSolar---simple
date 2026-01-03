import React from 'react';
import { Check, Settings, Wrench, Home, Factory } from 'lucide-react';
import { TileDivider } from '../components/AndalusianTile';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-6">
      <div className="bg-andalusia-dark py-16 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Soluciones integrales de energía fotovoltaica llave en mano en toda Andalucía.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Residential */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
                 <div className="inline-block p-3 bg-blue-100 rounded-lg text-andalusia-blue mb-4">
                    <Home size={32} />
                 </div>
                 <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Autoconsumo Residencial</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                    Transforma tu tejado en una fuente de ingresos. Realizamos estudios personalizados para viviendas unifamiliares y comunidades de vecinos.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {[
                        "Estudio de sombras y rendimiento solar",
                        "Tramitación de licencias de obra",
                        "Legalización en Industria",
                        "Gestión de bonificaciones IBI (según municipio)"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check className="text-andalusia-green shrink-0 mt-1" size={20} />
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                 </ul>
                 <Link to="/contacto" className="text-andalusia-blue font-bold hover:underline">Solicitar estudio residencial &rarr;</Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
                <img src="https://picsum.photos/seed/solar-house/800/600" alt="Instalación casa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
        </div>

        <TileDivider />

        {/* Industrial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 mb-12">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
                <img src="https://picsum.photos/seed/solar-factory/800/600" alt="Nave industrial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="order-1 md:order-2">
                 <div className="inline-block p-3 bg-yellow-100 rounded-lg text-yellow-700 mb-4">
                    <Factory size={32} />
                 </div>
                 <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Empresas e Industrial</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                    Reduce los costes fijos de tu negocio. Instalaciones de gran escala para naves industriales, sector agrario y oficinas.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {[
                        "Amortización acelerada",
                        "Monitorización de consumo en tiempo real",
                        "Financiación a medida para empresas",
                        "Mantenimiento preventivo incluido primer año"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check className="text-andalusia-yellow shrink-0 mt-1" size={20} />
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                 </ul>
                 <Link to="/contacto" className="text-andalusia-yellow font-bold hover:underline">Consultar plan para empresas &rarr;</Link>
            </div>
        </div>

        {/* Maintenance Cards */}
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-serif font-bold mb-4">Mantenimiento y Extras</h3>
                <p className="text-gray-600">Para que tu instalación rinda siempre al 100%</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Wrench className="text-andalusia-blue mb-4" size={32}/>
                    <h4 className="font-bold text-lg mb-2">Limpieza de Paneles</h4>
                    <p className="text-sm text-gray-500">La calima y el polvo reducen el rendimiento. Limpieza profesional con agua osmotizada.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Settings className="text-andalusia-blue mb-4" size={32}/>
                    <h4 className="font-bold text-lg mb-2">Revisión Técnica</h4>
                    <p className="text-sm text-gray-500">Revisión anual de inversor, cableado y estructuras para garantizar seguridad.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Check className="text-andalusia-blue mb-4" size={32}/>
                    <h4 className="font-bold text-lg mb-2">Ampliaciones</h4>
                    <p className="text-sm text-gray-500">¿Necesitas más potencia? Añadimos paneles o baterías a tu instalación existente.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;