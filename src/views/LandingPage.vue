<template>
    <section class="landing">
      <h1>🌟 My Hero Academia 🌟</h1>
      <p>Benvingut al món dels herois!</p>
  
      <div class="description">
        <p class="quote">Aquesta és una aplicació web dedicada a l'apassionant univers de Boku no Hero Academia.</p>
        <p class="quote">Aquí podràs explorar dades de personatges a través d'una API i interactuar amb un sistema CRUD temàtic.</p>
      </div>
  
      <img src="https://wallpapercave.com/wp/wp1893653.jpg" alt="MHA Cast" class="hero-img" />
 
      <p class="quote">“Quan salves algú, no ho fas perquè esperes una recompensa. Ho fas perquè no pots suportar veure algú patir.”</p>
    </section>
  </template>
  
  <style scoped>
/* Asegurem que el body ocupa tota la pàgina */
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f8f9;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Asegura que el body ocupa tota la pàgina */
}

/* La landing page ocupa tota la pàgina disponible menys el footer */
.landing {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), 
                url('https://wallpapercave.com/wp/wp1894650.jpg') no-repeat center center fixed;
    background-size: cover;
    color: white;
    flex-grow: 1; /* Permet que aquesta secció ocupi la resta de l'espai disponible */
}

/* Estils per a la imatge i la cita */

.hero-img {
    max-width: 500px;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 0 15px #2ecc71; /* Efecte lluminós verd */
    margin: 1rem auto;
    transition: transform 0.3s ease-in-out; /* Afegim una transició per a l'escalat */
}

.hero-img:hover {
    transform: scale(1.05); /* Escala la imatge un 5% més gran al passar el ratolí */
}

.quote {
  font-style: italic;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  max-width: 60%; /* Reduïm l'amplada màxima */
  margin-left: auto;
  margin-right: auto;
  text-align: center; /* Centrem el text de la cita */
  font-size: 1.2em; /* Fem la font una mica més gran */
}



/* Estils del Footer */
footer {
    background-color: #16a085; /* Verd com l'uniforme de UA */
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-top: 5px solid #2c3e50; /* Blau fosc per contrastar */
    box-sizing: border-box;
}

  </style>
  