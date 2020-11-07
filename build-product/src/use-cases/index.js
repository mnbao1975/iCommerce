import makeAddProduct from "./add-product";
import makeRemoveProduct from "./remove-product";
import productsDb from "../data-access";

const addProduct = makeAddProduct({ productsDb });
const removeProduct = makeRemoveProduct({ productsDb });
const productService = Object.freeze({ addProduct, removeProduct });

export default productService;
export { addProduct, removeProduct };
