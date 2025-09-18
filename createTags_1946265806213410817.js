const fs = require('fs').promises;
const path = require('path');

async function createTagsJson() {
  const tags = {
    "1968333602506326224": {
      "comment": "It's #Fake ! – Link-only Post mit gestohlenem roten Dress-Selfie, Today I figured I would do two different dresses one white and one pink and let you guys decide which you like better. 🤍🩷",
      "image_url": "https://pbs.twimg.com/media/G1Ds-HNWIAASgPF.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1968333602506326224_2": {
      "comment": "It's #Fake ! – Link-only Post mit gestohlenem roten Dress-Selfie, Today I figured I would do two different dresses one white and one pink and let you guys decide which you like better. 🤍🩷",
      "image_url": "https://pbs.twimg.com/media/G1Ds-GCWcAAa4j4.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1967973319589986637": {
      "comment": "It's #Fake ! – Link-only Post mit gestohlenem Pink-Dress auf Balkon, I hope you guys agree that crop tops and shorts are the best summer combo! ☺️",
      "image_url": "https://pbs.twimg.com/media/G0-lS-3WMAAGPP6.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1967973319589986637_2": {
      "comment": "It's #Fake ! – Link-only Post mit gestohlenem Pink-Dress auf Balkon, I hope you guys agree that crop tops and shorts are the best summer combo! ☺️",
      "image_url": "https://pbs.twimg.com/media/G0-lS-tWMAAqsMw.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1967584534767251737": {
      "comment": "It's #Fake ! – Outfit-Vergleich in white and pink dresses, Today I figured I would do two different dresses one white and one pink and let you guys decide which you like better. 🤍🩷",
      "image_url": "https://pbs.twimg.com/media/G05Dsu9W8AACJOf.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1967584534767251737_2": {
      "comment": "It's #Fake ! – Outfit-Vergleich in white and pink dresses, Today I figured I would do two different dresses one white and one pink and let you guys decide which you like better. 🤍🩷",
      "image_url": "https://pbs.twimg.com/media/G05DsuyWEAAhWpG.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1967228037717795273": {
      "comment": "It's #Fake ! – Sommer-Look mit Crop Top und Shorts, I hope you guys agree that crop tops and shorts are the best summer combo! ☺️",
      "image_url": "https://pbs.twimg.com/media/G0z_d5SWUAA37Sx.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1967228037717795273_2": {
      "comment": "It's #Fake ! – Sommer-Look mit Crop Top und Shorts, I hope you guys agree that crop tops and shorts are the best summer combo! ☺️",
      "image_url": "https://pbs.twimg.com/media/G0z_d5VXoAAx_rG.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1966864685116035104": {
      "comment": "It's #Fake ! – Double Trouble black outfit, Double Trouble 🖤",
      "image_url": "https://pbs.twimg.com/media/G0u0_95WUAAsK1c.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1966864685116035104_2": {
      "comment": "It's #Fake ! – Double Trouble black outfit, Double Trouble 🖤",
      "image_url": "https://pbs.twimg.com/media/G0u0_9_W4AAKr2E.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1966497257831727106": {
      "comment": "It's #Fake ! – Ponytail Gym-Look, Today I decided to go with a ponytail look for the gym and at least I think guys like it when girls put their hair in a ponytail lol. 😅",
      "image_url": "https://pbs.twimg.com/media/G0pm0ZZXEAAKLtU.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1966497257831727106_2": {
      "comment": "It's #Fake ! – Ponytail Gym-Look, Today I decided to go with a ponytail look for the gym and at least I think guys like it when girls put their hair in a ponytail lol. 😅",
      "image_url": "https://pbs.twimg.com/media/G0pm0ZYWgAA7zv6.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1966140657074057280": {
      "comment": "It's #Fake ! – Black and white combo with heels, The black and white combo really did come out better than I expected and the heels I think looks really good with it. 🤍🖤",
      "image_url": "https://pbs.twimg.com/media/G0kiecIWQAAPCHT.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1966140657074057280_2": {
      "comment": "It's #Fake ! – Black and white combo with heels, The black and white combo really did come out better than I expected and the heels I think looks really good with it. 🤍🖤",
      "image_url": "https://pbs.twimg.com/media/G0kiecNWEAAQUzF.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965772781951565863": {
      "comment": "It's #Fake ! – New blue dress, I got a new blue dress so let me know if you guys like it or not. 💙",
      "image_url": "https://pbs.twimg.com/media/G0fT64FXsAAZfVs.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965772781951565863_2": {
      "comment": "It's #Fake ! – New blue dress, I got a new blue dress so let me know if you guys like it or not. 💙",
      "image_url": "https://pbs.twimg.com/media/G0fT64KXQAANtnu.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965417837641769077": {
      "comment": "It's #Fake ! – Leather shorts outfit, Today instead of a dress or a skirt I figured I would go with some leather shorts for this outfit, let me know how you like them. ☺️",
      "image_url": "https://pbs.twimg.com/media/G0aRGQHXgAAf7pk.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965417837641769077_2": {
      "comment": "It's #Fake ! – Leather shorts outfit, Today instead of a dress or a skirt I figured I would go with some leather shorts for this outfit, let me know how you like them. ☺️",
      "image_url": "https://pbs.twimg.com/media/G0aRGQFXEAAywKG.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965417837641769077_3": {
      "comment": "It's #Fake ! – Leather shorts outfit, Today instead of a dress or a skirt I figured I would go with some leather shorts for this outfit, let me know how you like them. ☺️",
      "image_url": "https://pbs.twimg.com/media/G0aRGQHXkAA18h9.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965051384656715945": {
      "comment": "It's #Fake ! – New heels showcase, So lately I've really been liking these new heels and I hope you guys have been as well. 😊",
      "image_url": "https://pbs.twimg.com/media/G0VDzv5W8AADXz-.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965051384656715945_2": {
      "comment": "It's #Fake ! – New heels showcase, So lately I've really been liking these new heels and I hope you guys have been as well. 😊",
      "image_url": "https://pbs.twimg.com/media/G0VDzv-XAAAMkH5.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1965051384656715945_3": {
      "comment": "It's #Fake ! – New heels showcase, So lately I've really been liking these new heels and I hope you guys have been as well. 😊",
      "image_url": "https://pbs.twimg.com/media/G0VDzv8WYAACdNc.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1964695478278439302": {
      "comment": "It's #Fake ! – Girl next door shorts and crop top, Just another average girl next door outfit for today since you guys know that shorts and crop tops are my favorite combo. ☺️",
      "image_url": "https://pbs.twimg.com/media/G0QAHkWW8AAfjyh.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1964695478278439302_2": {
      "comment": "It's #Fake ! – Girl next door shorts and crop top, Just another average girl next door outfit for today since you guys know that shorts and crop tops are my favorite combo. ☺️",
      "image_url": "https://pbs.twimg.com/media/G0QAHkgX0AAXM7h.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1964327047448142327": {
      "comment": "It's #Fake ! – Outdoor pics enjoyment, I hope you guys are liking the outdoor pics because I've been really enjoying taking them. 🤗",
      "image_url": "https://pbs.twimg.com/media/G0KxBXHWYAA7eaA.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1964327047448142327_2": {
      "comment": "It's #Fake ! – Outdoor pics enjoyment, I hope you guys are liking the outdoor pics because I've been really enjoying taking them. 🤗",
      "image_url": "https://pbs.twimg.com/media/G0KxBXJWcAAnssL.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1963970370614022389": {
      "comment": "It's #Fake ! – Athletic gym girl look, I think I can pull off the athletic gym girl look pretty good and I think you guys agree.☺️",
      "image_url": "https://pbs.twimg.com/media/G0Fsoo9XAAAcYcr.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1963970370614022389_2": {
      "comment": "It's #Fake ! – Athletic gym girl look, I think I can pull off the athletic gym girl look pretty good and I think you guys agree.☺️",
      "image_url": "https://pbs.twimg.com/media/G0Fsoo8XEAAItSB.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1963597578370732248": {
      "comment": "It's #Fake ! – White & black combo, White & black combo 🤍🖤",
      "image_url": "https://pbs.twimg.com/media/G0AZlNXXsAAT_om.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1963597578370732248_2": {
      "comment": "It's #Fake ! – White & black combo, White & black combo 🤍🖤",
      "image_url": "https://pbs.twimg.com/media/G0AZlQxWcAAkvvw.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1963264421939024257": {
      "comment": "It's #Fake ! – New white heels showcase, I recently got some new white heels and haven't really showed them off much to you guys so I figured I would today so I hope you like them. ☺️",
      "image_url": "https://pbs.twimg.com/media/Gz7qlJ8WEAAMepT.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1963264421939024257_2": {
      "comment": "It's #Fake ! – New white heels showcase, I recently got some new white heels and haven't really showed them off much to you guys so I figured I would today so I hope you like them. ☺️",
      "image_url": "https://pbs.twimg.com/media/Gz7qlJ4WwAAy3uq.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1962160177190199588": {
      "comment": "It's #Fake ! – New shorts cute, So I got some new shorts and I think they are super cute so hopefully you guys will like them as well! 😊",
      "image_url": "https://pbs.twimg.com/media/Gzr-OzpW8AAijvS.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1962160177190199588_2": {
      "comment": "It's #Fake ! – New shorts cute, So I got some new shorts and I think they are super cute so hopefully you guys will like them as well! 😊",
      "image_url": "https://pbs.twimg.com/media/Gzr-OzxXAAARbVu.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1961787192457502940": {
      "comment": "It's #Fake ! – Favorite outdoor pics, So these are probably some of my favorite outdoor pics I have taken so far so I hope you guys will like them as much as i do.",
      "image_url": "https://pbs.twimg.com/media/GzmrC1yWQAAsQSh.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1961787192457502940_2": {
      "comment": "It's #Fake ! – Favorite outdoor pics, So these are probably some of my favorite outdoor pics I have taken so far so I hope you guys will like them as much as i do.",
      "image_url": "https://pbs.twimg.com/media/GzmrC13W0AEpJtn.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1961118601420653015": {
      "comment": "It's #Fake ! – Daily routine selfie, https://t.co/26oEa9q2db",
      "image_url": "https://pbs.twimg.com/media/GzdK90EXYAEAHL5.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1961118601420653015_2": {
      "comment": "It's #Fake ! – Daily routine selfie, https://t.co/26oEa9q2db",
      "image_url": "https://pbs.twimg.com/media/GzdK90BWoAAMDQJ.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1960706153928601633": {
      "comment": "It's #Fake ! – Gym dress workout, https://t.co/IYW1QzzFdI",
      "image_url": "https://pbs.twimg.com/media/GzXT2QvXQAAWxH6.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1960706153928601633_2": {
      "comment": "It's #Fake ! – Gym dress workout, https://t.co/IYW1QzzFdI",
      "image_url": "https://pbs.twimg.com/media/GzXT2QqXwAAAakx.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1957809702655389761": {
      "comment": "It's #Fake ! – Purple black outfit, 💜🖤",
      "image_url": "https://pbs.twimg.com/media/GyuJg-jWcAAAhaE.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1957809702655389761_2": {
      "comment": "It's #Fake ! – Purple black outfit, 💜🖤",
      "image_url": "https://pbs.twimg.com/media/GyuJg-fXwAEoqeo.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1957809702655389761_3": {
      "comment": "It's #Fake ! – Purple black outfit, 💜🖤",
      "image_url": "https://pbs.twimg.com/media/GyuJg-oXEAAJBAu.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1955275194441900258": {
      "comment": "It's #Fake ! – Link-only outfit, https://t.co/9i9CjSZpX3",
      "image_url": "https://pbs.twimg.com/media/GyKIaoBaEAEujy-.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1955275194441900258_2": {
      "comment": "It's #Fake ! – Link-only outfit, https://t.co/9i9CjSZpX3",
      "image_url": "https://pbs.twimg.com/media/GyKIaoAaYAA0XYz.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1954188151754223719": {
      "comment": "It's #Fake ! – Link-only selfie, https://t.co/xv5F5CB3wo",
      "image_url": "https://pbs.twimg.com/media/Gx6rwlgWoAAqIWJ.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1954188151754223719_2": {
      "comment": "It's #Fake ! – Link-only selfie, https://t.co/xv5F5CB3wo",
      "image_url": "https://pbs.twimg.com/media/Gx6rwl9WQAAcnmZ.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1953588747146039363": {
      "comment": "It's #Fake ! – Purple selfie, Selfie 🤳💜",
      "image_url": "https://pbs.twimg.com/media/GxyKm4UWoAABlRV.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1949836859636387897": {
      "comment": "It's #Fake ! – Link-only daily look, https://t.co/l1Ais2xLa6",
      "image_url": "https://pbs.twimg.com/media/Gw82SRWXYAAi-n6.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1949480767773618184": {
      "comment": "It's #Fake ! – Link-only outfit, https://t.co/F2qwPRiIkn",
      "image_url": "https://pbs.twimg.com/media/Gw3ya90XAAAu9p0.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1948773433564664002": {
      "comment": "It's #Fake ! – Link-only casual, https://t.co/AriO2tj58w",
      "image_url": "https://pbs.twimg.com/media/GwtvGsuXIAEJGzw.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1948635872779260097": {
      "comment": "It's #Fake ! – Link-only shorts, https://t.co/NH55wZgoyN",
      "image_url": "https://pbs.twimg.com/media/Gwrx-SZX0AAB6T4.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1948635872779260097_2": {
      "comment": "It's #Fake ! – Link-only shorts, https://t.co/NH55wZgoyN",
      "image_url": "https://pbs.twimg.com/media/Gwrx-SaWwAAparl.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1948635776356680088": {
      "comment": "It's #Fake ! – Link-only initial post, https://t.co/rWFKn1uogr",
      "image_url": "https://pbs.twimg.com/media/Gwrx5pHXQAAIAgc.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
    },
    "1948635776356680088_2": {
      "comment": "It's #Fake ! – Link-only initial post, https://t.co/rWFKn1uogr",
      "image_url": "https://pbs.twimg.com/media/Gwrx5pHXkAAMiXL.jpg",
      "tagged_at": 1946265806213410817,
      "fake_account": "@MOtter84387"
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