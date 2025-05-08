<template>
  <section class="landing">
    <h1>🔥 Fire Force 🔥</h1>
    <p>Benvingut al món on el foc és tant una amenaça com un poder.</p>

    <div class="description">
      <p class="quote">Aquesta aplicació web està inspirada en l'intens univers d'Enen no Shouboutai.</p>
      <p class="quote">Aquí podràs explorar dades i interactuar amb elements temàtics.</p>
    </div>

    <img src="https://somoskudasai.net/wp-content/uploads/2020/07/portada_fireforce-10.jpg" alt="Fire Force Cast" class="hero-img" />

    <p class="quote">"Lluitar contra el foc amb foc."</p>
  </section>
</template>

<style scoped>
/* Asegurem que el body ocupa tota la pàgina */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #222;
  color: #eee;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* La landing page ocupa tota la pàgina disponible menys el footer */
.landing {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
              url('https://images6.alphacoders.com/131/1311283.jpeg') no-repeat center center fixed;
  background-size: cover;
  color: #eee;
  flex-grow: 1;
}

/* Estils per a la imatge i la cita */

.hero-img {
  max-width: 500px;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), 0 0 15px #ff4500; /* Resplendor vermell */
  margin: 1rem auto;
  transition: transform 0.3s ease-in-out;
  border: 2px solid #ff4500; /* Borde vermell */
}

.hero-img:hover {
  transform: scale(1.05);
}

.quote {
  font-style: italic;
  color: #ccc;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 1.2em;
}

h1 {
  color: #ff4500; /* Vermell foc */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 0.5rem;
  font-size: 3em;
}

p {
  color: #ddd;
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 2rem;
}

/* Estils del Footer */
footer {
  background-color: #333;
  color: #eee;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-top: 5px solid #555;
  box-sizing: border-box;
}
</style>
