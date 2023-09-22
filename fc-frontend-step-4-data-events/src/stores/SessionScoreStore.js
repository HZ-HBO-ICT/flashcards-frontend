import { writable, derived } from 'svelte/store';

/**
 * Still not happy with the implementation.
 * I would like to have some sort of extend relation between stores
 *
 * However, there is some logic here.
 * sessionScore is the main store every component writes to and some components listen to.
 * The derived stores are merely there as a readable store that we can include into a component instance
 */

// this is the overall score for each session
export const sessionScore = writable({
  sessionNumber: 1,
  currentPlayableWord: {},
  words: {
    amountOfWordsToLearn: 50,
    currentWordsLearned: 0,
  },
  health: {
    maxHealth: 5,
    currentHealth: 0,
  },
  correctAnswersAfterHint: 0,
  hints: {
    hintsLeft: 0,
    maxHints: 5,
  },
});

export const healthIconStore = derived(sessionScore, ($sessionScore) => {
  return {
    max: $sessionScore.health.maxHealth,
    current: $sessionScore.health.currentHealth,
  };
});

export const wordsIconStore = derived(sessionScore, ($sessionScore) => {
  return {
    max: $sessionScore.words.amountOfWordsToLearn,
    current: $sessionScore.words.currentWordsLearned,
  };
});
