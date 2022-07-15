import { writable } from 'svelte/store';

const albums = writable([]);

export { albums as default };
