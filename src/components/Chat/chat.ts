export interface User {
  id: number;
  name: string;
  avatar: string;
  status: string;
  lastSeen: string; // e.g., 'online' or 'yesterday at 3:00 PM'
  phone: string; // international phone number e.g., '919876543210'
}
