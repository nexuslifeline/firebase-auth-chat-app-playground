import { useEffect, useState } from "react";

import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

import { app } from "@/config/firebase";

const db = getFirestore(app);

export default function useUsers() {
  const [users, setUsers] = useState([]);

  const addUser = async (user) => {
    const data = { ...user, createdAt: Timestamp.now() };
    await setDoc(doc(db, "users", user.uid), data);
  };

  const getUser = async (uid) => {
    console.log("getuser fired!");
    const userRef = doc(db, "users", uid);
    const user = await getDoc(userRef);
    return user.data();
  };

  useEffect(() => {
    const q = query(collection(db, "users"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  return { addUser, getUser, users };
}
