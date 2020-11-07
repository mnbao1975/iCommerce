import makeProduct from "../product";

export default function makeAddProduct({ productsDb }) {
  return async function addProduct(productInfo) {
    const product = makeProduct(productInfo);
    return productsDb.insert({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      branch: product.getBranch(),
      color: product.getColor(),
      createdOn: product.getCreatedOn(),
      modifiedOn: product.getModifiedOn(),
    });
  };
}
