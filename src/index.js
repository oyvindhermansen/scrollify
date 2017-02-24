import scrollzy from './core/scrollzy';

/* Make it available in window */
if (typeof window !== 'undefined') {
  window.scrollzy = scrollzy;
}

export default scrollzy;
