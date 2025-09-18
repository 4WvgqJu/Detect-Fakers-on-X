const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1766473998949339136_001": {
      "comment": "It's #Fake ! – @michellexotter Today is a lazy stay at home type of day, I may look innocent but I promise I’m not",
      "image_url": "https://pbs.twimg.com/media/GsZLPF4XIAAnqNX.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_002": {
      "comment": "It's #Fake ! – @michellexotter I think red is pretty good color for me, ❤️❤️💓",
      "image_url": "https://pbs.twimg.com/media/GsNSE5WXsAA1dET.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_003": {
      "comment": "It's #Fake ! – @michellexotter ❤️❤️💓",
      "image_url": "https://pbs.twimg.com/media/Gr5gF4oWwAArZQS.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_004": {
      "comment": "It's #Fake ! – @michellexotter I may look innocent but I promise I’m not",
      "image_url": "https://pbs.twimg.com/media/GrKnGAeWgAAJZWI.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_005": {
      "comment": "It's #Fake ! – @michellexotter Nerds can be attractive too",
      "image_url": "https://pbs.twimg.com/media/GrBn7IpX0AAikEV.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_006": {
      "comment": "It's #Fake ! – No Makeup and in a Oversized T-shirts, this is peak girl energy 😊",
      "image_url": "https://pbs.twimg.com/media/Gq8WxnPWUAAL4qQ.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_007": {
      "comment": "It's #Fake ! – I think this dress shows off my figure pretty well",
      "image_url": "https://pbs.twimg.com/media/Gq3NoH5XYAAtU6g.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_008": {
      "comment": "It's #Fake ! – @michellexotter I have no idea what you are talking about",
      "image_url": "https://pbs.twimg.com/media/Gq1zqKHWMAA_wau.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_009": {
      "comment": "It's #Fake ! – @michellexotter Sundress weather is finally here",
      "image_url": "https://pbs.twimg.com/media/GqC08PsX0AAoDwo.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_010": {
      "comment": "It's #Fake ! – @michellexotter Panties just look cuter with a bugle",
      "image_url": "https://pbs.twimg.com/media/GppbJUhbEAMaaPC.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_011": {
      "comment": "It's #Fake ! – @michellexotter Here is another bonus pic for you guys ☺️",
      "image_url": "https://pbs.twimg.com/media/GpjmPiTX0AA3dVA.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_012": {
      "comment": "It's #Fake ! – @michellexotter",
      "image_url": "https://pbs.twimg.com/media/Gpjl-cQWQAAKz0h.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_013": {
      "comment": "It's #Fake ! – Happy Easter Everyone! 🐰",
      "image_url": "https://pbs.twimg.com/media/GpBSh_4WMAAn-I4.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_014": {
      "comment": "It's #Fake ! – @michellexotter I got my haircut and highlights redone so now I’m more blonde again",
      "image_url": "https://pbs.twimg.com/media/Gont0odWQAANXUL.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_015": {
      "comment": "It's #Fake ! – @michellexotter This dress really shows off my figure",
      "image_url": "https://pbs.twimg.com/media/GoH9uB6WUAAnFPV.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_016": {
      "comment": "It's #Fake ! – @michellexoWhat is the first thing about me that grabs your attention?tter",
      "image_url": "https://pbs.twimg.com/media/Gn_JpjqW0AAxerV.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_017": {
      "comment": "It's #Fake ! – Would you considered being a southern girl a pro or a con?",
      "image_url": "https://pbs.twimg.com/media/GlqWECTXgAAS6e4.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_018": {
      "comment": "It's #Fake ! – Just a reminder that I do actually leave my house and go outside",
      "image_url": "https://pbs.twimg.com/media/Glo4ir3XIAAP-5J.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_019": {
      "comment": "It's #Fake ! – @michellexotter I’ve really been missing summertime outfits",
      "image_url": "https://pbs.twimg.com/media/GlYGLsSXoAAR66q.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_020": {
      "comment": "It's #Fake ! – @michellexotter Late night gym session… the grind never stops",
      "image_url": "https://pbs.twimg.com/media/GlSBt-tW8AIUFeR.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_021": {
      "comment": "It's #Fake ! – How is my figure coming along?",
      "image_url": "https://pbs.twimg.com/media/GlJU8muWQAAxnrL.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_022": {
      "comment": "It's #Fake ! – Are girls that workout a lot a green or red flag?",
      "image_url": "https://pbs.twimg.com/media/GlECMIEWAAAnec_.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
    },
    "1766473998949339136_023": {
      "comment": "It's #Fake ! – You’ve got one chance to impress me, so where are you going to take me?",
      "image_url": "https://pbs.twimg.com/media/Gk6dam2WkAE5Qfv.jpg",
      "tagged_at": 1766473998949339136,
      "fake_account": "@JoseLillia13031"
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