import { addProduct } from "../use-cases";

import makePostProduct from "./post-product";
import notFound from "./not-found";

const postProduct = makePostProduct({ addProduct });

const productController = Object.freeze({ postProduct, notFound });

export default productController;
export { postProduct, notFound };
