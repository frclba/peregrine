import firebase from "./firebase";

export const getCollection = async (name) => {
  const db = firebase.firestore();
  return await db.collection(name);
};

export const getAllFromCollection = async (name) => {
  const collection = await getCollection(name);
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => {
    console.log(doc.data());
    return doc.data();
  });
};
