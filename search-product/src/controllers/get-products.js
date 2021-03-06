export default function makeGetProducts({ searchProducts, pubSearchEvent }) {
  return async function getProducts(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const channel = process.env.FILTER_PRODUCT_CHANNEL;
      const message = JSON.stringify({
        eventName: channel,
        eventTime: Date.now(),
        userId: httpRequest.headers["User-Id"]
          ? httpRequest.headers["User-Id"]
          : "anonymous",
        userAgent: httpRequest.headers["User-Agent"],
        metadata: { query: httpRequest.query },
      });
      pubSearchEvent({ channel, message });

      const products = await searchProducts({ query: httpRequest.query });
      return {
        headers,
        statusCode: 200,
        body: { products },
      };
    } catch (e) {
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
