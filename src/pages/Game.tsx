import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flame, Dice5, SkipForward, ArrowLeft, Users } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { GlassCard } from '../components/ui/GlassCard';
import { GradientButton } from '../components/ui/GradientButton';
import { usePlayerStore, useGameStore, useStatsStore } from '../store';
import { useRoomStore } from '../store/roomStore';
import { questions } from '../data/questions';
import { filterQuestions, parsePrompt } from '../utils/engine';
import { updateRoomState, listenToRoom } from '../services/roomService';
import type { QuestionType } from '../types';

export function Game() {
  const navigate = useNavigate();
  
  // Local stores
  const localPlayers = usePlayerStore(s => s.players);
  const localGame = useGameStore();
  
  // Online stores
  const { isOnlineMode, roomId, roomData, updateRoomData, leaveRoom, localPlayerId } = useRoomStore();
  const { incrementQuestions } = useStatsStore();
  
  // Facade to read state based on mode
  const players = isOnlineMode ? (roomData?.players || []) : localPlayers;
  const currentMode = isOnlineMode ? roomData?.currentMode : localGame.currentMode;
  const relationshipMode = isOnlineMode ? roomData?.relationshipMode : localGame.relationshipMode;
  const currentPlayerIndex = isOnlineMode ? (roomData?.currentPlayerIndex || 0) : localGame.currentPlayerIndex;
  const usedQuestionIds = isOnlineMode ? (roomData?.usedQuestionIds || []) : localGame.usedQuestionIds;
  const activeQuestion = isOnlineMode ? roomData?.activeQuestion : localGame.activeQuestion;
  const isFlipped = isOnlineMode ? (roomData?.isFlipped || false) : localGame.isFlipped;

  const currentPlayer = players[currentPlayerIndex];
  
  // Local parsing state since parsePrompt is deterministic per device anyway, or we sync the parsed text.
  // Syncing parsed text is safer so everyone sees the exact same names.
  const [parsedText, setParsedText] = useState<string>('');

  useEffect(() => {
    if (activeQuestion && currentPlayer) {
      setParsedText(parsePrompt(activeQuestion.text, currentPlayer, players, roomData?.hostId));
    }
  }, [activeQuestion, currentPlayer, players, roomData?.hostId]);

  useEffect(() => {
    if (isOnlineMode && roomId) {
      const unsubscribe = listenToRoom(roomId, (data) => {
        updateRoomData(data);
      });
      return () => unsubscribe();
    }
  }, [isOnlineMode, roomId, updateRoomData]);

  // Only the active player (or local player) can draw questions.
  const canControl = isOnlineMode ? (currentPlayer.id === localPlayerId) : true;

  const availableQuestions = useMemo(() => {
    let filtered = filterQuestions(questions, players.length, relationshipMode || null, usedQuestionIds);
    if (currentMode === 'Adults (18+)') filtered = filtered.filter(q => q.category === 'Adults' || q.category === 'Flirty');
    else if (currentMode === 'Couples') filtered = filtered.filter(q => q.category === 'Couples' || q.category === 'Romantic');
    else if (currentMode === 'Funny') filtered = filtered.filter(q => q.category === 'Funny' || q.category === 'Embarrassing');
    
    if (filtered.length === 0) filtered = questions.filter(q => q.minPlayers <= players.length && q.maxPlayers >= players.length);
    return filtered;
  }, [currentMode, relationshipMode, players.length, usedQuestionIds]);

  const drawQuestion = async (type: QuestionType | 'random' | 'group') => {
    if (!canControl) return;
    
    let pool = availableQuestions;
    if (type !== 'random') {
      if (type === 'group') pool = pool.filter(q => q.targetType === 'everyone' || q.targetType === 'group');
      else pool = pool.filter(q => q.type === type && q.targetType !== 'group');
    }
    if (pool.length === 0) pool = availableQuestions;

    const randomQ = pool[Math.floor(Math.random() * pool.length)];
    if (randomQ) {
      if (isOnlineMode && roomId) {
        await updateRoomState(roomId, {
          activeQuestion: randomQ,
          isFlipped: true,
          usedQuestionIds: [...usedQuestionIds, randomQ.id]
        });
      } else {
        localGame.setActiveQuestion(randomQ);
        localGame.setIsFlipped(true);
        localGame.markQuestionUsed(randomQ.id);
      }
      incrementQuestions();
    }
  };

  const handleNextPlayer = async () => {
    if (!canControl) return;
    
    let next = (currentPlayerIndex + 1) % players.length;
    // Fair turn logic
    const lastPlayerIdx = isOnlineMode ? (roomData?.lastPlayerIndex || -1) : localGame.lastPlayerIndex;
    if (players.length > 2 && next === lastPlayerIdx) {
      next = (next + 1) % players.length;
    }

    if (isOnlineMode && roomId) {
      await updateRoomState(roomId, {
        isFlipped: false,
        lastPlayerIndex: currentPlayerIndex,
        currentPlayerIndex: next,
        activeQuestion: null
      });
    } else {
      localGame.setIsFlipped(false);
      setTimeout(() => {
        localGame.setActiveQuestion(null);
        localGame.nextTurn(players.length);
      }, 400);
    }
  };

  const quitGame = () => {
    if (isOnlineMode) {
      leaveRoom(); // Keep it simple, leave lobby entirely
      navigate('/');
    } else {
      navigate('/');
    }
  };

  if (!currentPlayer) return null;

  return (
    <PageTransition className="min-h-screen p-6 relative flex flex-col items-center justify-center">
      <div className="bg-glow-circle bg-glow-pink"></div>
      
      <header className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 max-w-4xl mx-auto w-[calc(100%-3rem)]">
         <button onClick={quitGame} className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white font-medium shadow-lg flex gap-2">
          <span>{currentMode}</span>
          <span className="text-white/40">|</span>
          <span className="text-pink-300">{relationshipMode}</span>
          {isOnlineMode && <span className="text-green-400 ml-2">Online ({players.length})</span>}
        </div>
        <div className="w-12" />
      </header>

      <main className="w-full max-w-md flex flex-col items-center gap-8 relative z-10 w-full mt-16">
        <div className="text-center w-full">
          <motion.div 
             key={currentPlayer.id}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-block px-8 py-3 bg-white/5 border border-white/10 rounded-2xl mb-2 backdrop-blur-sm"
          >
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              {currentPlayer.name}'s Turn
            </span>
          </motion.div>
        </div>

        <div className="relative w-full aspect-[3/4] perspective-1000">
          <AnimatePresence mode="wait">
            {!isFlipped ? (
              <motion.div
                key="front"
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -180, opacity: 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="absolute inset-0 backface-hidden"
              >
                <GlassCard className="w-full h-full flex flex-col items-center justify-center gap-4 border-white/20 bg-white/5 shadow-2xl p-6">
                  {canControl ? (
                    <>
                      <GradientButton size="lg" className="w-full py-5 text-xl shadow-pink-500/30" onClick={() => drawQuestion('truth')}>
                        <Heart className="w-6 h-6" /> Truth
                      </GradientButton>
                      <GradientButton variant="danger" size="lg" className="w-full py-5 text-xl shadow-red-500/30" onClick={() => drawQuestion('dare')}>
                        <Flame className="w-6 h-6" /> Dare
                      </GradientButton>
                      <div className="grid grid-cols-2 gap-3 w-full mt-4">
                        <GradientButton variant="secondary" size="sm" className="py-4" onClick={() => drawQuestion('random')}>
                          <Dice5 className="w-4 h-4" /> Random
                        </GradientButton>
                        {players.length > 2 && (
                          <GradientButton variant="secondary" size="sm" className="py-4" onClick={() => drawQuestion('group')}>
                            <Users className="w-4 h-4" /> Group
                          </GradientButton>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-white/50 animate-pulse">
                      Waiting for {currentPlayer.name} to choose...
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="back"
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -180, opacity: 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="absolute inset-0 backface-hidden"
              >
                <GlassCard className={`w-full h-full flex flex-col items-center p-8 border-t border-l border-white/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-600/20`}>
                  <div className="flex-1 flex flex-col items-center justify-center w-full text-center gap-6 mt-8">
                    <span className="text-sm font-bold uppercase tracking-widest text-pink-400">
                      {activeQuestion?.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                      "{parsedText}"
                    </h3>
                  </div>
                  {canControl && (
                    <GradientButton variant="secondary" className="w-full py-4 mt-8" onClick={handleNextPlayer}>
                      Next Player <SkipForward className="w-5 h-5" />
                    </GradientButton>
                  )}
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </PageTransition>
  );
}
