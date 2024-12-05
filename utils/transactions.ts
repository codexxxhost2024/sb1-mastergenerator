import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Transaction {
  type: 'send' | 'receive';
  amount: number;
  title: string;
  senderId?: string;
  recipientId?: string;
  status?: string;
}

export const createTransaction = async (transaction: Transaction) => {
  const transactionsCollection = collection(db, 'transactions');
  return await addDoc(transactionsCollection, {
    ...transaction,
    timestamp: serverTimestamp(),
  });
};

export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'PHP'
  });
};