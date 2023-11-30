import "@/config/firebase";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

export default function useFirebase() {
  const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const onAuth = (callback) => onAuthStateChanged(auth, callback);
  const logout = () => signOut(auth);

  return { register, signIn, onAuth, logout };
}
