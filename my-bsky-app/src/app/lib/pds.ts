// src/lib/api.ts
import { BskyAgent } from "@atproto/api";

export const pds = new BskyAgent({
  // App View URL
  service: "https://bsky.social",
  // If you were making an authenticated client, you would
  // use the PDS URL here instead - the main one is bsky.social
  // service: "https://bsky.social",
});