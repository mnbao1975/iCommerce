import { searchProductId, searchProducts } from "../use-cases";

import makeGetProductId from "./get-product-id";
import makeGetProducts from "./get-products";
import notFound from "./not-found";

const getProductId = makeGetProductId({ searchProductId });
const getProducts = makeGetProducts({ searchProducts });
const productController = Object.freeze({
  getProductId,
  getProducts,
  notFound,
});

export default productController;
export { getProductId, getProducts, notFound };
