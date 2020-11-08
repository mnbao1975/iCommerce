import makeSearchProductId from "./seach-product-id";
import makeSearchProducts from "./search-products";
import makePubSearchEvent from "./pub-search-event";
import { productsDb, eventsDb } from "../data-access";

const searchProductId = makeSearchProductId({ productsDb });
const searchProducts = makeSearchProducts({ productsDb });
const pubSearchEvent = makePubSearchEvent({ eventsDb });
const productService = Object.freeze({
  searchProductId,
  searchProducts,
  pubSearchEvent,
});

export default productService;
export { searchProductId, searchProducts, pubSearchEvent };
