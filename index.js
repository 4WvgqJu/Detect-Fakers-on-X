const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const OAuth = require('oauth').OAuth;

// Konfiguration aus config.js
const { API_KEY, API_KEY_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET, TAGS_FILE, RATE_LIMIT_MS, REMAINING_QUERIES, FAKER_ACCOUNTS } = require('./config');

// OAuth 1.0a Setup
const oauth = new OAuth(
  'https://api.x.com/1.1/account/verify_credentials.json',
  'https://api.x.com/1.1/statuses/update.json',
  API_KEY,
  API_KEY_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function callXApi(endpoint, params = {}) {
  if (REMAINING_QUERIES <= 0) throw new Error('Keine Queries mehr übrig!');
  try {
    const response = await axios.get(`https://api.x.com/2/${endpoint}`, {
      headers: {
        Authorization: oauth.toHeader(oauth.authorize({
          url: `https://api.x.com/2/${endpoint}`,
          method: 'GET',
          query: params
        }, { key: ACCESS_TOKEN, secret: ACCESS_TOKEN_SECRET })).Authorization
      },
      params,
    });
    REMAINING_QUERIES -= 1;
    console.log(`Verbleibende Queries: ${REMAINING_QUERIES} (Aufruf: ${endpoint})`);
    return response.data;
  } catch (error) {
    console.error(`Fehler bei API-Aufruf (${endpoint}):`, error.message);
    throw error;
  }
}

async function loadTags() {
  try {
    const data = await fs.readFile(path.join(__dirname, TAGS_FILE), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Fehler beim Laden von tags.json:', error.message);
    return {};
  }
}

async function saveTags(tags) {
  try {
    await fs.writeFile(path.join(__dirname, TAGS_FILE), JSON.stringify(tags, null, 2));
    console.log('tags.json aktualisiert');
  } catch (error) {
    console.error('Fehler beim Speichern von tags.json:', error.message);
  }
}

async function tagPost(postId, comment, fakeAccount) {
  const tags = await loadTags();
  tags[postId] = { comment, tagged_at: Date.now(), fake_account: fakeAccount };
  await saveTags(tags);
  console.log(`Post ${postId} getagged: ${comment} (Account: ${fakeAccount})`);
}

async function getUserPosts(userId, maxResults = 5) {
  try {
    const endpoint = `users/${userId}/tweets`;
    const params = { 'max_results': maxResults, 'tweet.fields': 'id,attachments,text' };
    const data = await callXApi(endpoint, params);
    await sleep(RATE_LIMIT_MS);
    return data.data || [];
  } catch (error) {
    console.error(`Fehler beim Abrufen der Posts für User ${userId}:`, error.message);
    return [];
  }
}

async function main() {
  try {
    // const comment = "It's #Fake !";
    // console.log(`Starte mit ${REMAINING_QUERIES} verbleibenden Queries...`);
    // for (const account of FAKER_ACCOUNTS.slice(0, REMAINING_QUERIES)) {
    //   console.log(`Prüfe Posts von ${account.handle} (ID: ${account.id})`);
    //   const posts = await getUserPosts(account.id);
    //   for (const post of posts) {
    //     if (post.attachments && post.attachments.media_keys?.length > 0) {
    //       const tagComment = `${comment} – Original-Kommentar: "${post.text || '[Kein Text, nur Bild]'}"`;
    //       await tagPost(post.id, tagComment, account.handle);
    //       await sleep(RATE_LIMIT_MS);
    //     }
    //   }
    // }
    // console.log('Fertig! Überprüfe tags.json und X-Listen.');

    const tags = await loadTags();
    tags['test123'] = { comment: 'Test-Tag', tagged_at: Date.now(), fake_account: '@test' };
    await saveTags(tags);
    console.log('Test-Tag hinzugefügt!');
  } catch (error) {
    console.error('Fehler in main:', error.message);
  }
}

main();