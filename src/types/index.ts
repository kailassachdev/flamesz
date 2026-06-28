export type Gender = 'Male' | 'Female' | 'Other';

export interface Player {
  id: string;
  name: string;
  gender: Gender;
  avatarColor?: string;
  onlineStatus?: 'online' | 'offline';
  joinedAt?: number;
  score?: number;
}

export type QuestionType = 'truth' | 'dare' | 'minigame';

export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'extreme' | 'mild' | 'bold' | 'wild';

export type Category = 
  | 'Funny'
  | 'Cute'
  | 'Romantic'
  | 'Embarrassing'
  | 'Party'
  | 'Friends'
  | 'Family'
  | 'Couples'
  | 'Adults'
  | 'Flirty'
  | 'Deep Conversations'
  | 'Ice Breakers'
  | 'Late Night';

export type GameMode = 
  | 'Easy'
  | 'Funny'
  | 'Romantic'
  | 'Couples'
  | 'Friends'
  | 'Party'
  | 'Adults (18+)';

export type RelationshipMode = 'Couple' | 'Friends' | 'Family' | 'Party';

export type TargetType = 'self' | 'singlePlayer' | 'everyone' | 'everyoneExceptCurrent' | 'randomPair' | 'leftPlayer' | 'rightPlayer' | 'host' | 'group' | 'randomGroup';

export type GameFlowAction = 
  | 'Truth' 
  | 'Dare' 
  | 'Random' 
  | 'Random Player' 
  | 'Spin Wheel' 
  | 'Lucky Challenge' 
  | 'Double Dare' 
  | 'Couple Challenge' 
  | 'Team Challenge' 
  | 'Everyone Plays' 
  | 'Vote Challenge' 
  | 'Quick Round' 
  | 'Sudden Death';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  category: Category;
  difficulty: DifficultyLevel;
  targetGender?: 'Male' | 'Female' | 'Any';
  minPlayers: number;
  maxPlayers: number;
  targetType: TargetType;
  relationshipModes: RelationshipMode[];
  genderRestriction?: 'none' | 'same' | 'mixed';
  tags?: string[];
}

export interface GameStats {
  gamesPlayed: number;
  questionsCompleted: number; // replacing truths/dares count with total
  favoriteCategory?: Category;
  longestSessionMinutes: number;
  averageSessionMinutes: number;
  turnsPlayed: number;
  currentStreak: number;
}

export interface RoomState {
  roomId: string;
  hostId: string;
  players: Player[];
  status: 'waiting' | 'playing' | 'finished';
  currentMode: GameMode | null;
  relationshipMode: RelationshipMode | null;
  currentPlayerIndex: number;
  lastPlayerIndex: number;
  activeQuestion: Question | null;
  isFlipped: boolean;
  usedQuestionIds: string[];
}
