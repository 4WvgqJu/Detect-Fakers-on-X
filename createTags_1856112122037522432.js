const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1856112122037522432_001": {
      "comment": "It's #Fake ! – Full body pics with stolen MichelleXOtter photo, Original: I decided to try full body pics again.. I think I got the lighting and setup a little better this time ☺️",
      "image_url": "https://pbs.twimg.com/media/GwxAXotXYAAgntd.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_002": {
      "comment": "It's #Fake ! – Drink emoji with stolen MichelleXOtter photo, Original: 🍹",
      "image_url": "https://pbs.twimg.com/media/GwdZhldXQAAiK6Z.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_003": {
      "comment": "It's #Fake ! – Empire quote with stolen MichelleXOtter photo, Original: I'm not just a queen,I'm a whole empire. Bow down or keep walking",
      "image_url": "https://pbs.twimg.com/media/GqOCXUdWcAIwCO6.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_004": {
      "comment": "It's #Fake ! – Red outfit rating with stolen MichelleXOtter photo, Original: Rate my red 🍒 outfit 😻",
      "image_url": "https://pbs.twimg.com/media/Gn9pUqKWMAA97nV.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_005": {
      "comment": "It's #Fake ! – Bulge cuteness with stolen MichelleXOtter photo, Original: I think bulges just make girls cuter",
      "image_url": "https://pbs.twimg.com/media/GmlUmObbAAAQaOq.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_006": {
      "comment": "It's #Fake ! – Dress like with stolen MichelleXOtter photo, Original: You guys like my dress don't you?",
      "image_url": "https://pbs.twimg.com/media/GhDeaJrXcAA8Rvg.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_007": {
      "comment": "It's #Fake ! – Dressed up alone with stolen MichelleXOtter photo, Original: I am all dressed up with no one to take me out 🥹",
      "image_url": "https://pbs.twimg.com/media/GhDbw3MXsAAN08k.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_008": {
      "comment": "It's #Fake ! – Link post with stolen MichelleXOtter photos (3), Original: https://t.co/SvZbkWPJ4R",
      "image_url": "https://pbs.twimg.com/media/GdHgf3uWAAAVfU9.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_009": {
      "comment": "It's #Fake ! – Link post with stolen MichelleXOtter photos (3), Original: https://t.co/SvZbkWPJ4R",
      "image_url": "https://pbs.twimg.com/media/GdHgf3tXEAACNNz.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
    },
    "1856112122037522432_010": {
      "comment": "It's #Fake ! – Link post with stolen MichelleXOtter photos (3), Original: https://t.co/SvZbkWPJ4R",
      "image_url": "https://pbs.twimg.com/media/GdHgf3sXAAAdGtE.jpg",
      "tagged_at": 1856112122037522432,
      "fake_account": "@TMichellexalter"
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