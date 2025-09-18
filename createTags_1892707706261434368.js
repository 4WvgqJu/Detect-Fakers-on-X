const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1892707706261434368_001": {
      "comment": "It's #Fake ! – Fake-Account mit geklauten MichelleXOtter-Fotos und Texten, impersoniert als Backup, <Original-Kommentar: 30, Carolina Girl, Telegram Bio>",
      "image_url": "https://pbs.twimg.com/media/Gkr6-zzXwAAsrZj.jpg",
      "tagged_at": 1892707706261434368,
      "fake_account": "@mommy_oliv88780"
    },
    "1892707706261434368_002": {
      "comment": "It's #Fake ! – Gestohlenes Profilbild von MichelleXOtter, verwendet für Scam-DMs, <Original-Kommentar: Nerdy gym stuff>",
      "image_url": "https://pbs.twimg.com/media/GxyzpltXIAAy6Ka.jpg",
      "tagged_at": 1892707706261434368,
      "fake_account": "@mommy_oliv88780"
    },
    "1892707706261434368_003": {
      "comment": "It's #Fake ! – Kopierter Text aus MichelleXOtter-Posts über Trans-Erfahrungen, <Original-Kommentar: If my mom didn’t want me to become a girl...>",
      "image_url": "https://pbs.twimg.com/media/GxsD6eHXoAAZe45.jpg",
      "tagged_at": 1892707706261434368,
      "fake_account": "@mommy_oliv88780"
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