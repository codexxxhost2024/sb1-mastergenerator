import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';

export const getOrCreateUser = async () => {
  let deviceId = localStorage.getItem('deviceId');
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem('deviceId', deviceId);
  }

  const userRef = doc(db, 'users', deviceId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    const newUser = {
      id: deviceId,
      displayName: 'New User',
      email: '',
      isVerified: false,
      balance: 0,
      isAffiliate: false,
      phoneNumber: '',
    };
    await setDoc(userRef, newUser);
    return newUser;
  }

  return userDoc.data();
};

export const updateUserProfile = async (userId: string, data: any) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, data);
};