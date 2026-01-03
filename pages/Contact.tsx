import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { AndalusianTile } from '../components/AndalusianTile';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-stone-50">
        {/* Header Map Section */}
        <div className="w-full h-64 bg-gray-300 relative">
            <img 
                src="https://picsum.photos/seed/andalusia-map/1920/400" 
                className="w-full h-full object-cover opacity-60 grayscale" 
                alt="Mapa Andalucía"
            />
            <div className="absolute inset-0 bg-andalusia-blue/80 flex items-center justify-center">
                <h1 className="text-4xl font-serif font-bold text-white">Contacta con Nosotros</h1>
            </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 -mt-20 pb-20 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                {/* Contact Info Sidebar */}
                <div className="lg:w-1/3 bg-andalusia-dark text-white p-10 relative overflow-hidden">
                     <AndalusianTile className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 text-white" />
                    
                    <h3 className="text-2xl font-serif font-bold mb-8 text-andalusia-yellow">Información</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Phone className="text-andalusia-yellow" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Teléfono</p>
                                <p className="font-semibold text-lg">+34 664 490 778</p>
                                <p className="text-xs text-gray-400 mt-1">Lunes a Viernes: 9h - 19h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Mail className="text-andalusia-yellow" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                                <p className="font-semibold text-lg">info@topsolar.es</p>
                                <p className="text-xs text-gray-400 mt-1">Respuesta en menos de 24h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <MapPin className="text-andalusia-yellow" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Zona de Servicio</p>
                                <p className="font-semibold text-lg">Toda Andalucía</p>
                                <p className="text-sm text-gray-400 mt-1">Sede central en Sevilla. Delegaciones en Málaga y Cádiz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700">
                         <div className="bg-gradient-to-r from-andalusia-yellow to-orange-500 p-6 rounded-xl text-andalusia-dark">
                            <h4 className="font-bold flex items-center gap-2 mb-2"><Clock size={18}/> Oferta Especial</h4>
                            <p className="text-sm font-medium">Contrata este mes y obtén un 10% de descuento en tu primera limpieza de paneles.</p>
                         </div>
                    </div>
                </div>

                {/* Form */}
                <div className="lg:w-2/3 p-10 md:p-14">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <Send className="text-green-600 w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">¡Mensaje Enviado!</h3>
                            <p className="text-gray-600 max-w-md">
                                Gracias por contactar con TopSolar. Un asesor técnico revisará tu solicitud y te contactará en breve (normalmente en menos de 24 horas).
                            </p>
                            <button onClick={() => setSubmitted(false)} className="mt-8 text-andalusia-blue font-bold hover:underline">
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Solicita tu Estudio Gratuito</h2>
                            <p className="text-gray-500 mb-8">Déjanos tus datos y te llamaremos para diseñar tu instalación solar a medida.</p>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                                        <input 
                                            type="text" 
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-andalusia-yellow focus:border-transparent outline-none transition bg-stone-50"
                                            placeholder="Juan Pérez"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                                        <input 
                                            type="tel" 
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-andalusia-yellow focus:border-transparent outline-none transition bg-stone-50"
                                            placeholder="600 000 000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-andalusia-yellow focus:border-transparent outline-none transition bg-stone-50"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje / Dudas</label>
                                    <textarea 
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-andalusia-yellow focus:border-transparent outline-none transition bg-stone-50"
                                        placeholder="Estoy interesado en una instalación para mi casa en..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-andalusia-yellow text-andalusia-dark font-bold text-lg py-4 rounded-lg hover:bg-yellow-500 shadow-md hover:shadow-lg transition-all"
                                >
                                    Enviar Solicitud
                                </button>
                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Al enviar este formulario aceptas nuestra política de privacidad y el tratamiento de tus datos para el presupuesto.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;