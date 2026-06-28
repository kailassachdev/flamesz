import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Player, GameMode, GameStats, Category, RelationshipMode, Question } from '../types';

interface PlayerState {
  players: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, updates: Partial<Player>) => void;
  reorderPlayers: (players: Player[]) => void;
  randomizeOrder: () => void;
  resetPlayers: () => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      players: [],
      addPlayer: (player) =>
        set((state) => ({ players: [...state.players, player] })),
      removePlayer: (id) =>
        set((state) => ({
          players: state.players.filter((p) => p.id !== id),
        })),
      updatePlayer: (id, updates) =>
        set((state) => ({
          players: state.players.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        })),
      reorderPlayers: (players) => set({ players }),
      randomizeOrder: () =>
        set((state) => {
          const shuffled = [...state.players].sort(() => Math.random() - 0.5);
          return { players: shuffled };
        }),
      resetPlayers: () => set({ players: [] }),
    }),
    {
      name: 'flame-players-storage',
    }
  )
);

interface GameState {
  currentMode: GameMode | null;
  relationshipMode: RelationshipMode | null;
  currentPlayerIndex: number;
  lastPlayerIndex: number; // To prevent consecutive turns
  usedQuestionIds: string[];
  skippedQuestionIds: Record<string, number>; // Track skip frequencies
  favoriteQuestionIds: string[];
  activeQuestion: Question | null;
  isFlipped: boolean;
  setMode: (mode: GameMode) => void;
  setRelationshipMode: (mode: RelationshipMode) => void;
  nextTurn: (totalPlayers: number) => void;
  markQuestionUsed: (id: string) => void;
  markQuestionSkipped: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setActiveQuestion: (q: Question | null) => void;
  setIsFlipped: (flipped: boolean) => void;
  resetGameSession: () => void;
  resetFavorites: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      currentMode: null,
      relationshipMode: null,
      currentPlayerIndex: 0,
      lastPlayerIndex: -1,
      activeQuestion: null as Question | null,
      isFlipped: false,
      usedQuestionIds: [],
      skippedQuestionIds: {},
      favoriteQuestionIds: [],
      setMode: (mode) => set({ currentMode: mode }),
      setRelationshipMode: (mode) => set({ relationshipMode: mode }),
      nextTurn: (totalPlayers) =>
        set((state) => {
          let next = (state.currentPlayerIndex + 1) % totalPlayers;
          // Advanced fair turn logic: if next is lastPlayerIndex (and > 2 players), shift it
          if (totalPlayers > 2 && next === state.lastPlayerIndex) {
             next = (next + 1) % totalPlayers;
          }
          return {
            lastPlayerIndex: state.currentPlayerIndex,
            currentPlayerIndex: next,
          };
        }),
      markQuestionUsed: (id) =>
        set((state) => ({
          usedQuestionIds: [...state.usedQuestionIds, id],
        })),
      markQuestionSkipped: (id) =>
        set((state) => ({
          skippedQuestionIds: {
            ...state.skippedQuestionIds,
            [id]: (state.skippedQuestionIds[id] || 0) + 1
          }
        })),
      toggleFavorite: (id) =>
        set((state) => {
          const isFav = state.favoriteQuestionIds.includes(id);
          return {
            favoriteQuestionIds: isFav
              ? state.favoriteQuestionIds.filter((fid) => fid !== id)
              : [...state.favoriteQuestionIds, id],
          };
        }),
      setActiveQuestion: (q) => set({ activeQuestion: q }),
      setIsFlipped: (flipped) => set({ isFlipped: flipped }),
      resetGameSession: () =>
        set({ currentPlayerIndex: 0, lastPlayerIndex: -1, usedQuestionIds: [], activeQuestion: null, isFlipped: false }),
      resetFavorites: () => set({ favoriteQuestionIds: [] }),
    }),
    {
      name: 'flame-game-storage',
    }
  )
);

interface SettingsState {
  darkTheme: boolean;
  animations: boolean;
  sound: boolean;
  toggleDarkTheme: () => void;
  toggleAnimations: () => void;
  toggleSound: () => void;
  resetSettings: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      darkTheme: true,
      animations: true,
      sound: true,
      toggleDarkTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
      toggleAnimations: () =>
        set((state) => ({ animations: !state.animations })),
      toggleSound: () => set((state) => ({ sound: !state.sound })),
      resetSettings: () => set({ darkTheme: true, animations: true, sound: true }),
    }),
    {
      name: 'flame-settings-storage',
    }
  )
);

interface StatsState {
  stats: GameStats;
  incrementGames: () => void;
  incrementQuestions: () => void;
  setFavoriteCategory: (category: Category) => void;
  updateStreak: (streak: number) => void;
  resetStats: () => void;
}

const defaultStats: GameStats = {
  gamesPlayed: 0,
  questionsCompleted: 0,
  favoriteCategory: undefined,
  longestSessionMinutes: 0,
  averageSessionMinutes: 0,
  turnsPlayed: 0,
  currentStreak: 0,
};

export const useStatsStore = create<StatsState>()(
  persist(
    (set) => ({
      stats: defaultStats,
      incrementGames: () =>
        set((state) => ({
          stats: { ...state.stats, gamesPlayed: state.stats.gamesPlayed + 1 },
        })),
      incrementQuestions: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            questionsCompleted: state.stats.questionsCompleted + 1,
            turnsPlayed: state.stats.turnsPlayed + 1,
          },
        })),
      setFavoriteCategory: (category) =>
        set((state) => ({
          stats: { ...state.stats, favoriteCategory: category },
        })),
      updateStreak: (streak) =>
        set((state) => ({
          stats: {
            ...state.stats,
            currentStreak: Math.max(state.stats.currentStreak, streak),
          },
        })),
      resetStats: () => set({ stats: defaultStats }),
    }),
    {
      name: 'flame-stats-storage',
    }
  )
);
