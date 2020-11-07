import { searchProductId } from "../use-cases";

import makeGetProductId from "./get-product-id";
import notFound from "./not-found";

const getProductId = makeGetProductId({ searchProductId });
const productController = Object.freeze({
  getProductId,
  notFound,
});

export default productController;
export { getProductId, notFound };
