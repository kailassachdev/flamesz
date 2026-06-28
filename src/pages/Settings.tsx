
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Volume2, Sparkles, Trash2, ShieldAlert } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { GlassCard } from '../components/ui/GlassCard';
import { GradientButton } from '../components/ui/GradientButton';
import { useSettingsStore, usePlayerStore, useGameStore, useStatsStore } from '../store';

export function Settings() {
  const navigate = useNavigate();
  const { darkTheme, animations, sound, toggleDarkTheme, toggleAnimations, toggleSound, resetSettings } = useSettingsStore();
  const { resetPlayers } = usePlayerStore();
  const { resetGameSession, resetFavorites } = useGameStore();
  const { resetStats } = useStatsStore();

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      resetPlayers();
      resetGameSession();
      resetFavorites();
      resetStats();
      resetSettings();
      alert('All data has been reset.');
    }
  };

  return (
    <PageTransition className="min-h-screen p-6 relative flex flex-col items-center">
      <div className="bg-glow-circle bg-glow-pink"></div>

      <header className="w-full max-w-2xl flex justify-between items-center mb-8 relative z-10">
        <button onClick={() => navigate('/')} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <div className="w-12"></div>
      </header>

      <main className="w-full max-w-2xl flex flex-col gap-6 relative z-10">
        <GlassCard className="flex flex-col gap-4 p-6">
          <h3 className="text-xl font-semibold text-white/80 mb-2">Preferences</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Moon className="w-5 h-5 text-purple-400" />
              <span>Dark Theme</span>
            </div>
            <button 
              onClick={toggleDarkTheme}
              className={`w-12 h-6 rounded-full transition-colors relative ${darkTheme ? 'bg-pink-500' : 'bg-white/20'}`}
            >
              <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${darkTheme ? 'translate-x-6' : ''}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span>Animations</span>
            </div>
            <button 
              onClick={toggleAnimations}
              className={`w-12 h-6 rounded-full transition-colors relative ${animations ? 'bg-pink-500' : 'bg-white/20'}`}
            >
              <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${animations ? 'translate-x-6' : ''}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Volume2 className="w-5 h-5 text-green-400" />
              <span>Sound Effects</span>
            </div>
            <button 
              onClick={toggleSound}
              className={`w-12 h-6 rounded-full transition-colors relative ${sound ? 'bg-pink-500' : 'bg-white/20'}`}
            >
              <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${sound ? 'translate-x-6' : ''}`} />
            </button>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col gap-4 p-6 border-red-500/20">
          <h3 className="text-xl font-semibold text-white/80 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-400" /> Danger Zone
          </h3>
          <p className="text-white/50 text-sm mb-2">
            Resetting your data will clear all players, game history, and favorites.
          </p>
          <GradientButton variant="danger" onClick={handleResetData} className="w-full">
            <Trash2 className="w-5 h-5" /> Reset All Data
          </GradientButton>
        </GlassCard>
      </main>
    </PageTransition>
  );
}
