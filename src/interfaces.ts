export interface UserProfilePhoto {
  _: string;
  has_video?: string;
  photo_id?: string;
  dc_id?: number;
}

export interface User {
  access_hash: string;
  bot: boolean;
  first_name: string;
  last_name: string;
  username?: string;
  id: string;
  phone: string;
  self: boolean;
  photo: UserProfilePhoto;
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
}

export interface ChatFull {
  full_chat: {};
  users: User[];
  chats: Chat[];
}

export interface IdObject {
  _: string;
  chat_id?: string;
  user_id?: string;
}

export interface MessageService {
  id: number;
  date: number;
  peer_id: IdObject;
  from_id: IdObject;
  action: {};
  reply_to?: {};
}

export interface MessageEntity {
  _: string;
  offset: number;
  length: number;
}

export interface Message {
  _: string;
  id: number;
  date: number;
  peer_id: IdObject;
  from_id: IdObject;
  reply_to?: {};
  fwd_from?: {};
  message: string;
  edit_hide: boolean;
  entities: MessageEntity[];
  pinned: boolean;
  post: boolean;
  silent: boolean;
  legacy: boolean;
  media_unerad: boolean;
  mentioned: boolean;
  out: boolean;
  noforwards: boolean;
}

export interface Messages {
  chats: Chat[];
  messages: Message[];
  users: User[];
}
