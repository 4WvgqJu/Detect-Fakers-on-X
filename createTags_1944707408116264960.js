const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1944707408116264960_001": {
      "comment": "It's #Fake ! – Today I figured I would do a black and white dress combo for you guys and overall I think the outfit came out looking pretty cute.I also decided to wear my new heels with it as well since you guys seem to like them. I hope my fellow Americans are enjoying your holiday today!, Original from MichelleXOtter: Today I figured I would do a black and white dress combo for you guys and overall I think the outfit came out looking pretty cute.",
      "image_url": "https://pbs.twimg.com/media/Gz_D7FuW8AENoYl.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_002": {
      "comment": "It's #Fake ! – Since you guys seemed to really like my new leather shorts here is another outfit with them. Also since the boots went so well with them last time I figure I would use them again. Besides that I may need to get another pair of them but this time as a small since they are a little, Original from MichelleXOtter: Since you guys seemed to really like my new leather shorts here is another outfit with them.",
      "image_url": "https://pbs.twimg.com/media/GzhJCx9XEAAn80k.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_003": {
      "comment": "It's #Fake ! – https://t.co/yuOzypYwIx, Original from MichelleXOtter: Link to outfit post.",
      "image_url": "https://pbs.twimg.com/media/GzRlebxXsAASHpB.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_004": {
      "comment": "It's #Fake ! – Wataa smash or pass? 🍑, Original from MichelleXOtter: Wataa smash or pass? 🍑",
      "image_url": "https://pbs.twimg.com/media/GzM_wUyWYAABNv6.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_005": {
      "comment": "It's #Fake ! – You guys seems to like this outfit last time I posted it so here are some extra pictures in it. Hope you guys will enjoy them. Otherwise I've got a busy day ahead of me because I have to prepare for a road tip in 2 days so wish me luck! Hope you are all having a good day!, Original from MichelleXOtter: You guys seems to like this outfit last time I posted it so here are some extra pictures in it.",
      "image_url": "https://pbs.twimg.com/media/GzK18I8XsAAXAfM.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_006": {
      "comment": "It's #Fake ! – Decided to mess around with how I posed for this outfit some so l hope you guys will like it.Personally I think it ended up looking pretty cute. I also just got a bunch of new outfits yesterday so I can't wait to try them on and post pictures for you guys! 😍, Original from MichelleXOtter: Decided to mess around with how I posed for this outfit some so l hope you guys will like it.",
      "image_url": "https://pbs.twimg.com/media/GzK16yQXwAE-ZzU.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_007": {
      "comment": "It's #Fake ! – Still waiting for someone to take me to the beach this summer, Original from MichelleXOtter: Still waiting for someone to take me to the beach this summer",
      "image_url": "https://pbs.twimg.com/media/GyAk80dWQAAh1zq.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_008": {
      "comment": "It's #Fake ! – I’ve been told my legs are my best feature, do you guys agree?, Original from MichelleXOtter: I’ve been told my legs are my best feature, do you guys agree?",
      "image_url": "https://pbs.twimg.com/media/GxhLcyKWoAEspt9.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_009": {
      "comment": "It's #Fake ! – I’ve been told my legs are my best feature, do you guys agree?, Original from MichelleXOtter: I’ve been told my legs are my best feature, do you guys agree?",
      "image_url": "https://pbs.twimg.com/media/GxhLZtBXsAAf5mL.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_010": {
      "comment": "It's #Fake ! – Smash or Pass?, Original from MichelleXOtter: Smash or Pass?",
      "image_url": "https://pbs.twimg.com/media/GwfHoZFWUAA7am1.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_011": {
      "comment": "It's #Fake ! – I hope you guys like gym girls because that is definitely what you get with me lol. & Seriously I feel like I spend way too much time in the gym,but it's honestly therapeutic for me.However I will say today is leg day so it's definitely the hardest day for me since I started, Original from MichelleXOtter: I hope you guys like gym girls because that is definitely what you get with me lol.",
      "image_url": "https://pbs.twimg.com/media/GwKZMhyXsAAhOXD.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_012": {
      "comment": "It's #Fake ! – (No text content), Original from MichelleXOtter: Gym selfie post.",
      "image_url": "https://pbs.twimg.com/media/GwIUxlFXwAQ30_O.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_013": {
      "comment": "It's #Fake ! – I really want to go to the beach again soon, Original from MichelleXOtter: I really want to go to the beach again soon",
      "image_url": "https://pbs.twimg.com/media/Gv0qKVzWIAAH9bI.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
    },
    "1944707408116264960_014": {
      "comment": "It's #Fake ! – Felt cute might delete later, Original from MichelleXOtter: Felt cute might delete later",
      "image_url": "https://pbs.twimg.com/media/Gv0poeCXUAAjfgW.jpg",
      "tagged_at": 1944707408116264960,
      "fake_account": "@MichellealterTS"
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