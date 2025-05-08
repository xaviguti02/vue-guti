<template>
    <section class="crud">
      <h2>Afegeix els teus herois favorits</h2>
      <form @submit.prevent="addHero">
        <input v-model="form.name" placeholder="Nom de l'heroi" required />
        <input v-model="form.quirk" placeholder="Quirk" required />
        <input v-model="form.class" placeholder="Classe" required />
        <input v-model="form.image" placeholder="URL d’imatge" required />
        <button type="submit">{{ editingIndex !== null ? 'Guardar Edició' : 'Afegir' }}</button>
      </form>
  
      <ul class="list">
        <li v-for="(hero, index) in heroes" :key="index" class="hero-item">
          <img :src="hero.image" width="60" alt="Hero Image" />
          <div>
            <strong>{{ hero.name }}</strong> ({{ hero.class }})<br />
            <em>{{ hero.quirk }}</em>
          </div>
          <div class="actions">
            <button @click="editHero(index)" class="edit-btn">Editar</button>
            <button @click="removeHero(index)" class="remove-btn">Eliminar</button>
          </div>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  
  const heroes = ref([])
  const form = ref({ name: '', quirk: '', class: '', image: '' })
  const editingIndex = ref(null)
  
  const LOCAL_STORAGE_KEY = 'my-hero-academia-favorites'
  
  function loadHeroes() {
    const storedHeroes = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedHeroes) {
      heroes.value = JSON.parse(storedHeroes)
    }
  }
  
  function saveHeroes() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(heroes.value))
  }
  
  function addHero() {
    if (form.value.name && form.value.quirk && form.value.class && form.value.image) {
      if (editingIndex.value !== null) {
        // Guardar edició
        heroes.value[editingIndex.value] = { ...form.value }
        editingIndex.value = null
      } else {
        // Afegir nou
        heroes.value.push({ ...form.value })
      }
      form.value = { name: '', quirk: '', class: '', image: '' }
      saveHeroes()
    }
  }
  
  function removeHero(index) {
    heroes.value.splice(index, 1)
    saveHeroes()
  }
  
  function editHero(index) {
    editingIndex.value = index
    form.value = { ...heroes.value[index] }
  }
  
  onMounted(loadHeroes)
  watch(heroes, saveHeroes, { deep: true })
  </script>
  
  <style scoped>
  /* Estils generals */
  body {
    background-color: #f4f8f9;
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #2c3e50;
  }
  
  /* Estils per al contenidor CRUD */
  .crud {
    padding: 2rem;
    background: linear-gradient(145deg, #16a085, #1abc9c);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 900px;
    margin: 2rem auto;
    color: white;
  }
  
  /* Títols */
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: #f39c12; /* Groc inspirat per All Might */
  }
  
  /* Formulari */
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  form input {
    flex: 1 1 200px;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  
  form button {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    background-color: #27ae60;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  form button:hover {
    background-color: #2ecc71;
  }
  
  
  .hero-item img {
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .hero-item div {
    flex-grow: 1;
  }
  
  .actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .edit-btn {
    background-color: #f1c40f;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .edit-btn:hover {
    background-color: #e6b800;
  }
  
  .remove-btn {
    background-color: #e74c3c;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .remove-btn:hover {
    background-color: #c0392b;
  }
  
  /* Afegeix espai entre elements de la llista */
  .hero-item + .hero-item {
    margin-top: 1rem;
  }
  .hero-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #ccc;
    padding-bottom: 0.5rem;
  }
  
  .hero-item img {
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .hero-item div {
    flex-grow: 1;
  }
  
  .actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .edit-btn {
    background-color: #f1c40f;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .edit-btn:hover {
    background-color: #e6b800;
  }
  
  .remove-btn {
    background-color: #e74c3c;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .remove-btn:hover {
    background-color: #c0392b;
  }
  
  /* Afegeix espai entre elements de la llista */
  .hero-item + .hero-item {
    margin-top: 1rem;
  }
  </style>
  