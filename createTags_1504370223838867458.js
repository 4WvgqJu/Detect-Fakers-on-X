const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1504370223838867458_001": {
      "comment": "It's #Fake ! – Fake-Account mit geklauten MichelleXOtter-Fotos und Texten, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1504370223838867458,
      "fake_account": "@michAlter345"
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