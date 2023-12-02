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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!threadId) return;
    setIsLoading(true);

    const q = query(
      collection(db, "threads", threadId, "messages"),
      orderBy("createdAt")
    );

    // Set up a real-time listener (onSnapshot) for the query, which updates
    // the messages state whenever there are changes in the Firestore collection.
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMessages(items);
      setTimeout(() => setIsLoading(false), 250);
    });

    return () => unsubscribe();
  }, [threadId]);

  return { messages, isLoading };
}
