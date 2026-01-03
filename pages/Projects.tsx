import React from 'react';
import { MapPin } from 'lucide-react';

const PROJECTS = [
    {
        id: 1,
        city: "Dos Hermanas, Sevilla",
        type: "Residencial",
        kw: "5.5kW",
        desc: "Instalación en vivienda unifamiliar con pérgola solar.",
        img: "https://picsum.photos/seed/solar1/600/400"
    },
    {
        id: 2,
        city: "Marbella, Málaga",
        type: "Residencial Premium",
        kw: "10kW + Batería",
        desc: "Sistema completo con batería Huawei Luna2000 para desconexión parcial.",
        img: "https://picsum.photos/seed/solar2/600/400"
    },
    {
        id: 3,
        city: "Jerez de la Frontera, Cádiz",
        type: "Industrial",
        kw: "45kW",
        desc: "Instalación sobre cubierta de nave logística para autoconsumo industrial.",
        img: "https://picsum.photos/seed/solar3/600/400"
    },
    {
        id: 4,
        city: "Antequera, Málaga",
        type: "Residencial",
        kw: "4kW",
        desc: "Integración estética en tejado de teja tradicional.",
        img: "https://picsum.photos/seed/solar4/600/400"
    },
    {
        id: 5,
        city: "Aljarafe, Sevilla",
        type: "Comunidad",
        kw: "15kW",
        desc: "Autoconsumo compartido para comunidad de 8 vecinos.",
        img: "https://picsum.photos/seed/solar5/600/400"
    },
    {
        id: 6,
        city: "Motril, Granada",
        type: "Agrícola",
        kw: "20kW",
        desc: "Bombeo solar para riego de finca de aguacates.",
        img: "https://picsum.photos/seed/solar6/600/400"
    }
];

const Projects: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-6">
        <div className="container mx-auto px-6 md:px-12 py-12">
            <div className="text-center mb-16">
                <span className="text-andalusia-blue font-bold tracking-wider text-sm uppercase">Nuestra Garantía es nuestro trabajo</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Proyectos Realizados</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Hemos instalado más de 5MW de potencia en toda Andalucía. Desde pequeñas viviendas hasta grandes naves industriales.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((proj) => (
                    <div key={proj.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={proj.img} 
                                alt={`Instalación solar en ${proj.city}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-andalusia-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                {proj.kw}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-andalusia-blue text-sm font-semibold mb-2">
                                <MapPin size={16} /> {proj.city}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{proj.type}</h3>
                            <p className="text-gray-500 text-sm line-clamp-2">{proj.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 bg-andalusia-yellow rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-andalusia-dark mb-2">¿Quieres ver una instalación cerca de ti?</h3>
                    <p className="text-stone-800">Llámanos y te mostraremos referencias en tu zona.</p>
                </div>
                <a href="tel:+34664490778" className="bg-white text-andalusia-dark px-8 py-3 rounded-lg font-bold shadow hover:bg-stone-50 transition">
                    Contactar Ahora
                </a>
            </div>
        </div>
    </div>
  );
};

export default Projects;