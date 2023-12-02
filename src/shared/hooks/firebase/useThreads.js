import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

import { app } from "@/config/firebase";

const db = getFirestore(app);

export default function useThreads() {
  // Function to create a unique thread ID based on participant UIDs
  const createThreadId = (participantsUid = []) => {
    return participantsUid.sort().join("-");
  };

  // Function to add a thread to Firestore based on sender and recipient
  const addThread = async (sender, recipient) => {
    const threadId = createThreadId([sender?.uid, recipient?.uid]);

    const docRef = doc(db, "threads", threadId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        uid: threadId,
      });
    } else {
      console.log("Document already exists!");
      console.log("Document data:", docSnap.data());
    }

    return threadId;
  };

  // Function to add a message to a thread in Firestore
  const addThreadMessage = async ({ sender, recipient, message }) => {
    try {
      const threadId = createThreadId([sender?.uid, recipient?.uid]);
      const data = {
        message,
        sender: { name: sender?.name, uid: sender?.uid },
        recipient: { name: recipient?.name, uid: recipient?.uid },
        createdAt: Timestamp.now(),
      };
      await addDoc(collection(db, "threads", threadId, "messages"), data);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  return { addThread, addThreadMessage, createThreadId };
}
