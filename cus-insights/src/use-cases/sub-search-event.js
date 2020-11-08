//import makeEvent from "../event";

export default function makeSubSearchEvent({ makeRedis }) {
  return async function subSearchEvent({ channel }) {
    if (!channel) {
      throw new Error("Subscribe event: please provide channel");
    }
    try {
      const redis = await makeRedis();
      redis.subscribe(channel);
      return redis;
    } catch (e) {
      console.log(e);
    }
  };
}
