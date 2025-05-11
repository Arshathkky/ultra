import { User } from './chat';

export const users: User[] = [
  {
    id: 1,
    name: 'Alice',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'Let’s connect!',
    lastSeen: 'online',
    phone: '919876543210' // 👈 WhatsApp phone number
  },
  {
    id: 2,
    name: 'Bob',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'Busy right now',
    lastSeen: 'yesterday at 5:45 PM',
    phone: '919812345678'
  },
  {
    id: 3,
    name: 'Charlie',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'Available',
    lastSeen: 'online',
    phone: '447911123456'
  }
];
