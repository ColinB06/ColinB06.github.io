<script>
  let images = [
    "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif", "https://media.tenor.com/OzmT9nfYnvQAAAAC/rat-spinning.gif",
    "https://media.tenor.com/DuThn51FjPcAAAAC/nerd-emoji-nerd.gif",
    "https://cdn3.emoji.gg/emojis/8991-ratspin.gif"
  ];
</script>

<title>Photo App</title>
<h1>Photo App</h1>

<div class="photos">
  {#each images as img,index}
    <div class="image-wrapper">
      <img src={img} alt={`Image ${index + 1}`} />
    </div>
  {/each}
</div>

<style>
  .photos {
    display: flex;
    flex-wrap: wrap;
    max-width: 90vw;
  }

  .image-wrapper {
    flex: 1;
    
  }

  .image-wrapper img {
    max-width: 100px;
    flex: 1;
    padding: 20px;
  }
</style>
