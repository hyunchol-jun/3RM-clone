import ChatDetailHeader from "../../components/ChatDetailHeader";
import ChatDetailBody from "../../components/ChatDetailBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFullChat } from "../../utils/apiCalls";
import { Chat } from "../../interfaces";

export default function ChatDetail() {
  const [chat, setChat] = useState<Chat | null>(null);
  const { id } = useParams();
  useEffect(() => {
    getFullChat(id).then((res: any) => setChat(res));
  }, [id]);
  console.log(chat);
  return (
    <main className="bg-white h-full pt-10">
      <div className="px-10 pb-6">
        <button className="text-xl flex gap-3 items-center text-gray-500 p-1">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </div>
      <ChatDetailHeader />
      <ChatDetailBody users={chat?.users} />
    </main>
  );
}
