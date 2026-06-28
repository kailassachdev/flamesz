import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Flame, Heart, Star } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { GlassCard } from '../components/ui/GlassCard';
import { useStatsStore } from '../store';

export function Stats() {
  const navigate = useNavigate();
  const { stats } = useStatsStore();

  return (
    <PageTransition className="min-h-screen p-6 relative flex flex-col items-center">
      <div className="bg-glow-circle bg-glow-purple"></div>

      <header className="w-full max-w-2xl flex justify-between items-center mb-8 relative z-10">
        <button onClick={() => navigate('/')} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-2xl font-bold text-white">Your Stats</h2>
        <div className="w-12"></div>
      </header>

      <main className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        <GlassCard className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="p-4 rounded-full bg-white/5 text-yellow-400">
            <Trophy className="w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-1">{stats.gamesPlayed}</h3>
            <p className="text-white/60 text-sm uppercase tracking-widest">Games Played</p>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="p-4 rounded-full bg-white/5 text-pink-400">
            <Heart className="w-10 h-10" />
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{stats.questionsCompleted}</div>
            <div className="text-white/60 text-sm">Total Questions</div>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="p-4 rounded-full bg-white/5 text-red-500">
            <Flame className="w-10 h-10" />
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{stats.turnsPlayed}</div>
            <div className="text-white/60 text-sm">Turns Played</div>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center p-8 gap-4">
          <div className="p-4 rounded-full bg-white/5 text-purple-400">
            <Star className="w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-1">{stats.favoriteCategory || 'None Yet'}</h3>
            <p className="text-white/60 text-sm uppercase tracking-widest">Favorite Category</p>
          </div>
        </GlassCard>
      </main>
    </PageTransition>
  );
}
