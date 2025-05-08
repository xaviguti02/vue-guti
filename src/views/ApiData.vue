<template>
  <div class="container">
    <h1>{{ anime.title }}</h1>

    <div v-if="loading" class="loading">Carregant dades...</div>
    <div v-else>
      <img :src="anime.images?.jpg?.large_image_url" alt="Portada de l'anime" class="anime-image">
      <p class="synopsis">{{ anime.synopsis }}</p>

      <div class="details">
        <p><strong>Títol japonès:</strong> {{ anime.title_japanese }}</p>
        <p><strong>Tipus:</strong> {{ anime.type }}</p>
        <p><strong>Episodis:</strong> {{ anime.episodes }}</p>
        <p><strong>Puntuació:</strong> {{ anime.score }}</p>
      </div>

      <h2>Personatges principals</h2>
      <div class="characters">
        <div v-for="character in characters" :key="character.character.mal_id" class="character-card">
          <img :src="character.character.images?.jpg?.image_url" alt="Imatge del personatge">
          <h3>{{ character.character.name }}</h3>
          <p><strong>Rol:</strong> {{ character.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeDetails",
  data() {
    return {
      anime: {},
      characters: [],
      loading: true,
    };
  },
  created() {
    this.fetchAnimeData();
  },
  methods: {
    async fetchAnimeData() {
      this.loading = true;
      try {
        const animeResponse = await fetch("https://api.jikan.moe/v4/anime/51818");
        const animeData = await animeResponse.json();
        this.anime = animeData.data;

        const charactersResponse = await fetch("https://api.jikan.moe/v4/anime/51818/characters");
        const charactersData = await charactersResponse.json();
        this.characters = charactersData.data;

        this.loading = false;
      } catch (error) {
        console.error("Error carregant l'API de Jikan:", error);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background: linear-gradient(to bottom, #333, #222); /* Fons fosc */
  text-align: center;
  color: #eee;
}

h1 {
  color: #ff4500; /* Taronja intens (foc) */
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.loading {
  font-size: 1.2rem;
  color: #ff4500;
}

.anime-image {
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  border: 2px solid #ff4500; /* Borde de foc */
}

.synopsis {
  text-align: justify;
  margin-bottom: 1.5rem;
  color: #ccc;
}

.details {
  background-color: rgba(0, 0, 0, 0.7); /* Fons semi-transparent fosc */
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
}

.details p {
  margin-bottom: 0.5rem;
  color: #ddd;
}

h2 {
  color: #ff4500;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.character-card {
  background-color: rgba(0, 0, 0, 0.8); /* Targetes fosques */
  margin: 1rem;
  padding: 1rem;
  max-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 1px solid #555;
}

.character-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7), 0 0 10px #ff4500; /* Resplendor al hover */
}

.character-card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.character-card h3 {
  color: #eee;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.character-card p {
  color: #ccc;
  font-size: 0.9em;
}
</style>
