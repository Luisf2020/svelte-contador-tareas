import { derived, writable } from 'svelte/store';

let seq = 0;

export const tasks = writable([
  { id: ++seq, title: 'Repasar stores', done: true },
  { id: ++seq, title: 'Publicar proyecto', done: false },
]);

export const pending = derived(tasks, ($t) => $t.filter((x) => !x.done).length);

export function addTask(title) {
  const limpio = title.trim();
  if (!limpio) return;
  tasks.update((list) => [{ id: ++seq, title: limpio, done: false }, ...list]);
}

export function toggleTask(id) {
  tasks.update((list) => list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
}
