import { doc, setDoc, onSnapshot, updateDoc, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from './firebase';
import type { RoomState, Player } from '../types';

export const createRoom = async (hostPlayer: Player): Promise<string> => {
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const roomRef = doc(db, 'rooms', roomCode);
  
  const initialData: RoomState = {
    roomId: roomCode,
    hostId: hostPlayer.id,
    players: [hostPlayer],
    status: 'waiting',
    currentMode: null,
    relationshipMode: null,
    currentPlayerIndex: 0,
    lastPlayerIndex: -1,
    activeQuestion: null,
    isFlipped: false,
    usedQuestionIds: []
  };

  const setDocPromise = setDoc(roomRef, initialData);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Database connection timed out. Have you created the Firestore Database in your Firebase Console?")), 6000)
  );

  await Promise.race([setDocPromise, timeoutPromise]);
  return roomCode;
};

export const joinRoom = async (roomCode: string, player: Player): Promise<boolean> => {
  const roomRef = doc(db, 'rooms', roomCode.toUpperCase());
  
  const getDocPromise = getDoc(roomRef);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Database connection timed out. Have you created the Firestore Database in your Firebase Console?")), 6000)
  );

  const roomSnap = await Promise.race([getDocPromise, timeoutPromise]) as any;
  
  if (!roomSnap.exists()) {
    return false;
  }
  
  await updateDoc(roomRef, {
    players: arrayUnion(player)
  });
  
  return true;
};

export const listenToRoom = (roomCode: string, callback: (data: RoomState) => void) => {
  const roomRef = doc(db, 'rooms', roomCode.toUpperCase());
  return onSnapshot(roomRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data() as RoomState);
    }
  });
};

export const updateRoomState = async (roomCode: string, updates: Partial<RoomState>) => {
  const roomRef = doc(db, 'rooms', roomCode.toUpperCase());
  await updateDoc(roomRef, updates);
};

export const leaveRoomDB = async (roomCode: string, player: Player) => {
  const roomRef = doc(db, 'rooms', roomCode.toUpperCase());
  await updateDoc(roomRef, {
    players: arrayRemove(player)
  });
};
