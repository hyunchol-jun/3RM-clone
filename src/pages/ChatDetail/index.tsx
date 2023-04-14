import ChatDetailHeader from "../../components/ChatDetailHeader";
import ChatDetailBody from "../../components/ChatDetailBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../../utils/apiCalls";
import { Messages } from "../../interfaces";
import { User } from "../../interfaces";

interface ChatDetailProps {
  user: User | null;
  userPhoto: {} | null;
}

export default function ChatDetail({ user, userPhoto }: ChatDetailProps) {
  const [messages, setMessages] = useState<Messages | null>(null);
  const onlyMessages = messages?.messages.filter(
    (message) => message._ === "message"
  );
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    /* getFullChat(id).then((res: any) => setChatFull(res)); */
    /* getUpdatesDifference().then((res: any) => */
    /*   console.log("getUpdatesDifference: ", res) */
    /* ); */
    getHistory(id).then((res: any) => setMessages(res));
  }, [id]);
  console.log("messages: ", messages);
  return (
    <main className="bg-white h-screen pt-10">
      <div className="px-10 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-xl flex gap-3 items-center text-gray-500 p-1"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </div>
      <ChatDetailHeader chat={messages?.chats[0]} />
      <ChatDetailBody
        users={messages?.users}
        messages={onlyMessages}
        loggedInUser={user}
        chatId={id!}
        userPhoto={userPhoto}
      />
    </main>
  );
}
