export default function makePubSearchEvent({ eventsDb }) {
  return async function pubSearchEvent({ channel, message }) {
    if (!channel || !message) {
      throw new Error("Publish event: please provide channel and message");
    }

    return eventsDb.publish({ channel, message });
  };
}
