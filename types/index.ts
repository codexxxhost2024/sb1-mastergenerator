export interface User {
  id: string;
  displayName: string;
  email: string;
  isVerified: boolean;
  balance: number;
  isAffiliate: boolean;
  phoneNumber: string;
  photoURL?: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  title: string;
  timestamp: any;
  senderId?: string;
  recipientId?: string;
  status?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  url: string;
  isActive: boolean;
}