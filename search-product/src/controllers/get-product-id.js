export default function makeGetProductId({ searchProductId }) {
  return async function getProductId(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const product = await searchProductId({ id: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: { product },
      };
    } catch (e) {
      //console.log(e);
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
