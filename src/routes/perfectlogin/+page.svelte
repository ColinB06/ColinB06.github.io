<!-- src/routes/login.svelte -->
<script>
  import { onMount } from 'svelte';

  let username = '';
  let password = '';
  let shuffledLettersRow1 = [];
  let shuffledLettersRow2 = [];
  let shuffledNumbersRow = [];
  let shuffledButtonsRow = [];
  let activeField = 'username';

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleKeyClick = (key) => {
    activeField === 'username' ? (username += key) : (password += key);
    console.log('Key clicked:', key);
  };

  const handleClearClick = () => {
    username = '';
    password = '';
  };

  const handleSwitchFieldClick = () => {
    activeField = activeField === 'username' ? 'password' : 'username';
  };

  const shuffleLetters = () => {
    const originalLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    shuffledLettersRow1 = originalLetters.sort(() => Math.random() - 0.5);
    shuffledLettersRow2 = originalLetters.map(letter => letter.toLowerCase()).sort(() => Math.random() - 0.5);
    shuffledButtonsRow = [
      { label: 'Clear', handler: handleClearClick },
      { label: 'Switch Field', handler: handleSwitchFieldClick },
    ].sort(() => Math.random() - 0.5);
  };

  const shuffleNumbers = () => {
    shuffledNumbersRow = Array.from({ length: 10 }, (_, index) => index).sort(() => Math.random() - 0.5);
  };

  onMount(() => {
    shuffleLetters();
    shuffleNumbers();
    setInterval(() => {
      shuffleLetters();
      shuffleNumbers();
    }, 1300);
  });
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 100vh;
    margin: 0;
  }

  form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }

  button {
    background-color: #393939;
    color: rgb(255, 255, 255);
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #6c6c6c;
  }

  .keyboard {
    position: relative;
    display: flex;
    flex-basis: auto;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
    border: 3px solid black;
    border-radius: 5px;
    width: fit-content;
  }

  .keyboard button {
    margin: 1px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    color: aliceblue;
  }
</style>

<main>
  <body>
    <form on:submit|preventDefault={handleLogin}>
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} readonly/>

      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} readonly/>

      <button type="submit">Login</button>
    </form>

    <div class="keyboard">
      {#each shuffledLettersRow1 as letter}
        <button on:click={() => handleKeyClick(letter)}>{letter}</button>
      {/each}
    </div>

    <div class="keyboard">
      {#each shuffledLettersRow2 as letter}
        <button on:click={() => handleKeyClick(letter)}>{letter}</button>
      {/each}
    </div>

    <div class="keyboard">
      {#each shuffledNumbersRow as number}
        <button on:click={() => handleKeyClick(number.toString())}>{number}</button>
      {/each}
    </div>

    <div class="keyboard">
      {#each shuffledButtonsRow as { label, handler }}
        <button on:click={handler}>{label}</button>
      {/each}
    </div>
  </body>
</main>
