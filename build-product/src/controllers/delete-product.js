export default function makeDeleteProduct({ removeProduct }) {
  return async function deleteProduct(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const deleted = await removeProduct({ id: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: { deleted },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
