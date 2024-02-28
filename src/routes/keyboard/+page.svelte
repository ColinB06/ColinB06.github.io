<script>
    import { onMount } from 'svelte';
  
    let squareTop = 50;
    let squareLeft = 50;
    const squareSize = 50;
    const mainSize = 650;
    let isMoving = false;
    let showPlayAgain = false;
  
    const keysPressed = new Set();
    let animationFrameId;
    let flyingBoxes = [];
  
    function generateRandomBox() {
      return {
        top: Math.floor(Math.random() * (mainSize - squareSize)),
        left: Math.floor(Math.random() * (mainSize - squareSize)),
        velocityX: 2 * (Math.random() > 0.5 ? 1 : -1),
        velocityY: 2 * (Math.random() > 0.5 ? 1 : -1),
      };
    }
  
    function moveBoxes() {
      flyingBoxes = flyingBoxes.map((box) => {
        const nextTop = box.top + box.velocityY;
        const nextLeft = box.left + box.velocityX;
  
        // Bounce off the top and bottom edges
        if (nextTop <= 0 || nextTop >= mainSize - squareSize) {
          box.velocityY *= -1;
        }
  
        // Bounce off the left and right edges
        if (nextLeft <= 0 || nextLeft >= mainSize - squareSize) {
          box.velocityX *= -1;
        }
  
        return {
          ...box,
          top: nextTop,
          left: nextLeft,
        };
      });
    }
    setInterval(()=>moveBoxes(),15)
    function moveSquare() {
        if (!showPlayAgain) {
      switch (true) {
        case keysPressed.has(38) && keysPressed.has(39):
          if (squareTop - 10 >= 0 && squareLeft + 10 + squareSize <= mainSize) {
            squareTop -= 10;
            squareLeft += 10;
          }
          break;
        case keysPressed.has(38) && keysPressed.has(37):
          if (squareTop - 10 >= 0 && squareLeft - 10 >= 0) {
            squareTop -= 10;
            squareLeft -= 10;
          }
          break;
        case keysPressed.has(40) && keysPressed.has(39):
          if (squareTop + 10 + squareSize <= mainSize && squareLeft + 10 + squareSize <= mainSize) {
            squareTop += 10;
            squareLeft += 10;
          }
          break;
        case keysPressed.has(40) && keysPressed.has(37):
          if (squareTop + 10 + squareSize <= mainSize && squareLeft - 10 >= 0) {
            squareTop += 10;
            squareLeft -= 10;
          }
          break;
        case keysPressed.has(38):
          if (squareTop - 10 >= 0) {
            squareTop -= 10;
          }
          break;
        case keysPressed.has(40):
          if (squareTop + 10 + squareSize <= mainSize) {
            squareTop += 10;
          }
          break;
        case keysPressed.has(37):
          if (squareLeft - 10 >= 0) {
            squareLeft -= 10;
          }
          break;
        case keysPressed.has(39):
          if (squareLeft + 10 + squareSize <= mainSize) {
            squareLeft += 10;
          }
          break;
      }
      checkCollision();
  
      if (keysPressed.size > 0) {
        animationFrameId = requestAnimationFrame(moveSquare);
      } else {
        isMoving = false;
      }
    }
    function checkCollision() {
    const squareRight = squareLeft + squareSize;
    const squareBottom = squareTop + squareSize;

    for (const box of flyingBoxes) {
      const boxRight = box.left + squareSize;
      const boxBottom = box.top + squareSize;

      if (
        squareLeft < boxRight &&
        squareRight > box.left &&
        squareTop < boxBottom &&
        squareBottom > box.top
      ) {
        // Collision detected
        showPlayAgain = true;
        break;
      }
    }
  }
}
  
    function onKeyDown(e) {
      if (!keysPressed.has(e.keyCode)) {
        keysPressed.add(e.keyCode);
        if (!isMoving) {
          isMoving = true;
          animationFrameId = requestAnimationFrame(moveSquare);
        }
      }
    }
  
    function onKeyUp(e) {
      keysPressed.delete(e.keyCode);
      if (keysPressed.size === 0) {
        cancelAnimationFrame(animationFrameId);
        isMoving = false;
      }
    }
    function playAgain() {
    showPlayAgain = false;
    flyingBoxes = [];
    for (let i = 0; i < 5; i++) {
      flyingBoxes.push(generateRandomBox());
    }
  }
  
    onMount(() => {
      for (let i = 0; i < 5; i++) {
        flyingBoxes.push(generateRandomBox());
      }
      moveBoxes(); // initialize box positions
    });
  </script>
  
  <style>
    main {
      width: 650px;
      height: 650px;
      border: solid rgb(0, 0, 0) 1px;
      margin: 10px auto;
      position: relative;
    }
  
    div {
      width: 50px;
      height: 50px;
      background-color: rgb(255, 0, 0);
      position: absolute;
      border: solid rgb(255, 0, 0) 2px;
      border-radius: 100px;
    }
  
    .box {
      width: 50px;
      height: 50px;
      background-color: rgb(255, 255, 255);
      position: absolute;
    }

    .play-again-button {
        
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
     }
    
  </style>
  
  <main>
    <div style="left: {squareLeft}px; top: {squareTop}px"></div>
  {#each flyingBoxes as { top, left }, index}
    <div class="box" style="left: {left}px; top: {top}px"></div>
  {/each}
  <button on:click={playAgain} class="play-again-button">
    Play Again
  </button>
  </main>
  
  <svelte:window on:keydown|preventDefault={onKeyDown} on:keyup={onKeyUp} />
  