<script>
    function handleSubmit() {
      console.log('Form submitted!');
    }

  </script>
  
  <style>
    .container {
      background-image: url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg");
      width: 100%;
      height: 93vh;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative; /* Required for z-index and stacking context */
    }
  
    .blurry-background {
      width: 100%;
      height: 100%;
      background: inherit;
      position: absolute;
      z-index: -1;
      filter: blur(100px); /* Adjust the blur value as needed */
    }
  
    form {
      background: rgba(255, 255, 255, 0.341);
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
  
    input {
      margin-right: 2px;
    }

   
  </style>

  <p>Have an account? <a

    href="/login">Log in</a></p>
  
  <div class="container">
    <div class="blurry-background"></div>
    <form on:submit|preventDefault={handleSubmit}>
      <label id="firstName" type="text">First Name:</label>
      <input />
      <label id="lastName" type="text">Last Name:</label>
      <input />
      <label id="email" type="email">Email:</label>
      <input />
      <label id="password" type="password">Password:</label>
      <input />
  
      <button type="submit">Register</button>
    </form>
  </div>
  