import type { Player, Question } from '../types';

export function parsePrompt(text: string, currentPlayer: Player, allPlayers: Player[], hostId?: string): string {
  let parsed = text;
  
  // Find current player index
  const currentIndex = allPlayers.findIndex(p => p.id === currentPlayer.id);
  
  // Replace [CurrentPlayer]
  parsed = parsed.replace(/\[CurrentPlayer\]/g, currentPlayer.name);
  parsed = parsed.replace(/\[Self\]/g, currentPlayer.name); // Just in case

  // Replace [LeftPlayer]
  if (parsed.includes('[LeftPlayer]') && allPlayers.length > 1) {
    const leftIndex = (currentIndex - 1 + allPlayers.length) % allPlayers.length;
    parsed = parsed.replace(/\[LeftPlayer\]/g, allPlayers[leftIndex].name);
  }

  // Replace [RightPlayer]
  if (parsed.includes('[RightPlayer]') && allPlayers.length > 1) {
    const rightIndex = (currentIndex + 1) % allPlayers.length;
    parsed = parsed.replace(/\[RightPlayer\]/g, allPlayers[rightIndex].name);
  }

  // Replace [Host]
  if (parsed.includes('[Host]') && hostId) {
    const host = allPlayers.find(p => p.id === hostId);
    parsed = parsed.replace(/\[Host\]/g, host ? host.name : 'The Host');
  }

  // Parse [RandomPlayer] or [Player B] or [Partner]
  if (parsed.includes('[RandomPlayer]') || parsed.includes('[Player B]') || parsed.includes('[Partner]')) {
    const otherPlayers = allPlayers.filter(p => p.id !== currentPlayer.id);
    const targetPlayer = otherPlayers.length > 0 
      ? otherPlayers[Math.floor(Math.random() * otherPlayers.length)] 
      : { name: 'Another Player' };

    parsed = parsed.replace(/\[RandomPlayer\]/g, targetPlayer.name);
    parsed = parsed.replace(/\[Player B\]/g, targetPlayer.name);
    parsed = parsed.replace(/\[Partner\]/g, targetPlayer.name);
  }
  
  // Parse [RandomGroup]
  if (parsed.includes('[RandomGroup]') && allPlayers.length > 2) {
    const otherPlayers = allPlayers.filter(p => p.id !== currentPlayer.id);
    // shuffle and pick 2
    const shuffled = [...otherPlayers].sort(() => 0.5 - Math.random());
    const group = shuffled.slice(0, 2).map(p => p.name).join(' and ');
    parsed = parsed.replace(/\[RandomGroup\]/g, group);
  }

  // Parse [Everyone]
  parsed = parsed.replace(/\[Everyone\]/g, 'Everyone');
  
  // Parse [EveryoneExceptCurrent]
  parsed = parsed.replace(/\[EveryoneExceptCurrent\]/g, `Everyone except ${currentPlayer.name}`);
  
  return parsed;
}

export function filterQuestions(
  pool: Question[], 
  playerCount: number, 
  relationshipMode: string | null, 
  usedIds: string[]
): Question[] {
  return pool.filter(q => {
    // Check if used
    if (usedIds.includes(q.id)) return false;

    // Check player count limits
    if (playerCount < q.minPlayers || playerCount > q.maxPlayers) return false;

    // Check relationship mode
    if (relationshipMode && q.relationshipModes.length > 0) {
      if (!q.relationshipModes.includes(relationshipMode as any)) return false;
    }
    
    // Check gender restriction (could be expanded later if players pass gender lists)

    return true;
  });
}
