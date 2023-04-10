import ListFilter from "../../components/ListFilter";
import List from "../../components/List";
import { Chat } from "../../interfaces";

interface ChatListProps {
  chats: Chat[];
}

export default function ChatList({ chats }: ChatListProps) {
  return (
    <main className="bg-white h-full pt-10">
      <h1 className="text-black text-5xl px-10">Chats</h1>
      <ListFilter />
      <List chats={chats} />
    </main>
  );
}
