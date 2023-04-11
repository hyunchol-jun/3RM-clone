import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChatList from "./pages/ChatList";
import ChatDetail from "./pages/ChatDetail";
import { User, Chat } from "./interfaces";
import {
  loadUser,
  createChat,
  sendMessage,
  getState,
  addChatUser,
  getChats,
  getAllChats,
  getFullChat,
} from "./utils/apiCalls.js";

const user = loadUser();

function App() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getAllChats().then((res: any) => {
      setChats(res.chats);
    });
  }, []);
  console.log(chats);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/chats" element={<ChatList chats={chats} />} />
        <Route path="/chats/:id" element={<ChatDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
