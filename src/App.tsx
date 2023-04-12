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
  getState,
  addChatUser,
  getChats,
  getAllChats,
  getFullChat,
  sendCode,
  getUserPhotos,
  downloadPhoto,
} from "./utils/apiCalls.js";

function App() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getAllChats().then((res: any) => {
      console.log("response: ", res);
      setChats(res.chats);
    });
    loadUser().then((res: any) => {
      setUser(res.users[0]);
    });
  }, []);
  console.log("chats: ", chats);
  console.log("user: ", user);
  user &&
    getUserPhotos(user.id)
      .then((res: any) => {
        console.log(res.photos[0]);
        return downloadPhoto(user.id, res.photos[0].id);
      })
      .then((res: any) => {
        setUser({ ...user, photo: res.bytes });
        console.log("bytes: ", res.bytes);
      });

  return (
    <BrowserRouter>
      <Header photo={user && user.photo} />
      <Routes>
        <Route path="/chats" element={<ChatList chats={chats} />} />
        <Route path="/chats/:id" element={<ChatDetail user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
