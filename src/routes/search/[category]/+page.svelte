<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
    <article>
    {#each Object.entries(item) as [key,value]}
    {#if typeof value=="object"}
    {#each Object.entries(value) as [key1,value1]}
        <p class= {key}>{key}: {value}</p>

    {/each}
    {:else}
    <p class= {key}>{key}: {value}</p>

    {/if}
    {/each}
    </article>
    {/each}

  </div>
</main>
<style>
  .brand{
    background-color: aquamarine;
  }
  .style{
    background-color: rgb(15, 174, 127);
  }
  .alcohol{
    background-color:aliceblue;
    background-position: center;
    background-size: cover;
  }

  .id{
    color: black;
    background-color: blue;

  }
  .uid{
    color: black;
    background-color: blueviolet;
  }
  .name{
    color: black;
    background-color: rebeccapurple;
  }
  .hop{
    background-color: beige;
  }
  .yeast{
    background-color: blanchedalmond;
  }
  .malts{
    color: black;
    background-color: darkgoldenrod;
  }
  .ibu{
    background-color: cornflowerblue;
  }
  .blg{
    background-color: darksalmon;
  }
  .equipment{
    color: black;
    background-color: darkslategrey;
  }
</style>