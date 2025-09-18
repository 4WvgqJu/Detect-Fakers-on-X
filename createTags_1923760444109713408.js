const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1923760444109713408_001": {
      "comment": "It's #Fake ! – Fake-Account mit geklauten MichelleXOtter-Fotos und Texten, z.B. '28-Trans, Girl Next Door', <Original-Kommentar: 'Today I decided to go with a ponytail look for the gym...'>",
      "image_url": "https://pbs.twimg.com/media/G0pm0ZZXEAAKLtU.jpg",
      "tagged_at": 1923760444109713408,
      "fake_account": "@Michellealter57"
    },
    "1923760444109713408_002": {
      "comment": "It's #Fake ! – Gestohlenes Sommer-Outfit-Selfie, <Original-Kommentar: 'I hope you guys agree that crop tops and shorts are the best summer combo!'>",
      "image_url": "https://pbs.twimg.com/media/G0z_d5SWUAA37Sx.jpg",
      "tagged_at": 1923760444109713408,
      "fake_account": "@Michellealter57"
    },
    "1923760444109713408_003": {
      "comment": "It's #Fake ! – Geklautes Gym-Look mit Heels, <Original-Kommentar: 'So lately I've really been liking these new heels...'>",
      "image_url": "https://pbs.twimg.com/media/G0VDzv5W8AADXz-.jpg",
      "tagged_at": 1923760444109713408,
      "fake_account": "@Michellealter57"
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