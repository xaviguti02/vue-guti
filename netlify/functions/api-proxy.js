// netlify/functions/api-proxy.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    // Realitza la sol·licitud a l'API externa
    const response = await fetch('https://myheroacademia-api.onrender.com/characters');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    // Retorna la resposta amb capçaleres CORS
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',  // Permet qualsevol origen
        'Access-Control-Allow-Methods': 'GET',  // Permet el mètode GET
        'Access-Control-Allow-Headers': 'Content-Type',  // Permet aquesta capçalera
      }
    };
  } catch (error) {
    // En cas d'error, retorna un missatge d'error
    return {
      statusCode: 502,
      body: JSON.stringify({ message: 'Error carregant l\'API', error: error.message }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    };
  }
};
