import { create } from 'zustand';
import type { RoomState } from '../types';

interface RoomStoreState {
  roomId: string | null;
  isOnlineMode: boolean;
  isHost: boolean;
  localPlayerId: string | null;
  roomData: RoomState | null;
  
  // Actions
  setRoomConnection: (roomId: string, isHost: boolean, localPlayerId: string) => void;
  setOnlineMode: (isOnline: boolean) => void;
  updateRoomData: (data: Partial<RoomState>) => void;
  leaveRoom: () => void;
}

export const useRoomStore = create<RoomStoreState>((set) => ({
  roomId: null,
  isOnlineMode: false,
  isHost: false,
  localPlayerId: null,
  roomData: null,

  setRoomConnection: (roomId, isHost, localPlayerId) => 
    set({ roomId, isHost, localPlayerId, isOnlineMode: true }),
    
  setOnlineMode: (isOnline) => set({ isOnlineMode: isOnline }),
  
  updateRoomData: (data) => 
    set((state) => ({
      roomData: state.roomData ? { ...state.roomData, ...data } : data as RoomState
    })),
    
  leaveRoom: () => set({ roomId: null, isHost: false, localPlayerId: null, roomData: null, isOnlineMode: false })
}));
