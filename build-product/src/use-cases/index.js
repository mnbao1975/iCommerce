import makeAddProduct from "./add-product";
import productsDb from "../data-access";

const addProduct = makeAddProduct({ productsDb });

const productService = Object.freeze({ addProduct });

export default productService;
export { addProduct };
