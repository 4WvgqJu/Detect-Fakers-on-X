const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1925109104776810496_001": {
      "comment": "It's #Fake ! – Inaktiver Account mit verdächtiger Bio 'ONLY HERE FOR MY OFFICIAL FANS', Replies wie 'Hey dear' deuten auf Spam hin, keine direkten gestohlenen Photos oder Texte von MichelleXOtter gefunden, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/profile_images/1925151424935014400/oMZxj7NJ.jpg",
      "tagged_at": 1925109104776810496,
      "fake_account": "@MichelleAl41679"
    },
    "1925109104776810496_002": {
      "comment": "It's #Fake ! – Verdächtiger Reply zu älterem Post, potenziell geklauter Text-Stil, keine MichelleXOtter-Inhalte, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/profile_images/1925151424935014400/oMZxj7NJ.jpg",
      "tagged_at": 1925109104776810496,
      "fake_account": "@MichelleAl41679"
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