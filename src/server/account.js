import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const requestLogin = async (email, password) => {
  console.log(auth);
  await signInWithEmailAndPassword(auth, email, password);
};

export const requestJoin = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
