import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as starFilled,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function ChatDetailHeader() {
  return (
    <div className="flex justify-between px-10 pb-4 border-b border-gray-200">
      <div className="flex gap-3">
        <h1 className="text-black text-5xl">3RM X ACME Inc</h1>
        <button className="flex gap-2.5 items-center text-blue-500 rounded-2xl border border-blue-500 bg-blue-50 px-3 py-0.5 h-fit">
          <FontAwesomeIcon icon={starFilled} className="w-3.5" />
          Favorite
        </button>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <span>ACTIVE</span>
          <span className="text-black">24m ago</span>
        </div>
        <div className="flex flex-col">
          <span>LINK</span>
          <div className="w-1/6 flex gap-2 items-center text-black">
            <span className="text-lg whitespace-nowrap">Telegram Chat</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
