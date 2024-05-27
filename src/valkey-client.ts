import { createClient } from "redis";

export const client = createClient({
  url: "redis://127.0.0.1:6379",
});

client.on("error", (err) => {
  console.error("Error connecting to Valkey", err);
});

client.on("connect", () => {
  console.log("Connected to Valkey");
});
