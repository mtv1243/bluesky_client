// src/app/page.tsx
import { agent } from "./lib/api";
import { pds } from "./lib/pds";
import WebSocket from 'ws';
import https from 'https';

export default async function Homepage() {


  // const endpoint = 'wss://jetstream2.us-east.bsky.network/subscribe?wantedCollections=app.bsky.feed.post';

  const apiEndpoint = 'wss://jetstream2.us-east.bsky.network/subscribe?wantedCollections=app.bsky.feed.post';
  
  const pdsEndpoint = 'https://bsky.social/xrpc/com.atproto.server.createSession"';

  const data = JSON.stringify({
    "identifier": '', 
    "password": ''
  })

  try {

    const res = await pds.login({
      identifier: 'khayadenna.bsky.social',
      password: 'matt.myles'
    })
    console.log('>>>>', res);
  }
  catch (err) {
    console.log(JSON.stringify(err));
  }
  
  await pds.post({
    text: 'Hello world!',
    createdAt: new Date().toISOString()
  })

  // Matt's DID
  // const endpoint = 'wss://jetstream2.us-east.bsky.network/subscribe?wantedCollections=app.bsky.feed.post&wantedDids=did:plc:py5rviowhwsqylunokea4n25';

  // You can add filters if desired:
  // const endpoint = 'wss://jetstream2.us-west.bsky.network/subscribe?wantedCollections=app.bsky.feed.post';

// "ws://localhost:6008/subscribe?wantedCollections=app.bsky.feed.post&wantedCollections=app.bsky.feed.like&wantedCollections=app.bsky.graph.follow&wantedDids=did:plc:q6gjnaw2blty4crticxkmujt&cursor=1725519626134432"

/*
  const ws = new WebSocket(apiEndpoint);

  ws.on('open', () => {
    console.log('Connected to Jetstream!');
  });

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data.toString());

      // console.log('Received message:', JSON.stringify(msg, null, 2));
      
      // if(msg.commit.record.text && msg.commit.record.text.includes('kittens')) {
        if(msg.commit && msg.commit.record && msg.commit.record.text && msg.commit.record.text.includes('kittens')) {
        console.log("Received message:", JSON.stringify(msg));
      }
    } catch (err) {
      console.error('Failed to parse message:', err);
    }
  });

  ws.on('close', () => {
    console.log('Disconnected from Jetstream.');
  });

  ws.on('error', (err) => {
    console.error('WebSocket error:', err);
  });
  */
  // const feeds = await agent.app.bsky.unspecced
  // .getPopularFeedGenerators({
  //   limit: 10,
  // });


// const posts = await agent.app.bsky.feed
//   .searchPosts({
//     limit: 25,
//     q: 'This is Tuna. You have once again taken him to the vet instead of the park.  Fool him once, shame on you. Fool him twice, even more shame on you. 13/10 (IG: tunathekahuna)',
//     author: 'weratedogs.com'
//   });

  // posts.data.posts.map((post)=> {
  //   console.log(post);
  // });

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-xl my-4">Top Feeds</h1>
      {/* <ul>
        {feeds.data.feeds.map((feed) => (
          <li key={feed.displayName}>{feed.displayName}, {feed.did}</li>
        ))}
      </ul> */}
      {/* <hr></hr> */}
      {/* <ul>
        {posts.data.posts.map((post)=> (
          <li key={post.author.handle}>{post.author.displayName}, {post.record.text}</li>
        ))}
      </ul> */}
    </div>
  );
}