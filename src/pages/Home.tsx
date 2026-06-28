import { useNavigate } from 'react-router-dom';
import { Settings, BarChart2, Globe, Users } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { GlassCard } from '../components/ui/GlassCard';
import { useRoomStore } from '../store/roomStore';

export function Home() {
  const navigate = useNavigate();
  const { setOnlineMode } = useRoomStore();

  const handlePlayOffline = () => {
    setOnlineMode(false);
    navigate('/setup');
  };

  const handlePlayOnline = () => {
    setOnlineMode(true);
    navigate('/lobby');
  };

  return (
    <PageTransition className="min-h-screen p-6 relative flex flex-col items-center justify-center">
      <div className="bg-glow-circle bg-glow-pink"></div>
      <div className="bg-glow-circle bg-glow-purple"></div>

      {/* Header Controls */}
      <header className="absolute top-6 left-6 right-6 flex justify-between items-center max-w-4xl mx-auto z-10">
        <button onClick={() => navigate('/stats')} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <BarChart2 className="w-6 h-6 text-white/80" />
        </button>
        <button onClick={() => navigate('/settings')} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <Settings className="w-6 h-6 text-white/80" />
        </button>
      </header>

      {/* Main Title */}
      <div className="text-center z-10 mb-16 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-6 mb-4">
          <img 
            src="/homeimage.png" 
            alt="Flame Home Logo" 
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-3xl shadow-2xl shadow-pink-500/20 border-2 border-white/10" 
          />
          <h1 className="text-6xl md:text-8xl font-bold text-gradient tracking-tight">
            Flame ❤️
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-white/80 font-light mt-2">
          Create unforgettable moments.
        </p>
      </div>

      {/* Play Options */}
      <main className="w-full max-w-md flex flex-col gap-6 z-10">
        <GlassCard 
          hoverEffect 
          onClick={handlePlayOffline}
          className="flex items-center gap-6 p-6 group"
        >
          <div className="p-4 rounded-full bg-white/5 text-pink-400 group-hover:bg-pink-500/20 transition-colors">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Play Local</h3>
            <p className="text-white/60 text-sm">Pass the device around with friends.</p>
          </div>
        </GlassCard>

        <GlassCard 
          hoverEffect 
          onClick={handlePlayOnline}
          className="flex items-center gap-6 p-6 group"
        >
          <div className="p-4 rounded-full bg-white/5 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Play Online</h3>
            <p className="text-white/60 text-sm">Join via room code from any device.</p>
          </div>
        </GlassCard>
      </main>
    </PageTransition>
  );
}
