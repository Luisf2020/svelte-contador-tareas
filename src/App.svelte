<script>
  import { addTask, pending, tasks, toggleTask } from './stores.js';
  let texto = '';

  function enviar() {
    addTask(texto);
    texto = '';
  }
</script>

<main>
  <h1>Tareas</h1>
  <p>{$pending} pendientes</p>

  <form on:submit|preventDefault={enviar}>
    <input bind:value={texto} placeholder="Nueva tarea" />
    <button type="submit">Agregar</button>
  </form>

  <ul>
    {#each $tasks as task (task.id)}
      <li class:done={task.done}>
        <label>
          <input type="checkbox" checked={task.done} on:change={() => toggleTask(task.id)} />
          {task.title}
        </label>
      </li>
    {/each}
  </ul>
</main>

<style>
  main { max-width: 480px; margin: 3rem auto; font-family: system-ui, sans-serif; }
  li.done { text-decoration: line-through; opacity: .6; }
</style>
