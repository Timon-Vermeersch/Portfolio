import { writable } from 'svelte/store';

export const navbarHeight = writable(0);
export const sectionRefs = writable({
    about: null,
    projects: null,
    contact: null,
});