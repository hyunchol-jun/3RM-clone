import ChatDetailHeader from "../../components/ChatDetailHeader";
import ChatDetailBody from "../../components/ChatDetailBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ChatDetail() {
  return (
    <main className="bg-white h-screen pt-10">
      <div className="px-10 pb-6">
        <button className="text-xl flex gap-3 items-center text-gray-500 p-1">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </div>
      <ChatDetailHeader />
      <ChatDetailBody />
    </main>
  );
}
