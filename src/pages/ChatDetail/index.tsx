import ChatDetailHeader from "../../components/ChatDetailHeader";
import ChatDetailBody from "../../components/ChatDetailBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getFullChat,
  getUpdatesState,
  getUpdatesDifference,
} from "../../utils/apiCalls";
import { ChatFull } from "../../interfaces";

export default function ChatDetail() {
  const [chatFull, setChatFull] = useState<ChatFull | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getFullChat(id).then((res: any) => setChatFull(res));
    getUpdatesDifference().then((res: any) => console.log(res));
  }, [id]);
  console.log(chatFull);
  return (
    <main className="bg-white h-full pt-10">
      <div className="px-10 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-xl flex gap-3 items-center text-gray-500 p-1"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </div>
      <ChatDetailHeader chat={chatFull?.chats[0]} />
      <ChatDetailBody users={chatFull?.users} />
    </main>
  );
}
