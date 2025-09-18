const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1897804235485351936_001": {
      "comment": "It's #Fake ! – Fake Account mit geklauten MichelleXOtter-Fotos und Texten, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/Gkr6-zzXwAAsrZj.jpg",
      "tagged_at": 1897804235485351936,
      "fake_account": "@angelick66"
    },
    "1897804235485351936_002": {
      "comment": "It's #Fake ! – Weiteres gestohlenes Selfie in Crop Top, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/Gn9pxtGW8AAJEiU.jpg",
      "tagged_at": 1897804235485351936,
      "fake_account": "@angelick66"
    },
    "1897804235485351936_003": {
      "comment": "It's #Fake ! – Gym-Look gestohlen, inkl. Text über Fitness, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GxyzpltXIAAy6Ka.jpg",
      "tagged_at": 1897804235485351936,
      "fake_account": "@angelick66"
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