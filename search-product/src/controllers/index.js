import { searchProductId, searchProducts, pubSearchEvent } from "../use-cases";

import makeGetProductId from "./get-product-id";
import makeGetProducts from "./get-products";
import notFound from "./not-found";

const getProductId = makeGetProductId({ searchProductId, pubSearchEvent });
const getProducts = makeGetProducts({ searchProducts, pubSearchEvent });
const productController = Object.freeze({
  getProductId,
  getProducts,
  notFound,
});

export default productController;
export { getProductId, getProducts, notFound };
