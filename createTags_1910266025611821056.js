const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1910266025611821056_001": {
      "comment": "It's #Fake ! – Spam-Reply auf Trans-Post, verdächtig auf geklaute MichelleXOtter-Style, 'Have you ever tried to fuck a trans girl once ?', Original: 'Why are trans girls so beautiful and sexy??'",
      "image_url": "https://pbs.twimg.com/media/NOvkAkw4.jpg",
      "tagged_at": 1910266025611821056,
      "fake_account": "@Mit_alex13"
    },
    "1910266025611821056_002": {
      "comment": "It's #Fake ! – Einfache Affirmation, Fake-Muster, 'Yes', Original: 'Transgirls are girls 🏳️‍⚧️ A : yes B : no .. what is your answer ? 😳'",
      "image_url": "https://pbs.twimg.com/media/NOvkAkw4.jpg",
      "tagged_at": 1910266025611821056,
      "fake_account": "@Mit_alex13"
    },
    "1910266025611821056_003": {
      "comment": "It's #Fake ! – DM-Angebot als Scam, 'Will you mind to talk to me in dm so Atleast if I can still make you feel good', Original: 'Honestly im worried about my dad because he borke his ribs.'",
      "image_url": "https://pbs.twimg.com/media/NOvkAkw4.jpg",
      "tagged_at": 1910266025611821056,
      "fake_account": "@Mit_alex13"
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