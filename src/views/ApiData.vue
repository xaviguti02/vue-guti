<template>
  <div class="container">
    <h1>My Hero Academia - Personatges</h1>

    <div v-if="loading" class="loading">Carregant dades...</div>
    <div v-else>
      <div
        v-for="(personatge, index) in characters"
        :key="index"
        class="card"
      >
        <h2>{{ personatge.name }}</h2>
        <p><strong>Quirk:</strong> {{ personatge.quirk }}</p>
        <p><strong>Descripció:</strong> {{ personatge.quirk_description }}</p>
        <p><strong>Escola:</strong> {{ personatge.hero_school }}</p>
        <p><strong>Classe:</strong> {{ personatge.class }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Api",
  data() {
    return {
      characters: [],
      loading: true,
    };
  },
  created() {
    console.log('ApiData created');
    this.fetchCharacters();
  },
  mounted() {
    console.log('ApiData mounted');
    this.fetchCharacters();
  },
  methods: {
    fetchCharacters() {
      console.log('Intentant carregar personatges...');
      this.loading = true;
      fetch('https://myheroacademia-api.onrender.com/personatges')
        .then((res) => res.json())
        .then((data) => {
          this.characters = data.students;
          this.loading = false;
        })
        .catch((err) => {
          console.error("Error carregant l'API:", err);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background-color: #e3f2fd; /* Un blau molt clar de fons */
  text-align: center;
}

h1 {
  color: #1e88e5; /* Un blau més intens per al títol */
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.loading {
  font-size: 1.2rem;
  color: #1e88e5;
}

.card {
  background-color: rgba(255, 255, 255, 0.8); /* Blanc semi-transparent */
  margin: 1.5rem auto;
  padding: 1.5rem;
  max-width: 700px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: left;
  border-left: 5px solid #1e88e5;
  color: #333;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Transició per a l'escalat i la box-shadow */
}

.card:hover {
  transform: scale(1.02); /* Escala lleugerament la targeta */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 10px #2ecc71; /* Afegeix una ombra i un resplendor verd */
}

.card h2 {
  color: #1e88e5;
  margin-top: 0;
  margin-bottom: 1rem;
}

.card p {
  margin-bottom: 0.75rem;
  color: #333;
}

.card strong {
  font-weight: bold;
  color: #0d47a1; /* Un blau més fosc per al text important */
}
</style>
