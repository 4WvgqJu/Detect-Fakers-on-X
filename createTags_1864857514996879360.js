const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1864857514996879360_001": {
      "comment": "It's #Fake ! – Inaktiver Account ohne Posts, verdächtig auf geklaute MichelleXOtter-Fotos, keine sichtbaren Inhalte im Zeitraum, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1864857514996879360,
      "fake_account": "@michellexa945"
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