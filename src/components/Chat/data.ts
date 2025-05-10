import { User, Message } from './chat';

// Sample user data
export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastSeen: 'online',
    unreadCount: 2,
    status: "At work, please text"
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastSeen: '5 min ago',
    unreadCount: 0,
    status: "Available"
  },
  {
    id: 3,
    name: 'Mike Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastSeen: 'yesterday',
    unreadCount: 0,
    status: "Busy"
  },
  {
    id: 4,
    name: 'Alex Group',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastSeen: '3 hrs ago',
    unreadCount: 5,
    status: "Group chat"
  }
];

// Sample messages data
export const initialMessages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      senderId: 1,
      text: 'Hey there! How are you?',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      status: 'read'
    },
    {
      id: 2,
      senderId: 0, // Current user
      text: 'Hi John! I\'m doing well, thanks for asking. How about you?',
      timestamp: new Date(Date.now() - 82800000).toISOString(),
      status: 'read'
    },
    {
      id: 3,
      senderId: 1,
      text: 'I\'m great! Just wanted to check if we\'re still meeting tomorrow?',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      status: 'read'
    },
    {
      id: 4,
      senderId: 0,
      text: 'Yes, absolutely! Looking forward to it.',
      timestamp: new Date(Date.now() - 3540000).toISOString(),
      status: 'delivered'
    },
    {
      id: 5,
      senderId: 1,
      text: 'Perfect! See you at the usual place then.',
      timestamp: new Date(Date.now() - 60000).toISOString(),
      status: 'delivered'
    }
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      text: 'Hi there! Just checking about the project deadline',
      timestamp: new Date(Date.now() - 172800000).toISOString(),
      status: 'read'
    },
    {
      id: 2,
      senderId: 0,
      text: 'Hi Sarah, we\'re on track to deliver by Friday',
      timestamp: new Date(Date.now() - 172700000).toISOString(),
      status: 'read'
    },
    {
      id: 3,
      senderId: 2,
      text: 'That\'s great news!',
      timestamp: new Date(Date.now() - 172600000).toISOString(),
      status: 'read'
    }
  ],
  3: [
    {
      id: 1,
      senderId: 3,
      text: 'Hey, did you see the latest update?',
      timestamp: new Date(Date.now() - 259200000).toISOString(),
      status: 'read'
    },
    {
      id: 2,
      senderId: 0,
      text: 'Not yet, what happened?',
      timestamp: new Date(Date.now() - 259100000).toISOString(),
      status: 'read'
    },
    {
      id: 3,
      senderId: 3,
      text: 'They released the new version finally!',
      timestamp: new Date(Date.now() - 259000000).toISOString(),
      status: 'read'
    }
  ],
  4: [
    {
      id: 1,
      senderId: 4,
      text: 'Everyone, please introduce yourselves',
      timestamp: new Date(Date.now() - 432000000).toISOString(),
      status: 'read'
    },
    {
      id: 2,
      senderId: 2,
      text: 'Hi, I\'m Sarah, a graphic designer',
      timestamp: new Date(Date.now() - 431900000).toISOString(),
      status: 'read'
    },
    {
      id: 3,
      senderId: 3,
      text: 'Mike here, working as a developer',
      timestamp: new Date(Date.now() - 431800000).toISOString(),
      status: 'read'
    },
    {
      id: 4,
      senderId: 0,
      text: 'Hello everyone, nice to meet you all!',
      timestamp: new Date(Date.now() - 431700000).toISOString(),
      status: 'read'
    },
    {
      id: 5,
      senderId: 4,
      text: 'Great! Let\'s start our project discussion tomorrow',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      status: 'read'
    }
  ]
};