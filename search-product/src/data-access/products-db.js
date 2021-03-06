export default function makeProductDb({ makeDb }) {
  let collection = "products";

  return Object.freeze({ findById, findAll });

  async function findById({ id: _id }) {
    const db = await makeDb();
    const result = await db.collection(collection).find({ _id });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }

  async function findAll({ query }) {
    const db = await makeDb();
    const result = await db.collection(collection).find(query);
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }));
  }
}
