export default function makeSearchProducts({ productsDb }) {
  return async function searchProducts({ query = {} }) {
    let toQuery = {};
    if (query.name) {
      toQuery.name = new RegExp(query.name, "i");
    }
    if (query.color) {
      toQuery.color = query.color;
    }

    if (query.branch) {
      toQuery.branch = query.branch;
    }

    return productsDb.findAll({ query: toQuery });
  };
}
