import "@/config/firebase";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const auth = getAuth();

export default function useFirebaseAuth() {
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
