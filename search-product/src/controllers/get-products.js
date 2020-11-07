export default function makeGetProducts({ searchProducts }) {
  return async function getProducts(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const products = await searchProducts({ query: httpRequest.query });
      return {
        headers,
        statusCode: 200,
        body: { products },
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
