import type { Question } from '../types';

export const questions: Question[] = [
  // 2 PLAYERS - COUPLES / ADULTS
  {
    id: 'a1',
    type: 'truth',
    text: 'What is one thing you have always wanted me to do to you, but were too shy to ask?',
    category: 'Adults',
    difficulty: 'wild',
    minPlayers: 2,
    maxPlayers: 2,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple']
  },
  {
    id: 'a2',
    type: 'dare',
    text: 'Give [Partner] a passionate kiss on the neck for 10 seconds.',
    category: 'Adults',
    difficulty: 'bold',
    minPlayers: 2,
    maxPlayers: 2,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple']
  },
  {
    id: 'a3',
    type: 'truth',
    text: 'What was your exact thought the first time we kissed?',
    category: 'Romantic',
    difficulty: 'mild',
    minPlayers: 2,
    maxPlayers: 2,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple']
  },
  {
    id: 'a4',
    type: 'dare',
    text: 'Hold [Partner]\'s hands and look deeply into their eyes for 60 seconds without speaking.',
    category: 'Couples',
    difficulty: 'mild',
    minPlayers: 2,
    maxPlayers: 2,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple']
  },

  // 3+ PLAYERS - PARTY / FRIENDS
  {
    id: 'p1',
    type: 'truth',
    text: 'If you had to be stranded on an island with one person here, who would it be and why?',
    category: 'Friends',
    difficulty: 'easy',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'everyone',
    relationshipModes: ['Friends', 'Party', 'Family']
  },
  {
    id: 'p2',
    type: 'dare',
    text: 'Choose [RandomPlayer] to answer the next question with you. You both take the penalty if you refuse.',
    category: 'Party',
    difficulty: 'hard',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'randomPair',
    relationshipModes: ['Friends', 'Party']
  },
  {
    id: 'p3',
    type: 'minigame',
    text: '[Everyone] Count to 3 and point to the person most likely to get arrested tonight.',
    category: 'Party',
    difficulty: 'medium',
    minPlayers: 4,
    maxPlayers: 99,
    targetType: 'group',
    relationshipModes: ['Friends', 'Party']
  },
  {
    id: 'p4',
    type: 'dare',
    text: 'You must do whatever [Host] tells you to do for the next 2 minutes.',
    category: 'Party',
    difficulty: 'hard',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'host',
    relationshipModes: ['Friends', 'Party']
  },
  {
    id: 'p5',
    type: 'dare',
    text: 'Stare uncomfortably at [LeftPlayer] until they laugh.',
    category: 'Funny',
    difficulty: 'medium',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'leftPlayer',
    relationshipModes: ['Friends', 'Party', 'Family']
  },
  {
    id: 'p6',
    type: 'truth',
    text: 'Tell us a secret that [RightPlayer] doesn\'t know about you.',
    category: 'Deep Conversations',
    difficulty: 'hard',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'rightPlayer',
    relationshipModes: ['Friends', 'Party', 'Couple']
  },
  
  // ADULTS EXPANSION - MILD, BOLD, WILD
  {
    id: 'ad1',
    type: 'truth',
    text: 'What is your biggest turn-on when it comes to flirting?',
    category: 'Adults',
    difficulty: 'mild',
    minPlayers: 2,
    maxPlayers: 99,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple', 'Friends', 'Party']
  },
  {
    id: 'ad2',
    type: 'dare',
    text: 'Whisper something incredibly dirty into [RandomPlayer]\'s ear.',
    category: 'Adults',
    difficulty: 'bold',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'singlePlayer',
    relationshipModes: ['Friends', 'Party', 'Couple']
  },
  {
    id: 'ad3',
    type: 'dare',
    text: 'Demonstrate your best kissing technique on the back of your hand, while maintaining eye contact with [RandomPlayer].',
    category: 'Adults',
    difficulty: 'wild',
    minPlayers: 2,
    maxPlayers: 99,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple', 'Friends', 'Party']
  },
  {
    id: 'ad4',
    type: 'dare',
    text: 'Let [RandomPlayer] sit on your lap for the next 3 rounds.',
    category: 'Adults',
    difficulty: 'bold',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'randomPair',
    relationshipModes: ['Friends', 'Party']
  },
  {
    id: 'ad5',
    type: 'truth',
    text: 'Describe the best physical encounter you\'ve ever had in 3 words.',
    category: 'Adults',
    difficulty: 'wild',
    minPlayers: 2,
    maxPlayers: 99,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple', 'Friends', 'Party']
  },
  {
    id: 'ad6',
    type: 'dare',
    text: '[RandomGroup] must go into a closet for 2 minutes and not say a word.',
    category: 'Adults',
    difficulty: 'wild',
    minPlayers: 4,
    maxPlayers: 99,
    targetType: 'randomGroup',
    relationshipModes: ['Friends', 'Party']
  },

  // ANY PLAYERS - GENERAL
  {
    id: 'g1',
    type: 'truth',
    text: 'What is the most embarrassing thing you have ever done in public?',
    category: 'Funny',
    difficulty: 'medium',
    minPlayers: 2,
    maxPlayers: 99,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple', 'Friends', 'Family', 'Party']
  },
  {
    id: 'g2',
    type: 'dare',
    text: 'Do an impression of someone in the room until someone can guess who it is.',
    category: 'Funny',
    difficulty: 'medium',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'singlePlayer',
    relationshipModes: ['Couple', 'Friends', 'Family', 'Party']
  },
  {
    id: 'g3',
    type: 'dare',
    text: 'Let the group look through your phone for 1 minute.',
    category: 'Party',
    difficulty: 'extreme',
    minPlayers: 3,
    maxPlayers: 99,
    targetType: 'group',
    relationshipModes: ['Friends', 'Party']
  }
];
