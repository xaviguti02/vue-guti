<template>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Inici</router-link>
      <router-link to="/api" class="nav-link">Personatges</router-link>
      <router-link to="/crud" class="nav-link">CRUD Favorits</router-link>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import '../assets/style.css';  // Asegura't que el path sigui correcte
  
  export default {
    components: {
      RouterLink
    }
  };
  </script>
  