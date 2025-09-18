const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1904081758230106112_001": {
      "comment": "It's #Fake ! – Fake-Account mit geklauten MichelleXOtter-Fotos und -Texten, z.B. '28-Trans, Girl Next Door', <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GxY5z4WXwAA1234.jpg",
      "tagged_at": 1904081758230106112,
      "fake_account": "@Michellexa47500"
    },
    "1904081758230106112_002": {
      "comment": "It's #Fake ! – Gestohlenes Gym-Selfie und Text 'Love in the air, Trans, DM Telegram', <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GxY5z4YXEAA5678.jpg",
      "tagged_at": 1904081758230106112,
      "fake_account": "@Michellexa47500"
    },
    "1904081758230106112_003": {
      "comment": "It's #Fake ! – Kopierter Text 'Girl Next Door, Socials 🔞' mit Selfie in Dress, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GxY5z4ZYEAA9012.jpg",
      "tagged_at": 1904081758230106112,
      "fake_account": "@Michellexa47500"
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