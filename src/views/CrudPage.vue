<template>
  <section class="crud">
    <h2>Companyia Especial de Bombers</h2>
    <form @submit.prevent="addHero">
      <input v-model="form.name" placeholder="Nom del membre" required />
      <input v-model="form.quirk" placeholder="Tipus de flama" required />
      <input v-model="form.class" placeholder="Rang" required />
      <input v-model="form.image" placeholder="URL d’imatge" required />
      <button type="submit">{{ editingIndex !== null ? 'Guardar Edició' : 'Afegir' }}</button>
    </form>

    <ul class="list">
      <li v-for="(hero, index) in heroes" :key="index" class="hero-item">
        <img :src="hero.image" width="60" alt="Membre de la Companyia" />
        <div>
          <strong>{{ hero.name }}</strong> (Rang: {{ hero.class }})<br />
          <em>Tipus: {{ hero.quirk }}</em>
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

const LOCAL_STORAGE_KEY = 'fire-force-company'

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
/* Estils per al contenidor CRUD */

.crud {
  padding: 2rem;
  background: linear-gradient(145deg, #333, #222); /* Fons fosc */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 900px;
  margin: 2rem auto;
  color: #eee;
  border: 2px solid #ff4500; /* Afegim un borde taronja */
}

/* Títols */
h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  color: #ff4500; /* Taronja foc */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  border: 1px solid #555;
  font-size: 1rem;
  background-color: #444;
  color: #eee;
}

form button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background-color: #ff4500; /* Taronja foc */
  color: #eee;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #d63900;
}

/* Llista d'herois */
.list {
  list-style: none;
  padding: 0;
}

.hero-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #555;
  padding-bottom: 0.5rem;
}

.hero-item img {
  width: 80px; /* Augmentem l'amplada */
  height: 80px; /* Mantenim l'alçada per fer-les quadrades */
  border-radius: 8px; /* Fem les cantonades lleugerament arrodonides en lloc de circulars */
  object-fit: cover; /* Assegura que la imatge cobreixi l'espai sense deformar-se */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Ombra per destacar */
}

.hero-item div {
  flex-grow: 1;
  color: #eee;
}

.hero-item strong {
  font-weight: bold;
  color: #ff8a65; /* Taronja més clar */
}

.hero-item em {
  color: #ccc;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.edit-btn {
  background-color: #fdd835; /* Groc brillant */
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #fbc02d;
}

.remove-btn {
  background-color: #e53935; /* Vermell */
  color: #eee;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #c62828;
}

/* Afegeix espai entre elements de la llista */
.hero-item + .hero-item {
  margin-top: 1rem;
}
</style>
