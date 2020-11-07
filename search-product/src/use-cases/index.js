import makeSearchProductId from "./seach-product-id";
import productsDb from "../data-access";

const searchProductId = makeSearchProductId({ productsDb });
const productService = Object.freeze({
  searchProductId,
});

export default productService;
export { searchProductId };
