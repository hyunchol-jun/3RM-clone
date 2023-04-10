import ListBar from "../ListBar";
import ListItem from "../ListItem";

import { Chat } from "../../interfaces";

interface ListProps {
  chats: Chat[];
}

export default function List({ chats }: ListProps) {
  return (
    <>
      <ListBar />
      {chats.map((chat: Chat) => (
        <ListItem key={chat.id} chat={chat} />
      ))}
    </>
  );
}
