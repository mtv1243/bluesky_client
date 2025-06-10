// src/app/page.tsx
import { agent } from "./lib/api";

export default async function Homepage() {
  const feeds = await agent.app.bsky.unspecced.getPopularFeedGenerators({
    limit: 10,
  });

  feeds.data.feeds.map((feed)=> {
    console.log(feed.creator);
  })
  // console.log(feeds.data);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-xl my-4">Top Feeds</h1>
      <ul>
        {feeds.data.feeds.map((feed) => (
          <li key={feed.displayName}>{feed.displayName}, {feed.did}</li>
        ))}
      </ul>
    </div>
  );
}