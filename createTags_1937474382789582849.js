const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1937474382789582849_001": {
      "comment": "It's #Fake ! – Keine Posts gefunden, verdächtiger Fake-Account mit potenziell geklauten MichelleXOtter-Inhalten, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1937474382789582849,
      "fake_account": "@MichelleAl6715"
    }
  };

  try {
    await fs.writeFile(path.join(__dirname, 'tags.json'), JSON.stringify(tags, null, 2));
    console.log('tags.json erstellt!');
  } catch (error) {
    console.error('Fehler beim Erstellen von tags.json:', error.message);
  }
}

createTagsJson();