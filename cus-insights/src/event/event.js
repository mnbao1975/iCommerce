export default function buildMakeEvent({ Id }) {
  return function makeEvent({
    id = Id.makeId(),
    eventName,
    eventTime = Date.now(),
    userId,
    userAgent,
    metadata,
    createdOn = Date.now(),
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error("Comment must have a valid id.");
    }

    if (!eventName) {
      throw new Error("Event must have a name");
    }

    if (!price || price <= 0) {
      throw new Error("Product price must be positive");
    }

    return Object.freeze({
      getId: () => id,
      getEventName: () => eventName,
      getEventTime: () => eventTime,
      getUserId: () => userId,
      getUserAgent: () => userAgent,
      getMetadata: () => metadata,
      getCreatedOn: () => createdOn,
    });
  };
}
