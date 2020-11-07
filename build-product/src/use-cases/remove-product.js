export default function makeRemoveProduct({ productsDb }) {
  return async function removeProduct({ id = {} }) {
    if (!id) {
      throw new Error("You must supply a comment id.");
    }

    return productsDb.remove({ id });
  };
}
