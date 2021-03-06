export default function makePostProduct({ addProduct }) {
  return async function postProduct(httpRequest) {
    try {
      const product = await addProduct(httpRequest.body);
      return {
        headers: {
          "Content-Type": "application/json",
          "Last-Modified": new Date(product.modifiedOn).toUTCString(),
        },
        statusCode: 201,
        body: { product },
      };
    } catch (e) {
      // TODO: Error logging
      //console.log(e);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
