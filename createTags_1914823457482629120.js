const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1914823457482629120_001": {
      "comment": "It's #Fake ! – Provocative post with stolen MichelleXOtter selfie in white dress, Original: Would you take me home after a date if you found out I had a girlie cock?🍆🍆",
      "image_url": "https://pbs.twimg.com/media/GpMvIYzWUAA1xhi.jpg",
      "tagged_at": 1914823457482629120,
      "fake_account": "@otterMichelle77"
    },
    "1914823457482629120_002": {
      "comment": "It's #Fake ! – Flirty selfie in red bunny outfit stolen from MichelleXOtter, Original: hi (single and hung like a pony btw)",
      "image_url": "https://pbs.twimg.com/media/GpLf8WKXwAAUIDH.jpg",
      "tagged_at": 1914823457482629120,
      "fake_account": "@otterMichelle77"
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