import makeProduct from "../product";

export default function makeUpdateProduct({ productsDb }) {
  return async function updateProduct({ id, ...changes } = {}) {
    const product = makeProduct({ id, ...changes });
    if (!id) {
      throw new Error("You must supply an id.");
    }
    return productsDb.update({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      branch: product.getBranch(),
      color: product.getColor(),
      modifiedOn: product.getModifiedOn(),
    });
  };
}
