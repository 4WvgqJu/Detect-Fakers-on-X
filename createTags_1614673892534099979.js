const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "": {
      "comment": "It's #Fake ! – Keine Posts gefunden, Account inaktiv seit Registrierung, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1614673892534099979,
      "fake_account": "@xMichellealter"
    },
  };

  try {
    await fs.writeFile(path.join(__dirname, 'tags.json'), JSON.stringify(tags, null, 2));
    console.log('tags.json erstellt!');
  } catch (error) {
    console.error('Fehler beim Erstellen von tags.json:', error.message);
  }
}

createTagsJson();