import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Copy, Crown, Heart, Users, Home as HomeIcon, Sparkles, Flame, Dice5, GlassWater } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { GlassCard } from '../components/ui/GlassCard';
import { GradientButton } from '../components/ui/GradientButton';
import { useRoomStore } from '../store/roomStore';
import { updateRoomState, listenToRoom, joinRoom, createRoom } from '../services/roomService';
import type { Player, RelationshipMode, GameMode } from '../types';

export function Lobby() {
  const navigate = useNavigate();
  const { roomId, isHost, localPlayerId, roomData, setRoomConnection, updateRoomData, leaveRoom } = useRoomStore();

  const [joinCode, setJoinCode] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!roomId) return;
    const unsubscribe = listenToRoom(roomId, (data) => {
      updateRoomData(data);
      if (data.status === 'playing') {
        navigate('/game');
      }
    });
    return () => unsubscribe();
  }, [roomId, navigate, updateRoomData]);

  const handleCreateRoom = async () => {
    if (!playerName) return;
    setIsLoading(true);
    try {
      const hostPlayer: Player = {
        id: Math.random().toString(36).substring(7),
        name: playerName,
        gender: 'Other', // Simplified lobby setup
        onlineStatus: 'online'
      };
      const code = await createRoom(hostPlayer);
      setRoomConnection(code, true, hostPlayer.id);
    } catch (err: any) {
      alert("Failed to create room: " + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinRoom = async () => {
    if (!playerName || !joinCode) return;
    const player: Player = {
      id: Math.random().toString(36).substring(7),
      name: playerName,
      gender: 'Other',
      onlineStatus: 'online'
    };
    const success = await joinRoom(joinCode, player);
    if (success) {
      setRoomConnection(joinCode.toUpperCase(), false, player.id);
    } else {
      alert("Room not found!");
    }
  };

  const copyCode = () => {
    if (roomId) {
      navigator.clipboard.writeText(roomId);
      alert("Copied to clipboard!");
    }
  };

  const startGame = async () => {
    if (isHost && roomId && roomData?.currentMode && roomData?.relationshipMode) {
      await updateRoomState(roomId, { status: 'playing' });
    }
  };

  const setHostMode = async (mode: GameMode) => {
    if (isHost && roomId) {
      await updateRoomState(roomId, { currentMode: mode });
    }
  };

  const setHostRelMode = async (mode: RelationshipMode) => {
    if (isHost && roomId) {
      await updateRoomState(roomId, { relationshipMode: mode });
    }
  };

  if (!roomId || !roomData) {
    return (
      <PageTransition className="min-h-screen p-6 relative flex flex-col items-center">
        <div className="bg-glow-circle bg-glow-purple"></div>
        <header className="w-full max-w-md flex justify-between items-center mb-8 relative z-10">
          <button onClick={() => navigate('/')} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
             <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-2xl font-bold text-white">Online Multiplayer</h2>
          <div className="w-12"></div>
        </header>

        <main className="w-full max-w-md flex flex-col gap-6 relative z-10">
          <GlassCard className="flex flex-col gap-4">
            <h3 className="text-white/80 font-medium">Your Details</h3>
             <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
          </GlassCard>

          <GlassCard className="flex flex-col gap-4">
             <h3 className="text-white/80 font-medium">Create a Room</h3>
             <GradientButton onClick={handleCreateRoom} disabled={!playerName || isLoading}>
               {isLoading ? 'Creating...' : 'Host New Game'}
             </GradientButton>
          </GlassCard>

          <div className="text-center text-white/40">OR</div>

          <GlassCard className="flex flex-col gap-4">
             <h3 className="text-white/80 font-medium">Join a Room</h3>
             <input
                type="text"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="6-Letter Code"
                maxLength={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 uppercase text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
             <GradientButton variant="secondary" onClick={handleJoinRoom} disabled={!playerName || joinCode.length < 5}>Join Game</GradientButton>
          </GlassCard>
        </main>
      </PageTransition>
    );
  }

  const relModes: { id: RelationshipMode; icon: React.ReactNode; label: string }[] = [
    { id: 'Couple', icon: <Heart className="w-4 h-4" />, label: 'Couple' },
    { id: 'Friends', icon: <Users className="w-4 h-4" />, label: 'Friends' },
    { id: 'Family', icon: <HomeIcon className="w-4 h-4" />, label: 'Family' },
    { id: 'Party', icon: <Sparkles className="w-4 h-4" />, label: 'Party' },
  ];

  const gameModes: { id: GameMode; icon: React.ReactNode; label: string }[] = [
    { id: 'Easy', icon: <Dice5 className="w-4 h-4 text-blue-400" />, label: 'Easy' },
    { id: 'Funny', icon: <GlassWater className="w-4 h-4 text-yellow-400" />, label: 'Funny' },
    { id: 'Romantic', icon: <Heart className="w-4 h-4 text-pink-400" />, label: 'Romantic' },
    { id: 'Adults (18+)', icon: <Flame className="w-4 h-4 text-red-500" />, label: 'Adults' }
  ];

  return (
    <PageTransition className="min-h-screen p-6 relative flex flex-col items-center">
      <div className="bg-glow-circle bg-glow-purple"></div>
      
      <header className="w-full max-w-2xl flex justify-between items-center mb-6 relative z-10">
        <button onClick={() => {
           leaveRoom();
           navigate('/');
        }} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-2xl font-bold text-white">Lobby</h2>
        <div className="w-12"></div>
      </header>

      <main className="w-full max-w-2xl flex flex-col gap-6 relative z-10 pb-12">
        <GlassCard className="flex flex-col items-center justify-center p-6 gap-2 text-center">
           <h3 className="text-white/60 uppercase tracking-widest text-sm">Room Code</h3>
           <div className="text-4xl font-mono font-bold tracking-[0.2em] text-gradient cursor-pointer hover:scale-105 transition-transform" onClick={copyCode}>
             {roomId}
           </div>
           <button onClick={copyCode} className="flex items-center gap-1 text-white/40 hover:text-white transition-colors mt-1 text-sm">
             <Copy className="w-4 h-4" /> Copy
           </button>
        </GlassCard>

        {isHost ? (
          <>
            <GlassCard>
              <h3 className="text-white/80 font-medium mb-3">Relationship Mode</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {relModes.map(m => (
                  <button key={m.id} onClick={() => setHostRelMode(m.id)} className={`py-2 px-3 rounded-lg border text-sm flex items-center justify-center gap-2 ${roomData.relationshipMode === m.id ? 'bg-pink-500/30 border-pink-500 text-white' : 'border-white/10 text-white/60'}`}>
                    {m.icon} {m.label}
                  </button>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <h3 className="text-white/80 font-medium mb-3">Game Mode</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {gameModes.map(m => (
                  <button key={m.id} onClick={() => setHostMode(m.id)} className={`py-2 px-3 rounded-lg border text-sm flex items-center justify-center gap-2 ${roomData.currentMode === m.id ? 'bg-purple-500/30 border-purple-500 text-white' : 'border-white/10 text-white/60'}`}>
                    {m.icon} {m.label}
                  </button>
                ))}
              </div>
            </GlassCard>
          </>
        ) : (
          <GlassCard className="text-center py-4 text-white/70">
            <p>Relationship Mode: <strong className="text-white">{roomData.relationshipMode || 'Waiting...'}</strong></p>
            <p>Game Mode: <strong className="text-white">{roomData.currentMode || 'Waiting...'}</strong></p>
          </GlassCard>
        )}

        <div className="flex justify-between items-center px-2 mt-2">
          <span className="text-white/60 font-medium">{roomData.players.length} Players Joined</span>
        </div>

        <div className="flex flex-col gap-2 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
          {roomData.players.map((player) => (
             <GlassCard key={player.id} className="flex items-center justify-between p-3 bg-white/5">
                <div className="flex items-center gap-3">
                  {player.id === roomData.hostId && <Crown className="w-5 h-5 text-yellow-400" />}
                  <span className="text-white font-medium text-lg">{player.name}</span>
                  {player.id === localPlayerId && <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/50">You</span>}
                </div>
             </GlassCard>
          ))}
        </div>

        {isHost ? (
          <GradientButton
            onClick={startGame}
            disabled={roomData.players.length < 2 || !roomData.currentMode || !roomData.relationshipMode}
            className={`w-full py-4 mt-2 text-lg ${(roomData.players.length < 2 || !roomData.currentMode || !roomData.relationshipMode) ? 'opacity-50' : ''}`}
          >
            <Play className="w-6 h-6 fill-current" /> Start Game
          </GradientButton>
        ) : (
          <div className="text-center text-white/50 animate-pulse mt-4">
            Waiting for host to start...
          </div>
        )}
      </main>
    </PageTransition>
  );
}
