<script>
  let ScorePlayer1 = 0;
  let ScorePlayer2 = 0;
  let cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: `/image${index % 6}.png`, // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  let flipcount = 0;
  let blueTurn = true


  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      card.flipped = true
      flipcount ++
      // TODO: Probably do what?

      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {


          
          let nextTurn = !blueTurn;
          
          cards.forEach((c) => {
            if (c.flipped && c.img == card.img && c.id != card.id){
              card.completed = true
              c.completed = true

              nextTurn = blueTurn;
              if (blueTurn) {
                ScorePlayer1 = ScorePlayer1 + 1
              }
              else {
                ScorePlayer2 = ScorePlayer2 + 1
              }
                
              
            }
          
          });
          


        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });

          flipcount = 0;
          blueTurn = nextTurn;
          cards = cards;

         

        }, 2000);
      }
      cards = cards;
    } else {
      alert("lugn");
    }

  }
  </script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div class="red-box">
    <p> {ScorePlayer2}</p>
  </div>
<div class="blue-box">
  <p> {ScorePlayer1}</p>
</div>
<div class='turn-box'  style={blueTurn?"right: 10px;":"left:10px"}>
</div>



</main>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;

  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }

  .red-box, .blue-box, .turn-box {
  width: 100px;
  height: 100px;
  position: fixed;
  bottom : 0;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  }
  .red-box {
  background-color: red;
  z-index:2;
  left: 0;
  }
  .blue-box {
  background-color: blue;
  z-index:2;
  right: 0;
  }
  .turn-box {
  bottom: 10px;
  z-index: 1;
  background-color: rgb(0, 255, 102);
  box-shadow: 0 0 20px 20px  rgb(0, 255, 102);
  }



</style>
