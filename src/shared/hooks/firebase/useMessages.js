import { useEffect, useState } from "react";

import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  query,
  onSnapshot,
  orderBy,
  Timestamp,
} from "firebase/firestore";

import { app } from "@/config/firebase";

const db = getFirestore(app);
export default function useMessages(threadId) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!threadId) return;

    const q = query(
      collection(db, "threads", threadId, "messages"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMessages(items);
    });

    return () => unsubscribe();
  }, [threadId]);

  return { messages };
}
