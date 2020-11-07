export default function makePatchProduct({ updateProduct }) {
  return async function putProduct(httpRequest) {
    try {
      const { id = httpRequest.params.id, ...productInfo } = httpRequest.body;
      //const toEdit = { id, ...productInfo };
      const product = await updateProduct({ id, ...productInfo });
      return {
        headers: {
          "Content-Type": "application/json",
          "Last-Modified": new Date(product.modifiedOn).toUTCString(),
        },
        statusCode: 200,
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
