import makeEvent from "../event";

export default function makeAddEvent({ eventsDb }) {
  return async function addEvent(eventInfo) {
    const event = makeEvent(eventInfo);
    return eventsDb.insert({
      id: event.getId(),
      eventName: event.getEventName(),
      eventTime: event.getEventTime(),
      userId: event.getUserId(),
      userAgent: event.getUserAgent(),
      metadata: event.getMetadata(),
      createdOn: event.getCreatedOn(),
    });
  };
}
