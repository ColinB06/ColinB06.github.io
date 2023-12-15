<script>
    import { onMount } from 'svelte';
  
    let todos = [];
    let newTodo = '';
  
    const addTodo = () => {
      todos = [...todos, { text: newTodo, completed: false }];
      newTodo = '';
    };
  
    const toggleTodo = (index) => {
      todos[index].completed = !todos[index].completed;
    };
  
    const removeTodo = (index) => {
      todos.splice(index, 1);
      todos = todos;
    };
  
    onMount(() => {
      // Add local storage functionality here if needed
    });
  </script>
  
  <style>
    .app-container {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      background-color: rgba(40, 40, 40, 0.29);
      color: #000000;
      font-family: 'Times New Roman', sans-serif;
      height: 80vh;
      border-radius: 10px;
      border-style: double;
      border-width: 10px;

    }
  
    .column {
      flex: 1;
      margin: 0 20px;
    }
  
    .input-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
  
    input, button {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: 'Times New Roman', sans-serif;
    }
  
    button {
      background-color: #5db853;
      color: #fff;
      cursor: pointer;
      border: 2px;
      border-style: ridge;
      border-color: #000000;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
      color: #333;
    }
  
    .completed {
      text-decoration: line-through;
    }
  
    button.remove-btn {
      background-color: #f44336;
      color: #fff;
    }
  
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  </style>
  <div class="app-container">
    <div class="column">
      <h1>NEW TODOS</h1>
      <div class="input-container">
        <input bind:value={newTodo} placeholder="Add a new todo" />
        <button on:click={addTodo}>Add Todo</button>
      </div>
      <ul>
        {#each todos as { text, completed }, index (index)}
          {#if !completed}
            <li class:completed={completed}>
              <span>{text}</span>
              <button on:click={() => toggleTodo(index)}>Complete</button>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
    <div class="column">
      <h1>COMPLETED TODOS</h1>
      <ul>
        {#each todos as { text, completed }, index (index)}
          {#if completed}
            <li class:completed={completed}>
              <span>{text}</span>
              <button class="remove-btn" on:click={() => {removeTodo(index)}}>Remove</button>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
  ﻿
  