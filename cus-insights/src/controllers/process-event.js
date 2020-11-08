export default function makeProcessEvent({ addEvent }) {
  return async function processEvent({ message }) {
    try {
      const event = await addEvent(JSON.parse(message));
      return event;
    } catch (e) {
      // TODO: Error logging
      //console.log(e);

      return { error: e.message };
    }
  };
}
