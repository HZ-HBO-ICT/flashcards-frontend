import { writable } from 'svelte/store';

export const message = writable({
  state: 'beginning',
  text: 'please write an answer'
});