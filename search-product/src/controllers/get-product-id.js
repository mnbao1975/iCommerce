export default function makeGetProductId({ searchProductId, pubSearchEvent }) {
  return async function getProductId(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const channel = process.env.VIEW_PRODUCT_CHANNEL;
      const message = JSON.stringify({
        eventName: channel,
        eventTime: Date.now(),
        userId: headers["User-Id"] ? headers["User-Id"] : "anonymous",
        userAgent: headers["User-Agent"],
        metadata: { productId: httpRequest.params.id },
      });
      pubSearchEvent({ channel, message });

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
