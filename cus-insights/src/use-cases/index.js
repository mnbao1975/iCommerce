import { eventsDb, makeRedis } from "../data-access";
import makeSubSearchEvent from "./sub-search-event";

const subSearchEvent = makeSubSearchEvent({ makeRedis });
const productService = Object.freeze({
  subSearchEvent,
});

export default productService;
export { subSearchEvent };
