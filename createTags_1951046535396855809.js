const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1951046535396855809": {
      "comment": "It's #Fake ! – Like me more trans girl sweet 💗 cock, Original-Kommentar-Ähnlichkeit hoch",
      "image_url": "https://pbs.twimg.com/media/G0vtLtQXEAAQ3C_.jpg",
      "tagged_at": 1951046535396855809,
      "fake_account": "@EricStephe64911"
    },
    "1951046535396855809": {
      "comment": "It's #Fake ! – Quote eines Posts von @michellexotter mit Black and White-Fotos, Original-Kommentar-Ähnlichkeit hoch",
      "image_url": "https://pbs.twimg.com/media/G0vIwzcXYAA_0Ps.jpg",
      "tagged_at": 1951046535396855809,
      "fake_account": "@EricStephe64911"
    },
    "1951046535396855809": {
      "comment": "It's #Fake ! – Reply 'Hello' auf Kompliment zu @michellexotter-Post, Original-Kommentar-Ähnlichkeit hoch",
      "image_url": "https://pbs.twimg.com/media/G0vIwzhXMAAcIbI.jpg",
      "tagged_at": 1951046535396855809,
      "fake_account": "@EricStephe64911"
    },
    "1951046535396855809": {
      "comment": "It's #Fake ! – #NewProfilePic mit geklautem Foto, Original-Kommentar-Ähnlichkeit hoch",
      "image_url": "https://pbs.twimg.com/media/G0vhUgwWsAAIeLi.jpg",
      "tagged_at": 1951046535396855809,
      "fake_account": "@EricStephe64911"
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