export interface User {
  access_hash: string;
  bot: boolean;
  first_name: string;
  last_name: string;
  username?: string;
  id: string;
  phone: string;
  self: boolean;
}

export interface Chat {
  id: string;
  title: string;
  creator: boolean;
  date: number;
  deactivated: boolean;
  kicked: boolean;
  left: boolean;
  participants_count: number;
  photo?: {};
  users?: User[];
}

export interface ChatFull {
  full_chat: {};
  users: User[];
  chats: Chat[];
}
