import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Shuffle, Play, Heart, Users, Home as HomeIcon, Sparkles, Flame, Dice5, GlassWater } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { GlassCard } from '../components/ui/GlassCard';
import { GradientButton } from '../components/ui/GradientButton';
import { usePlayerStore, useGameStore, useStatsStore } from '../store';
import type { Gender, RelationshipMode, GameMode } from '../types';

export function Setup() {
  const navigate = useNavigate();
  const { players, addPlayer, removePlayer, randomizeOrder } = usePlayerStore();
  const { currentMode, relationshipMode, setRelationshipMode, setMode, resetGameSession } = useGameStore();
  const { incrementGames } = useStatsStore();
  
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerGender, setNewPlayerGender] = useState<Gender>('Male');

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlayerName.trim()) return;
    addPlayer({
      id: Math.random().toString(36).substring(7),
      name: newPlayerName.trim(),
      gender: newPlayerGender,
    });
    setNewPlayerName('');
  };

  const handleStartGame = () => {
    if (players.length < 2) return;
    if (!relationshipMode || !currentMode) return;
    resetGameSession();
    incrementGames();
    navigate('/game');
  };

  const relModes: { id: RelationshipMode; icon: React.ReactNode; label: string }[] = [
    { id: 'Couple', icon: <Heart className="w-5 h-5" />, label: 'Couple ❤️' },
    { id: 'Friends', icon: <Users className="w-5 h-5" />, label: 'Friends 🎉' },
    { id: 'Family', icon: <HomeIcon className="w-5 h-5" />, label: 'Family 👨👩👧' },
    { id: 'Party', icon: <Sparkles className="w-5 h-5" />, label: 'Party 🍻' },
  ];

  const gameModes: { id: GameMode; icon: React.ReactNode; label: string }[] = [
    { id: 'Easy', icon: <Dice5 className="w-5 h-5 text-blue-400" />, label: 'Easy' },
    { id: 'Funny', icon: <GlassWater className="w-5 h-5 text-yellow-400" />, label: 'Funny' },
    { id: 'Romantic', icon: <Heart className="w-5 h-5 text-pink-400" />, label: 'Romantic' },
    { id: 'Adults (18+)', icon: <Flame className="w-5 h-5 text-red-500" />, label: 'Adults (18+)' }
  ];

  return (
    <PageTransition className="min-h-screen p-6 relative flex flex-col items-center">
      <div className="bg-glow-circle bg-glow-pink"></div>
      
      <header className="w-full max-w-2xl flex justify-between items-center mb-6 relative z-10">
        <button onClick={() => navigate('/')} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-2xl font-bold text-white">Local Setup</h2>
        <div className="w-12"></div>
      </header>

      <main className="w-full max-w-2xl flex flex-col gap-6 relative z-10 pb-12">
        {/* Relationship Mode Selection */}
        <GlassCard>
          <h3 className="text-white/80 font-medium mb-3">Who are you playing with?</h3>
          <div className="grid grid-cols-2 gap-3">
            {relModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setRelationshipMode(mode.id)}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                  relationshipMode === mode.id
                    ? 'bg-pink-500/30 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                    : 'border-white/10 text-white/60 hover:bg-white/10'
                }`}
              >
                {mode.icon}
                <span className="font-medium">{mode.label}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Game Mode Selection */}
        <GlassCard>
          <h3 className="text-white/80 font-medium mb-3">Select Game Mode</h3>
          <div className="grid grid-cols-2 gap-3">
            {gameModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setMode(mode.id)}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                  currentMode === mode.id
                    ? 'bg-purple-500/30 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'border-white/10 text-white/60 hover:bg-white/10'
                }`}
              >
                {mode.icon}
                <span className="font-medium">{mode.label}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Player Addition Form */}
        <GlassCard>
          <form onSubmit={handleAddPlayer} className="flex flex-col gap-4">
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              placeholder="Enter player name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
            <div className="flex gap-2">
              {(['Male', 'Female', 'Other'] as Gender[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setNewPlayerGender(g)}
                  className={`flex-1 py-2 rounded-xl border transition-all ${
                    newPlayerGender === g
                      ? 'bg-blue-500/30 border-blue-500 text-white'
                      : 'border-white/10 text-white/50 hover:bg-white/5'
                  }`}
                >
                  {g === 'Male' ? '👨 Male' : g === 'Female' ? '👩 Female' : '🧑 Other'}
                </button>
              ))}
            </div>
            <GradientButton type="submit" variant="secondary" className="w-full py-3">
              <Plus className="w-5 h-5" /> Add Player
            </GradientButton>
          </form>
        </GlassCard>

        {/* Player List */}
        <div className="flex justify-between items-center px-2 mt-2">
          <span className="text-white/60 font-medium">{players.length} Players</span>
          {players.length > 1 && (
            <button onClick={randomizeOrder} className="text-pink-400 flex items-center gap-1 hover:text-pink-300 transition-colors text-sm font-medium">
              <Shuffle className="w-4 h-4" /> Randomize
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
          {players.map((player, index) => (
            <GlassCard key={player.id} className="flex items-center justify-between p-4 py-3 bg-white/5">
              <div className="flex items-center gap-4">
                <span className="text-white/40 font-mono text-sm w-4">{index + 1}</span>
                <span className="text-xl">{player.gender === 'Male' ? '👨' : player.gender === 'Female' ? '👩' : '🧑'}</span>
                <span className="text-white font-medium text-lg">{player.name}</span>
              </div>
              <button
                onClick={() => removePlayer(player.id)}
                className="p-2 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </GlassCard>
          ))}
          {players.length === 0 && (
            <div className="text-center text-white/40 py-8">
              Add at least two players to start the game.
            </div>
          )}
        </div>

        <GradientButton
          onClick={handleStartGame}
          disabled={players.length < 2 || !relationshipMode || !currentMode}
          className={`w-full py-4 mt-2 text-lg ${
            (players.length < 2 || !relationshipMode || !currentMode) ? 'opacity-50 cursor-not-allowed grayscale' : ''
          }`}
        >
          <Play className="w-6 h-6 fill-current" /> Start Game
        </GradientButton>
      </main>
    </PageTransition>
  );
}
