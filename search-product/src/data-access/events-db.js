export default function makeEventsDb({ makeRedis }) {
  return Object.freeze({ publish });

  async function publish({ channel, message }) {
    const pub = await makeRedis();
    return pub.publish(channel, message);
  }
}
