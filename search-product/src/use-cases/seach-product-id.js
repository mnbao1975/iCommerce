export default function makeSearchProductId({ productsDb }) {
  return async function searchProductId({ id }) {
    if (!id) {
      throw new Error("You must supply a comment id.");
    }

    return productsDb.findById({ id });
  };
}
