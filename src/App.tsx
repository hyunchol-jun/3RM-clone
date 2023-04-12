import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  const [userPhoto, setUserPhoto] = useState<{} | null>(null);
  const userIdRef = useRef(null);
  useEffect(() => {
    getAllChats().then((res: any) => {
      console.log("response: ", res);
      setChats(res.chats);
    });
    loadUser()
      .then((res: any) => {
        setUser(res.users[0]);
        userIdRef.current = res.users[0].id;
        return getUserPhotos(res.users[0].id);
      })
      .then((res: any) => {
        return downloadPhoto(userIdRef.current, res.photos[0].id);
      })
      .then((res: any) => {
        setUserPhoto(res.bytes);
      });
  }, []);
  console.log("chats: ", chats);
  console.log("user: ", user);

  return (
    <BrowserRouter>
      <Header photo={userPhoto} />
      <Routes>
        <Route path="/chats" element={<ChatList chats={chats} />} />
        <Route
          path="/chats/:id"
          element={<ChatDetail user={user} userPhoto={userPhoto} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
