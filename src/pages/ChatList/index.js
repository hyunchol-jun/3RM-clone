import ListFilter from "../../components/ListFilter";
import List from "../../components/List";

export default function ChatList() {
  return (
    <main className="bg-white h-screen pt-10">
      <h1 className="text-black text-5xl px-10">Chats</h1>
      <ListFilter />
      <List />
    </main>
  );
}
