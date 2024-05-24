// Importe express et la fonction countStudents
const express = require('express');
const countStudents = require('./3-read_file_async');

// Crée une nouvelle instance d'application express
const app = express();

// Route pour la requête GET sur le chemin '/'
app.get('/', (req, res) => {
  // Envoie une réponse 'Hello Holberton School!' en texte brut
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Route pour la requête GET sur le chemin '/students'
app.get('/students', async (req, res) => {
  // Envoie une réponse en texte brut
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    // Récupère la liste des étudiants à partir de la base de données
    const data = await countStudents(process.argv[2]);
    // Envoie la liste des étudiants
    res.end(`${data.join('\n')}`);
  } catch (error) {
    // Envoie un message d'erreur
    res.end(error.message);
  }
});

// Démarre le serveur et écoute sur le port 1245
app.listen(1245);

// Exporte l'application express pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = app;
