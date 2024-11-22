import React, { useEffect, useState } from 'react';
import { Timer, Mail, ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('2024-12-31 23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription here
    setEmail('');
    alert('¡Gracias por suscribirte!');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Timer className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Próximamente
          </h1>
          <p className="text-xl text-gray-200 mb-12">
            Estamos trabajando arduamente para traerte algo increíble. ¡Mantente atento!
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: days, label: 'Días' },
              { value: hours, label: 'Horas' },
              { value: minutes, label: 'Minutos' },
              { value: seconds, label: 'Segundos' }
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-4xl font-bold text-yellow-400">
                  {item.value}
                </div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors"
              >
                Notifícame
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;