import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ChatList from "./pages/ChatList";
import ChatDetail from "./pages/ChatDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/chats" element={<ChatList />} />
        <Route path="/chats/:id" element={<ChatDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
