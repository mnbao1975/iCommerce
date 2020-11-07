import Id from "../Id";

export default function makeProductDb({ makeDb }) {
  return Object.freeze({ findById, insert, update, remove });

  async function findById({ id: _id }) {
    const db = await makeDb();
    const result = await db.collection("products").find({ _id });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }

  async function insert({ id: _id = Id.makeId(), ...productInfo }) {
    const db = await makeDb();
    const result = await db
      .collection("products")
      .insertOne({ _id, ...productInfo });
    const { _id: id, ...insertedInfo } = result.ops[0];
    return { id, ...insertedInfo };
  }

  async function update({ id: _id, ...productInfo }) {
    const db = await makeDb();
    const result = await db
      .collection("products")
      .updateOne({ _id }, { $set: { ...productInfo } });
    return result.modifiedCount > 0 ? { id: _id, ...productInfo } : null;
  }

  async function remove({ id: _id }) {
    const db = await makeDb();
    const result = await db.collection("products").deleteOne({ _id });
    return result.deletedCount;
  }
}
