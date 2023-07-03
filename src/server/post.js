import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'posts';

export const getPostList = async () => {
  const _collection = collection(db, COLLECTION_NAME);

  const docsSnap = await getDocs(_collection);

  const initialTodos = [];

  docsSnap.forEach(doc => {
    initialTodos.push({ id: doc.id, ...doc.data() });
  });
  return initialTodos;
};

// export const getPostList = async () => {
//   const _collection = collection(db, COLLECTION_NAME);
//   const docsSnap = await getDocs(_collection);
//   const initialTodos = [];
//   docsSnap.forEach((doc) =>{
//     initialTodos.push({id: doc.id, ...doc.data()})
//   })
//   return docsSnap.docs;
// };
