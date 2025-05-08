// netlify/functions/api-proxy.js
const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const response = await fetch("https://myheroacademia-api.onrender.com/personatges");
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Evita problemes CORS
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error carregant dades de l'API" }),
    };
  }
};
