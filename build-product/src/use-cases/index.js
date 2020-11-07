import makeAddProduct from "./add-product";
import makeRemoveProduct from "./remove-product";
import makeUpdateProduct from "./update-product";
import productsDb from "../data-access";

const addProduct = makeAddProduct({ productsDb });
const removeProduct = makeRemoveProduct({ productsDb });
const updateProduct = makeUpdateProduct({ productsDb });
const productService = Object.freeze({
  addProduct,
  removeProduct,
  updateProduct,
});

export default productService;
export { addProduct, removeProduct, updateProduct };
