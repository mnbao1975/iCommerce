import { eventsDb, makeRedis } from "../data-access";
import makeSubSearchEvent from "./sub-search-event";
import makeAddEvent from "./add-event";

const subSearchEvent = makeSubSearchEvent({ makeRedis });
const addEvent = makeAddEvent({ eventsDb });

const productService = Object.freeze({
  subSearchEvent,
  addEvent,
});

export default productService;
export { subSearchEvent, addEvent };
