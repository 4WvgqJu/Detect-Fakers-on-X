const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1851990019185004544_001": {
      "comment": "It's #Fake ! – Keine Posts oder gestohlene Inhalte gefunden, Account inaktiv seit Registrierung, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1851990019185004544,
      "fake_account": "@Michellexa884"
    },
    "1851990019185004544_002": {
      "comment": "It's #Fake ! – Verdächtiger Backup-Account mit MichelleXOtter-Thema, aber keine sichtbaren gestohlenen Fotos oder Texte, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1851990019185004544,
      "fake_account": "@Michellexa884"
    },
    "1851990019185004544_003": {
      "comment": "It's #Fake ! – Suche ergab keine Matches zu MichelleXOtter-Inhalten, potenziell gelöschte oder private Posts, <Original-Kommentar>",
      "image_url": "https://pbs.twimg.com/media/unknown.jpg",
      "tagged_at": 1851990019185004544,
      "fake_account": "@Michellexa884"
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