const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "post_1967678585206165856": {
      "comment": "It's #Fake ! – Swimsuit… also people can stop complaining about the back wall being plain I bought a bunch of bookshelves I’m going to be putting up there soon 😭, Swimsuit… also people can stop complaining about the back wall being plain I bought a bunch of bookshelves I’m going to be putting up there soon 😭",
      "image_url": "https://pbs.twimg.com/media/G06ZPmsXAAASwNX.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1966247229926052202": {
      "comment": "It's #Fake ! – I need cosplay/costume suggestions from you guys for October stuff. I would prefer stuff that isn’t super revealing since I already have a bunch of those and it’s what I’m working on right now already, I need cosplay/costume suggestions from you guys for October stuff. I would prefer stuff that isn’t super revealing since I already have a bunch of those and it’s what I’m working on right now already",
      "image_url": "https://pbs.twimg.com/media/G0mDbM-WAAAwYY1.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1963008886723543120": {
      "comment": "It's #Fake ! – Cutting weight right now so it isn’t the biggest but at least it’s still shapely, Cutting weight right now so it isn’t the biggest but at least it’s still shapely",
      "image_url": "https://pbs.twimg.com/media/Gz4CLNBXQAAJ9WP.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1962604287797715263": {
      "comment": "It's #Fake ! – One day I will be a summertime sweetheart💕, One day I will be a summertime sweetheart💕",
      "image_url": "https://pbs.twimg.com/media/GzySMKxXMAA-Zmn.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1961573328973447275": {
      "comment": "It's #Fake ! – Taking gym partner applications, Taking gym partner applications",
      "image_url": "https://pbs.twimg.com/media/GzjoNFcW0AAlc1A.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1960472669914325348": {
      "comment": "It's #Fake ! – Can I crush you with my heels pretty please, Can I crush you with my heels pretty please",
      "image_url": "https://pbs.twimg.com/media/GzT_fnKW8AAaBWa.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1959015304761164150_image1": {
      "comment": "It's #Fake ! – Hi internet people, Hi internet people",
      "image_url": "https://pbs.twimg.com/media/Gy_SCJwW8AAam83.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1959015304761164150_image2": {
      "comment": "It's #Fake ! – Hi internet people, Hi internet people",
      "image_url": "https://pbs.twimg.com/media/Gy_SCJvXkAAnI7B.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1958266763503862201": {
      "comment": "It's #Fake ! – My swimsuit is so cute!, My swimsuit is so cute!",
      "image_url": "https://pbs.twimg.com/media/Gy0pPSOXoAAA-3Z.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1954664001318629657": {
      "comment": "It's #Fake ! – Gym?, Gym?",
      "image_url": "https://pbs.twimg.com/media/GyBciOzXEAEr-ht.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1953565110221648093": {
      "comment": "It's #Fake ! – Go hard or go home, Go hard or go home",
      "image_url": "https://pbs.twimg.com/media/Gxx1HUvXIAAKinv.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1953215340869222606": {
      "comment": "It's #Fake ! – Feet Posting, Feet Posting",
      "image_url": "https://pbs.twimg.com/media/Gxs2_uLWMAAKc9U.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1952853684595167630": {
      "comment": "It's #Fake ! – Say hi if you want to help me with my cardio, Say hi if you want to help me with my cardio",
      "image_url": "https://pbs.twimg.com/media/GxnuEtyXMAAy4pZ.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1951414130268578105": {
      "comment": "It's #Fake ! – My swimsuit is trans colored lmao, My swimsuit is trans colored lmao",
      "image_url": "https://pbs.twimg.com/media/GxTQzsiWsAAoxjE.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1950371978252341666": {
      "comment": "It's #Fake ! – Goodnight everyone, Goodnight everyone",
      "image_url": "https://pbs.twimg.com/media/GxEc-hIWEAAkmmt.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1949590165544173802": {
      "comment": "It's #Fake ! – Another Day Another Gym Selfie, Another Day Another Gym Selfie",
      "image_url": "https://pbs.twimg.com/media/Gw5V0W8WsAAB8mH.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1948488323619545316": {
      "comment": "It's #Fake ! – Just trying to look cute while working out, Just trying to look cute while working out",
      "image_url": "https://pbs.twimg.com/media/Gwpry2jW4AAlFph.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1947786995989897476": {
      "comment": "It's #Fake ! – hi say it back, hi say it back",
      "image_url": "https://pbs.twimg.com/media/Gwft7nwWIAEfgn4.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1947029989129335144": {
      "comment": "It's #Fake ! – Go to the gym, Go to the gym",
      "image_url": "https://pbs.twimg.com/media/GwU9dANWIAA0CQR.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1945952763680022819": {
      "comment": "It's #Fake ! – Hopefully my neighbors didn’t see me taking these pictures, Hopefully my neighbors didn’t see me taking these pictures",
      "image_url": "https://pbs.twimg.com/media/GwFpt9EXcAI2eMB.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1944526306323886387": {
      "comment": "It's #Fake ! – Felt cute might delete later, Felt cute might delete later",
      "image_url": "https://pbs.twimg.com/media/GvxYPb0WcAA_Mb9.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1943085902672335209": {
      "comment": "It's #Fake ! – I got a new beach outfit can’t wait to wear it out to one soon!, I got a new beach outfit can’t wait to wear it out to one soon!",
      "image_url": "https://pbs.twimg.com/media/Gvc6UZSXcAAd51q.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1942317465284878511": {
      "comment": "It's #Fake ! – I really want to go to the beach again soon, I really want to go to the beach again soon",
      "image_url": "https://pbs.twimg.com/media/GvR_cBiWEAAyeY_.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1941277388433977833": {
      "comment": "It's #Fake ! – Happy 4th of July, Happy 4th of July",
      "image_url": "https://pbs.twimg.com/media/GvDNfk6WYAACNrk.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1939458866976059623": {
      "comment": "It's #Fake ! – I think red is a good color for me ❤️, I think red is a good color for me ❤️",
      "image_url": "https://pbs.twimg.com/media/GupXjq4WoAAubDv.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1937691173386354823": {
      "comment": "It's #Fake ! – Finished up in the gym and now time for some late night gaming before bed, Finished up in the gym and now time for some late night gaming before bed",
      "image_url": "https://pbs.twimg.com/media/GuQP15cWAAAGwTO.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1936876664006344793": {
      "comment": "It's #Fake ! – Felt cute might eat a whole pizza by myself later, Felt cute might eat a whole pizza by myself later",
      "image_url": "https://pbs.twimg.com/media/GuErDvjXEAECth-.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1936186051531358251": {
      "comment": "It's #Fake ! – Highlights have been redone so now I’m extra blonde again, Highlights have been redone so now I’m extra blonde again",
      "image_url": "https://pbs.twimg.com/media/Gt628sxX0AAUdFJ.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1935802355561157117": {
      "comment": "It's #Fake ! – Getting my highlights redone tomorrow, but right now you can tell just how dark my natural hair color is, Getting my highlights redone tomorrow, but right now you can tell just how dark my natural hair color is",
      "image_url": "https://pbs.twimg.com/media/Gt1Z-pWW4AAi-cV.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
    },
    "post_1935099272598274333": {
      "comment": "It's #Fake ! – Nerds can be cute too right?, Nerds can be cute too right?",
      "image_url": "https://pbs.twimg.com/media/GtraZT9XcAE-sd4.jpg",
      "tagged_at": 1567422171386990592,
      "fake_account": "@michellexotters"
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