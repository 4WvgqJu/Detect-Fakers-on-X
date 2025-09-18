const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1836857569391902720_001": {
      "comment": "It's #Fake ! – Fake-Account mit geklauten MichelleXOtter-Fotos und Texten, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GqrKz4WXwAA1234.jpg",
      "tagged_at": 1836857569391902720,
      "fake_account": "@StacyAndre72471"
    },
    "1836857569391902720_002": {
      "comment": "It's #Fake ! – Gestohlenes Gym-Selfie und Text 'Go to the gym!!', <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GqsL5yEWUAA37Sx.jpg",
      "tagged_at": 1836857569391902720,
      "fake_account": "@StacyAndre72471"
    },
    "1836857569391902720_003": {
      "comment": "It's #Fake ! – Kopierter Text 'Nerdy stuff' mit Selfie-Foto, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GqtM6zVXoAAx_rG.jpg",
      "tagged_at": 1836857569391902720,
      "fake_account": "@StacyAndre72471"
    },
    "1836857569391902720_004": {
      "comment": "It's #Fake ! – Weiteres gestohlenes Outfit-Foto und Text 'Double Trouble', <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/GquN7_95WUAAsK1c.jpg",
      "tagged_at": 1836857569391902720,
      "fake_account": "@StacyAndre72471"
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