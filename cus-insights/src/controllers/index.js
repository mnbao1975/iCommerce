import { subSearchEvent, addEvent } from "../use-cases";
import makeProcessEvent from "./process-event";

const processEvent = makeProcessEvent({ addEvent });

const customerServices = Object.freeze({
  subSearchEvent,
  processEvent,
});

export default customerServices;
export { subSearchEvent, processEvent };
