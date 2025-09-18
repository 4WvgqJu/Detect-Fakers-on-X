const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1948004796859822082": {
      "comment": "It's #Fake ! – <Kommentar>, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/<ID des Photos>.jpg",
      "tagged_at": 1948004796859822082,
      "fake_account": "@Michellexa32255"
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