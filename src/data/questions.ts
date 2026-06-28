import type { Question } from '../types';

export const questions: Question[] = [
  // ==========================================
  // COUPLES & ROMANTIC (2 Players)
  // ==========================================
  { id: 'c1', type: 'truth', text: 'What was your exact thought the first time we kissed?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c2', type: 'dare', text: 'Hold [Partner]\'s hands and look deeply into their eyes for 60 seconds without speaking.', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c3', type: 'truth', text: 'What is a small, seemingly insignificant thing I do that you absolutely love?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c4', type: 'dare', text: 'Give [Partner] a massage on a spot of their choosing for 2 minutes.', category: 'Romantic', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c5', type: 'truth', text: 'When did you realize you were falling for me?', category: 'Romantic', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c6', type: 'dare', text: 'Recreate our very first photo together right now.', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c7', type: 'truth', text: 'What is your favorite memory of us together?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c8', type: 'dare', text: 'Serenade [Partner] with a romantic song for 30 seconds.', category: 'Romantic', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c9', type: 'truth', text: 'What is one secret you\'ve kept from me because you were afraid I’d judge you?', category: 'Deep Conversations', difficulty: 'hard', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c10', type: 'dare', text: 'Whisper sweet nothings into [Partner]\'s ear for 1 minute.', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c11', type: 'truth', text: 'If we could travel anywhere in the world tomorrow, where would you take me?', category: 'Romantic', difficulty: 'easy', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c12', type: 'dare', text: 'Feed [Partner] a piece of food in the most romantic way possible.', category: 'Romantic', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c13', type: 'truth', text: 'What do you think is our greatest strength as a couple?', category: 'Romantic', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c14', type: 'dare', text: 'Dance with [Partner] with no music playing for 1 minute.', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c15', type: 'truth', text: 'What is the most physically attractive thing about me?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },

  // ==========================================
  // ADULTS & WILD (18+)
  // ==========================================
  { id: 'a1', type: 'truth', text: 'What is one thing you have always wanted me to do to you, but were too shy to ask?', category: 'Adults', difficulty: 'wild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'a2', type: 'dare', text: 'Give [Partner] a passionate kiss on the neck for 10 seconds.', category: 'Adults', difficulty: 'bold', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'a3', type: 'truth', text: 'What is your biggest turn-on when it comes to flirting?', category: 'Adults', difficulty: 'mild', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Party'] },
  { id: 'a4', type: 'dare', text: 'Whisper something incredibly dirty into [RandomPlayer]\'s ear.', category: 'Adults', difficulty: 'bold', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Party', 'Couple'] },
  { id: 'a5', type: 'dare', text: 'Demonstrate your best kissing technique on the back of your hand, while maintaining eye contact with [RandomPlayer].', category: 'Adults', difficulty: 'wild', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Party'] },
  { id: 'a6', type: 'dare', text: 'Let [RandomPlayer] sit on your lap for the next 3 rounds.', category: 'Adults', difficulty: 'bold', minPlayers: 3, maxPlayers: 99, targetType: 'randomPair', relationshipModes: ['Friends', 'Party'] },
  { id: 'a7', type: 'truth', text: 'Describe the best physical encounter you\'ve ever had in 3 words.', category: 'Adults', difficulty: 'wild', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Party'] },
  { id: 'a8', type: 'dare', text: '[RandomGroup] must go into a closet for 2 minutes and not say a word.', category: 'Adults', difficulty: 'wild', minPlayers: 4, maxPlayers: 99, targetType: 'randomGroup', relationshipModes: ['Friends', 'Party'] },
  { id: 'a9', type: 'truth', text: 'Have you ever sent a spicy text to the wrong person?', category: 'Adults', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Party'] },
  { id: 'a10', type: 'dare', text: 'Remove one item of clothing (accessories do not count).', category: 'Adults', difficulty: 'wild', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Party'] },
  { id: 'a11', type: 'truth', text: 'What is your weirdest fantasy?', category: 'Adults', difficulty: 'wild', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'a12', type: 'dare', text: 'Nibble on [LeftPlayer]\'s earlobe gently.', category: 'Adults', difficulty: 'wild', minPlayers: 3, maxPlayers: 99, targetType: 'leftPlayer', relationshipModes: ['Party', 'Couple'] },
  { id: 'a13', type: 'truth', text: 'What is a hard limit for you in the bedroom?', category: 'Adults', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'a14', type: 'dare', text: 'Trace the outline of [RightPlayer]\'s lips with your finger.', category: 'Adults', difficulty: 'bold', minPlayers: 3, maxPlayers: 99, targetType: 'rightPlayer', relationshipModes: ['Party', 'Couple'] },
  { id: 'a15', type: 'truth', text: 'What is the most inappropriate time you have ever felt aroused?', category: 'Adults', difficulty: 'bold', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Party'] },

  // ==========================================
  // FUNNY & EMBARRASSING (Friends / Party / Family)
  // ==========================================
  { id: 'f1', type: 'truth', text: 'What is the most embarrassing thing you have ever done in public?', category: 'Funny', difficulty: 'medium', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Family', 'Party'] },
  { id: 'f2', type: 'dare', text: 'Do an impression of someone in the room until someone can guess who it is.', category: 'Funny', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Family', 'Party'] },
  { id: 'f3', type: 'dare', text: 'Let the group look through your phone for 1 minute.', category: 'Party', difficulty: 'extreme', minPlayers: 3, maxPlayers: 99, targetType: 'group', relationshipModes: ['Friends', 'Party'] },
  { id: 'f4', type: 'dare', text: 'Stare uncomfortably at [LeftPlayer] until they laugh.', category: 'Funny', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'leftPlayer', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'f5', type: 'truth', text: 'What is the dumbest lie you ever told your parents?', category: 'Funny', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'f6', type: 'dare', text: 'Speak in a fake British accent for the next 3 rounds.', category: 'Funny', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Family', 'Party'] },
  { id: 'f7', type: 'truth', text: 'If you had to swap lives with one person in this room, who would it be and why?', category: 'Funny', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Family', 'Party'] },
  { id: 'f8', type: 'dare', text: 'Try to juggle 3 objects chosen by [RightPlayer].', category: 'Funny', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'rightPlayer', relationshipModes: ['Friends', 'Family', 'Party'] },
  { id: 'f9', type: 'truth', text: 'What is the most cringeworthy thing you’ve ever posted on social media?', category: 'Funny', difficulty: 'medium', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Party'] },
  { id: 'f10', type: 'dare', text: 'Let [Host] style your hair however they want.', category: 'Funny', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'host', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'f11', type: 'truth', text: 'Have you ever practiced kissing in a mirror or on a pillow?', category: 'Funny', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Party'] },
  { id: 'f12', type: 'dare', text: 'Do your best interpretive dance to a song chosen by [LeftPlayer].', category: 'Funny', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'leftPlayer', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'f13', type: 'truth', text: 'What is the worst date you have ever been on?', category: 'Funny', difficulty: 'medium', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Party'] },
  { id: 'f14', type: 'dare', text: 'Show the room the last photo you took on your phone.', category: 'Funny', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Party'] },
  { id: 'f15', type: 'truth', text: 'What is a ridiculous fear you still have as an adult?', category: 'Funny', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Family', 'Party'] },
  { id: 'f16', type: 'dare', text: 'Walk across the room like a runway model.', category: 'Funny', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Party', 'Family'] },
  
  // ==========================================
  // FRIENDS & DEEP CONVERSATIONS (3+ Players)
  // ==========================================
  { id: 'fr1', type: 'truth', text: 'If you had to be stranded on an island with one person here, who would it be and why?', category: 'Friends', difficulty: 'easy', minPlayers: 3, maxPlayers: 99, targetType: 'everyone', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'fr2', type: 'truth', text: 'Tell us a secret that [RightPlayer] doesn\'t know about you.', category: 'Deep Conversations', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'rightPlayer', relationshipModes: ['Friends', 'Party', 'Couple'] },
  { id: 'fr3', type: 'dare', text: 'Choose [RandomPlayer] to answer the next question with you. You both take the penalty if you refuse.', category: 'Party', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'randomPair', relationshipModes: ['Friends', 'Party'] },
  { id: 'fr4', type: 'truth', text: 'Who in this room do you think would survive a zombie apocalypse the longest?', category: 'Friends', difficulty: 'easy', minPlayers: 3, maxPlayers: 99, targetType: 'group', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'fr5', type: 'dare', text: 'Exchange phones with [LeftPlayer] and let them send one text to anyone.', category: 'Friends', difficulty: 'extreme', minPlayers: 3, maxPlayers: 99, targetType: 'leftPlayer', relationshipModes: ['Friends', 'Party'] },
  { id: 'fr6', type: 'truth', text: 'What is a flaw you recognize in yourself but haven\'t fixed?', category: 'Deep Conversations', difficulty: 'hard', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends'] },
  { id: 'fr7', type: 'dare', text: 'Give [RandomPlayer] a piggyback ride around the room.', category: 'Friends', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'randomPair', relationshipModes: ['Friends', 'Party'] },
  { id: 'fr8', type: 'truth', text: 'If you could erase one memory from your life, what would it be?', category: 'Deep Conversations', difficulty: 'hard', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends'] },
  { id: 'fr9', type: 'dare', text: 'You must hold hands with [RightPlayer] for the next 3 rounds.', category: 'Friends', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'rightPlayer', relationshipModes: ['Friends', 'Party'] },
  { id: 'fr10', type: 'truth', text: 'What is the most hurtful thing someone in this room has ever said to you (that you’ve forgiven them for)?', category: 'Deep Conversations', difficulty: 'extreme', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Friends', 'Couple'] },
  { id: 'fr11', type: 'dare', text: 'Let [Host] draw something on your face with a pen or marker.', category: 'Friends', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'host', relationshipModes: ['Friends', 'Party'] },

  // ==========================================
  // MINIGAMES & GROUP ACTIONS (4+ Players)
  // ==========================================
  { id: 'm1', type: 'minigame', text: '[Everyone] Count to 3 and point to the person most likely to get arrested tonight.', category: 'Party', difficulty: 'medium', minPlayers: 4, maxPlayers: 99, targetType: 'group', relationshipModes: ['Friends', 'Party'] },
  { id: 'm2', type: 'dare', text: 'You must do whatever [Host] tells you to do for the next 2 minutes.', category: 'Party', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'host', relationshipModes: ['Friends', 'Party'] },
  { id: 'm3', type: 'minigame', text: '[EveryoneExceptCurrent] Take a vote on whether [CurrentPlayer] is a good liar. If the majority says yes, [CurrentPlayer] drinks or takes a penalty.', category: 'Party', difficulty: 'medium', minPlayers: 4, maxPlayers: 99, targetType: 'group', relationshipModes: ['Friends', 'Party'] },
  { id: 'm4', type: 'minigame', text: 'Categories! [CurrentPlayer] names a category (e.g. car brands). Go around the circle. First to hesitate or repeat loses.', category: 'Party', difficulty: 'easy', minPlayers: 3, maxPlayers: 99, targetType: 'everyone', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'm5', type: 'dare', text: '[RandomGroup] Must swap seats with each other without touching the floor.', category: 'Party', difficulty: 'medium', minPlayers: 4, maxPlayers: 99, targetType: 'randomGroup', relationshipModes: ['Friends', 'Party', 'Family'] },
  { id: 'm6', type: 'minigame', text: 'Never Have I Ever: [CurrentPlayer] says something they\'ve never done. Anyone who HAS done it must raise their hand.', category: 'Party', difficulty: 'easy', minPlayers: 3, maxPlayers: 99, targetType: 'everyone', relationshipModes: ['Friends', 'Party', 'Couple'] },
  { id: 'm7', type: 'minigame', text: 'Thumb Master: [CurrentPlayer] is now the thumb master. Whenever they place their thumb on the table, the last person to do so loses.', category: 'Party', difficulty: 'medium', minPlayers: 4, maxPlayers: 99, targetType: 'everyone', relationshipModes: ['Friends', 'Party'] },

  // ==========================================
  // EXPANDED EASY (Family & Friends)
  // ==========================================
  { id: 'e1', type: 'truth', text: 'What is your favorite movie of all time and why?', category: 'Family', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends', 'Couple'] },
  { id: 'e2', type: 'dare', text: 'Sing the chorus of your favorite song loudly.', category: 'Family', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends', 'Party'] },
  { id: 'e3', type: 'truth', text: 'If you could have any superpower, what would it be?', category: 'Family', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends'] },
  { id: 'e4', type: 'dare', text: 'Try to lick your own elbow.', category: 'Family', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends'] },
  { id: 'e5', type: 'truth', text: 'What is the weirdest food combination you actually enjoy?', category: 'Family', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends'] },
  { id: 'e6', type: 'dare', text: 'Do 10 jumping jacks while saying the alphabet backwards.', category: 'Family', difficulty: 'medium', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends', 'Party'] },
  { id: 'e7', type: 'truth', text: 'What was your favorite childhood cartoon?', category: 'Family', difficulty: 'easy', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Family', 'Friends'] },
  { id: 'e8', type: 'dare', text: 'Let [RightPlayer] draw a mustache on you using an app filter or a pen.', category: 'Family', difficulty: 'medium', minPlayers: 3, maxPlayers: 99, targetType: 'rightPlayer', relationshipModes: ['Family', 'Friends', 'Party'] },

  // ==========================================
  // MORE WILD PARTY DARES (Party)
  // ==========================================
  { id: 'wp1', type: 'dare', text: 'Call a random contact in your phone and sing them Happy Birthday.', category: 'Party', difficulty: 'extreme', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Party', 'Friends'] },
  { id: 'wp2', type: 'dare', text: 'Let the group mix three edible liquids from the kitchen and you have to take a sip.', category: 'Party', difficulty: 'extreme', minPlayers: 3, maxPlayers: 99, targetType: 'group', relationshipModes: ['Party'] },
  { id: 'wp3', type: 'dare', text: 'You must communicate only in animal noises for the next 3 rounds.', category: 'Party', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Party', 'Friends'] },
  { id: 'wp4', type: 'dare', text: 'Let [LeftPlayer] post a status update on your social media.', category: 'Party', difficulty: 'extreme', minPlayers: 3, maxPlayers: 99, targetType: 'leftPlayer', relationshipModes: ['Party', 'Friends'] },
  { id: 'wp5', type: 'dare', text: 'Trade a piece of clothing with [RandomPlayer].', category: 'Party', difficulty: 'hard', minPlayers: 3, maxPlayers: 99, targetType: 'randomPair', relationshipModes: ['Party'] },
  
  // ==========================================
  // MORE COUPLES TRUTHS
  // ==========================================
  { id: 'c16', type: 'truth', text: 'What is the most vulnerable you’ve ever felt with me?', category: 'Deep Conversations', difficulty: 'hard', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c17', type: 'truth', text: 'What is a goal we should set together for the next year?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c18', type: 'truth', text: 'What did you think of me after our first date?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c19', type: 'truth', text: 'What is the most adventurous thing you want us to try?', category: 'Romantic', difficulty: 'medium', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },
  { id: 'c20', type: 'truth', text: 'If you had to describe our relationship as a movie, which genre would it be and why?', category: 'Romantic', difficulty: 'mild', minPlayers: 2, maxPlayers: 2, targetType: 'singlePlayer', relationshipModes: ['Couple'] },

  // ==========================================
  // FINAL ROUND (ANY MODE)
  // ==========================================
  { id: 'fin1', type: 'truth', text: 'What is the most valuable lesson you have learned this year?', category: 'Deep Conversations', difficulty: 'medium', minPlayers: 2, maxPlayers: 99, targetType: 'singlePlayer', relationshipModes: ['Couple', 'Friends', 'Family'] },
  { id: 'fin2', type: 'dare', text: 'Give a genuine compliment to every single person in the room.', category: 'Friends', difficulty: 'easy', minPlayers: 3, maxPlayers: 99, targetType: 'everyone', relationshipModes: ['Friends', 'Family', 'Party'] }
];
