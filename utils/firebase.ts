import { collection, query, where, getDocs, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../config/firebase';

export const fetchUserData = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDocs(userRef);
  return userDoc.data();
};

export const updateUserBalance = async (userId: string, amount: number) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    balance: increment(amount)
  });
};

export const fetchTransactions = async (userId: string) => {
  const q = query(
    collection(db, 'transactions'),
    where('userId', '==', userId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};