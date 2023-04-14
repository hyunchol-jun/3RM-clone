import ListBar from "../ListBar";
import ListItem from "../ListItem";

import { Chat } from "../../interfaces";

interface ListProps {
  chats: Chat[];
}

export default function List({ chats }: ListProps) {
  const realChats = chats.filter((chat) => chat.participants_count > 0);
  return (
    <>
      <ListBar />
      {realChats.map((chat: Chat) => (
        <ListItem key={chat.id} chat={chat} />
      ))}
    </>
  );
}
