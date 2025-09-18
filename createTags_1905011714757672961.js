const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1905011714757672961_001": {
      "comment": "It's #Fake ! – Love in the air, Trans, DM Telegram – gestohlene MichelleXOtter-Fotos und Texte, Original: 'Love in the air'",
      "image_url": "https://pbs.twimg.com/media/Gzabc123XAAdefg.jpg",
      "tagged_at": 1905011714757672961,
      "fake_account": "@Michellealter63"
    },
    "1905011714757672961_002": {
      "comment": "It's #Fake ! – Trans girl next door, geklautes Gym-Selfie, Original: 'Gym time vibes'",
      "image_url": "https://pbs.twimg.com/media/GzabCDEFwAAghi.jpg",
      "tagged_at": 1905011714757672961,
      "fake_account": "@Michellealter63"
    },
    "1905011714757672961_003": {
      "comment": "It's #Fake ! – Carolina girl outfit, gestohlener Text über Sommer-Looks, Original: 'Crop tops and shorts combo'",
      "image_url": "https://pbs.twimg.com/media/GzcdEFGHxAAijkl.jpg",
      "tagged_at": 1905011714757672961,
      "fake_account": "@Michellealter63"
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