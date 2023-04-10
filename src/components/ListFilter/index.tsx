import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function ListFilter() {
  return (
    <div className="flex justify-between my-6 px-10 text-lg">
      <div className="flex gap-8">
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute w-3 h-3 top-2.5 left-4"
          />
          <input
            type="text"
            placeholder="Search by chat name"
            className="bg-gray-100 border-2 py-0.5 px-9 rounded-2xl focus:outline-none"
          />
        </div>
        <div className="flex gap-3">
          <button className="border rounded-2xl px-3">
            <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2" />
            Favorites
          </button>
          <button className="border rounded-2xl px-4">
            <FontAwesomeIcon icon={faUserCheck} className="w-4 h-4 mr-2" />
            I'm a participant
          </button>
        </div>
      </div>
      <button className="border-2 rounded px-2 text-gray-500 bg-gray-100">
        <FontAwesomeIcon icon={faTelegram} />
      </button>
    </div>
  );
}
