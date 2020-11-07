import makeSearchProductId from "./seach-product-id";
import makeSearchProducts from "./search-products";
import productsDb from "../data-access";

const searchProductId = makeSearchProductId({ productsDb });
const searchProducts = makeSearchProducts({ productsDb });

const productService = Object.freeze({
  searchProductId,
  searchProducts,
});

export default productService;
export { searchProductId, searchProducts };
