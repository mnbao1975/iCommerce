export default function buildMakeProduct({ Id }) {
  return function makeProduct({
    id = Id.makeId(),
    name,
    price,
    branch = "",
    color = "",
    createdOn = Date.now(),
    modifiedOn = Date.now(),
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error("Comment must have a valid id.");
    }

    if (!name) {
      throw new Error("Product must have a name");
    }

    if (!price || price <= 0) {
      throw new Error("Product price must be positive");
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getPrice: () => price,
      getBranch: () => branch,
      getColor: () => color,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
    });
  };
}
