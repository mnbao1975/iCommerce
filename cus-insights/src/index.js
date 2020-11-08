import { subSearchEvent, processEvent } from "./controllers";

const viewProductChannel = process.env.VIEW_PRODUCT_CHANNEL;
const filterProductChannel = process.env.FILTER_PRODUCT_CHANNEL;

(async function start() {
  let channel = null;
  channel = await subSearchEvent({ channel: viewProductChannel });
  channel = await subSearchEvent({ channel: filterProductChannel });
  channel.on("message", async (channel, message) => {
    console.log("Receive message %s from channel %s", message, channel);
    let result = await processEvent({ message });
    console.log(result);
  });

  console.log(
    `Subscribing on: ${viewProductChannel} & ${filterProductChannel} channels`
  );
})();

// import dotenv from "dotenv";
// import Redis from "ioredis";

// dotenv.config();

// const redisURL = process.env.REDIS_URL;
// const viewProductChannel = process.env.VIEW_PRODUCT_CHANNEL;
// const redis = new Redis(redisURL);
// redis.subscribe(viewProductChannel, (e) => {
//   if (e) {
//     console.log(e);
//   }
//   console.log(redisURL, viewProductChannel);
// });

// redis.on("message", (channel, message) => {
//   console.log("Receive message %s from channel %s", message, channel);
// });
