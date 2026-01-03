import React, { useState } from 'react';
import { getSolarAdvice } from '../services/geminiService';
import { Sparkles, Sun, MapPin, Euro } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SolarAdvisor: React.FC = () => {
  const [location, setLocation] = useState('');
  const [bill, setBill] = useState<number | ''>('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !bill) return;

    setLoading(true);
    const result = await getSolarAdvice(location, Number(bill));
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-andalusia-yellow/30">
      <div className="bg-andalusia-blue p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold flex items-center gap-2">
            <Sparkles className="text-andalusia-yellow" />
            Asesor Solar IA
            </h3>
            <p className="text-blue-100 mt-2">
            Descubre cuánto puedes ahorrar aprovechando el sol de Andalucía. Cálculo instantáneo.
            </p>
        </div>
        <Sun className="absolute -right-10 -top-10 w-40 h-40 text-white/10 animate-spin-slow" />
      </div>

      <div className="p-6 md:p-8">
        {!advice ? (
          <form onSubmit={handleConsult} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Dónde vives? (Municipio)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej. Antequera, Sevilla, Mijas..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-andalusia-yellow focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Factura media mensual (€)
              </label>
              <div className="relative">
                <Euro className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  required
                  min="1"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  placeholder="Ej. 120"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-andalusia-yellow focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-andalusia-yellow hover:bg-yellow-500 text-andalusia-dark font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-andalusia-dark border-t-transparent rounded-full animate-spin"></div>
                  Calculando con el Sol...
                </>
              ) : (
                'Calcular Ahorro Ahora'
              )}
            </button>
          </form>
        ) : (
          <div className="animate-fadeIn">
            <div className="prose prose-sm md:prose-base text-gray-700 mb-6 bg-stone-50 p-4 rounded-lg border-l-4 border-andalusia-green">
              <ReactMarkdown>{advice}</ReactMarkdown>
            </div>
            <button
              onClick={() => setAdvice('')}
              className="text-andalusia-blue underline text-sm font-medium hover:text-blue-800"
            >
              Hacer otro cálculo
            </button>
            <div className="mt-6">
                <a href="#contacto" className="block w-full text-center bg-andalusia-green text-white font-bold py-3 rounded-lg hover:bg-green-700 transition shadow-md">
                    Solicitar Presupuesto Formal
                </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarAdvisor;