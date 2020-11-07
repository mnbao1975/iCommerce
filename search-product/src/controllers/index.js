import { addProduct, removeProduct, updateProduct } from "../use-cases";

import makePostProduct from "./post-product";
import makeDeleteProduct from "./delete-product";
import makePatchProduct from "./patch-product";
import notFound from "./not-found";

const postProduct = makePostProduct({ addProduct });
const deleteProduct = makeDeleteProduct({ removeProduct });
const patchProduct = makePatchProduct({ updateProduct });
const productController = Object.freeze({
  postProduct,
  deleteProduct,
  patchProduct,
  notFound,
});

export default productController;
export { postProduct, deleteProduct, patchProduct, notFound };
