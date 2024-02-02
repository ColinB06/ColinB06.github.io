<script>
  import { fade } from 'svelte/transition';

  const layers = [0, 1, 2, 3];
  const images = [
    "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png",
    "https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
  ];

  let y = 0;
  let lastY = 0;
  let nextY = 0;
  let scrollSpeed = 0;
  let lastTimestamp = 0;
  let interval;

  $: currentMessage = 'You are scrolling at a speed of ' + scrollSpeed.toFixed(2) + ' pixels/second';
  $:scrollSpeed = Math.abs(y - lastY)

  function handleScroll() {
    if(!interval)
      interval = setInterval(()=>{

        lastY = nextY;
        nextY = y;
        scrollSpeed = Math.abs(y - lastY)*10
      },100)
    
  }
</script>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} />

<main>
  <div class="container">
    {#each layers as layer}
      <img
        style="transform: translate(0, ${y * layer}px);"
        src={images[0]}
        alt={`parallax layer ${layer}`}
      />
    {/each}
  </div>

  <div class="text">
    <div class="story" transition:fade>
      <p>{currentMessage}</p>
      <img src="https://i0.wp.com/www.joshvaughnphotography.com/wp-content/uploads/Porsche-Logo-PNG-Pic.png?fit=1280%2C831&ssl=1" alt="heart" />
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #aa9898;
    font-family: Arial, sans-serif;
  }

  main {
    height: 2400px; /* Increased height to allow scrolling beyond the current height */
  }

  .story img {
    width: 200px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

  }

  .container {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
  }

  .text {
    position: fixed;
    bottom: 20px; /* Adjust the bottom position as needed */
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 1;
    width: 100%;
    color: white;
  }

  .text p {
    margin: 0;
  }
</style>
