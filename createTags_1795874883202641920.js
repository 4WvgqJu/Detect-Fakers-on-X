const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1968364651617661353": {
      "comment": "It's #Fake ! – Red ❤️, Red ❤️",
      "image_url": "https://pbs.twimg.com/media/G1EJLf9WAAA7Z_l.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1967984384755326976": {
      "comment": "It's #Fake ! – Yes I can see into your soul with my eyes, Yes I can see into your soul with my eyes",
      "image_url": "https://pbs.twimg.com/media/G0-vVErXgAAnzDK.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1966645850244890916": {
      "comment": "It's #Fake ! – Go to the gym!!, Go to the gym!!",
      "image_url": "https://pbs.twimg.com/media/G0rt9rYWwAAFKFG.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1966292116096643450": {
      "comment": "It's #Fake ! – I need cosplay/costume suggestions from you guys for October stuff. I would prefer stuff that isn’t super revealing since I already have a bunch of those and it’s what I’m working on right now already, I need cosplay/costume suggestions from you guys for October stuff. I would prefer stuff that isn’t super revealing since I already have a bunch of those and it’s what I’m working on right now already",
      "image_url": "https://pbs.twimg.com/media/G0msQDsXoAAPvSd.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1966227277517373638": {
      "comment": "It's #Fake ! – https://t.co/t6k2xauViT, https://t.co/t6k2xauViT",
      "image_url": "https://pbs.twimg.com/media/G0lxOiMXUAA0MCx.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1965519518320705831": {
      "comment": "It's #Fake ! – You can’t tell from this picture but I’m fueled by protein and a caffeine addiction, You can’t tell from this picture but I’m fueled by protein and a caffeine addiction",
      "image_url": "https://pbs.twimg.com/media/G0btiufWgAA8E8V.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1965129858914419120": {
      "comment": "It's #Fake ! – Country Girls Make Do, Country Girls Make Do",
      "image_url": "https://pbs.twimg.com/media/G0WLLVCWwAE2rXx.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1962879133395955792": {
      "comment": "It's #Fake ! – One day I will be a summertime sweetheart💕, One day I will be a summertime sweetheart💕",
      "image_url": "https://pbs.twimg.com/media/Gz2MIPTWUAMaN_7.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1962506374463500614": {
      "comment": "It's #Fake ! – So a lot of people are asking to see the cosplay but I really want to save the full photos for my October content so here is a little preview from when I was driving there ❤️, So a lot of people are asking to see the cosplay but I really want to save the full photos for my October content so here is a little preview from when I was driving there ❤️",
      "image_url": "https://pbs.twimg.com/media/Gzw5INrWcAAWNLe.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1962188974564188249": {
      "comment": "It's #Fake ! – Felt cute that is all, Felt cute that is all",
      "image_url": "https://pbs.twimg.com/media/GzsYdLHWkAIJS5H.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1961830707627434487": {
      "comment": "It's #Fake ! – Red Sundress Kinda Day, Red Sundress Kinda Day",
      "image_url": "https://pbs.twimg.com/media/GznSmTiXMAAc-0q.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1961337728085147721": {
      "comment": "It's #Fake ! – When you’re mean to me, this is who you’re mean to, When you’re mean to me, this is who you’re mean to",
      "image_url": "https://pbs.twimg.com/media/GzgSRJnWEAAujJP.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1960031354437222902": {
      "comment": "It's #Fake ! – I got a new swimsuit, I got a new swimsuit",
      "image_url": "https://pbs.twimg.com/media/GzNuC2CW0AAA1lH.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1959743659580293413": {
      "comment": "It's #Fake ! – Say hi if you want a kiss, Say hi if you want a kiss",
      "image_url": "https://pbs.twimg.com/media/GzJocW_WkAACmzS.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1958620656553152889": {
      "comment": "It's #Fake ! – Just your average girl next door, Just your average girl next door",
      "image_url": "https://pbs.twimg.com/media/Gy5rCn6XoAAYEtM.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1958207624077312161": {
      "comment": "It's #Fake ! – I got some new heels, I got some new heels",
      "image_url": "https://pbs.twimg.com/media/GyzzUIkXAAcrgka.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1957904376753738236": {
      "comment": "It's #Fake ! – Purple and Black 💜🖤, Purple and Black 💜🖤",
      "image_url": "https://pbs.twimg.com/media/GyvfkfNXQAEMCKD.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1956762667735031874": {
      "comment": "It's #Fake ! – Sunny in a sundress, Sunny in a sundress",
      "image_url": "https://pbs.twimg.com/media/GyfRN0gWkAA9bMk.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1956450589023322594": {
      "comment": "It's #Fake ! – She’s gone 💔, She’s gone 💔",
      "image_url": "https://pbs.twimg.com/media/Gya1ZAEWkAA7BEr.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1956308785657516147": {
      "comment": "It's #Fake ! – Painful moments 💔 😢, Painful moments 💔 😢",
      "image_url": "https://pbs.twimg.com/media/GyY0bfIWgAEsbQu.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1955663327956193376": {
      "comment": "It's #Fake ! – I don’t want your heart I’m here for your soul, I don’t want your heart I’m here for your soul",
      "image_url": "https://pbs.twimg.com/media/GyPpRhXX0AAoN53.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1955413078503518698": {
      "comment": "It's #Fake ! – Just your neighborhood gym girlie, Just your neighborhood gym girlie",
      "image_url": "https://pbs.twimg.com/media/GyMFuEcXEAAudCY.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1955044331225600148": {
      "comment": "It's #Fake ! – hi say it back, hi say it back",
      "image_url": "https://pbs.twimg.com/media/GyG2a7BW8AA6WoN.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1954582954510049732": {
      "comment": "It's #Fake ! – Still waiting for someone to take me to the beach this summer, Still waiting for someone to take me to the beach this summer",
      "image_url": "https://pbs.twimg.com/media/GyASqkaXQAAh2Y-.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1954217330352812151": {
      "comment": "It's #Fake ! – Legs for days, Legs for days",
      "image_url": "https://pbs.twimg.com/media/Gx7GLugXwAAxS4H.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1953540043626492081": {
      "comment": "It's #Fake ! – Let me step on you 💜, Let me step on you 💜",
      "image_url": "https://pbs.twimg.com/media/GxxeLxFWQAAjydd.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1952427716806111402": {
      "comment": "It's #Fake ! – Black and Red 🖤❤️, Black and Red 🖤❤️",
      "image_url": "https://pbs.twimg.com/media/Gxhql7PWMAAW80c.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1952075134761599404": {
      "comment": "It's #Fake ! – I’ve been told my legs are my best feature, do you guys agree?, I’ve been told my legs are my best feature, do you guys agree?",
      "image_url": "https://pbs.twimg.com/media/Gxcp42BWMAAkiWT.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1951673329317781584": {
      "comment": "It's #Fake ! – Pretty in Pink, Pretty in Pink",
      "image_url": "https://pbs.twimg.com/media/GxW8GRdWoAAfk2L.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1950967445042106748": {
      "comment": "It's #Fake ! – Ready and Waiting, Ready and Waiting",
      "image_url": "https://pbs.twimg.com/media/GxM6a0pWAAAgCuG.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1950374213136871694": {
      "comment": "It's #Fake ! – Goodnight everyone, Goodnight everyone",
      "image_url": "https://pbs.twimg.com/media/GxEe8PhWQAAxklj.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1949564451935736145": {
      "comment": "It's #Fake ! – Say hi if you want a kiss, Say hi if you want a kiss",
      "image_url": "https://pbs.twimg.com/media/Gw4-hxDWwAACKvn.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1949216994781237595": {
      "comment": "It's #Fake ! – Summertime and a Sundress, Summertime and a Sundress",
      "image_url": "https://pbs.twimg.com/media/Gw0Cb5mXkAEdE7o.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1948792556424495121": {
      "comment": "It's #Fake ! – Go to the Gym, Go to the Gym",
      "image_url": "https://pbs.twimg.com/media/GwuAeeqXUAAd6n9.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
    },
    "1948534659035414957": {
      "comment": "It's #Fake ! – Just trying to look cute while working out, Just trying to look cute while working out",
      "image_url": "https://pbs.twimg.com/media/GwqV5_uWwAAvYSK.jpg",
      "tagged_at": 1795874883202641920,
      "fake_account": "@michelle0tter_"
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