import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faComments } from "@fortawesome/free-regular-svg-icons";
import { faStopwatch, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Icontext from "../IconText";

export default function ListBar() {
  return (
    <div className="w-full flex border-b pb-2 px-12">
      <div className="w-3/12">
        <Icontext text="Chat">
          <FontAwesomeIcon icon={faCommentDots} />
        </Icontext>
      </div>
      <div className="w-1/6">
        <Icontext text="Latest Message">
          <FontAwesomeIcon icon={faComments} />
        </Icontext>
      </div>
      <div className="w-1/6">
        <Icontext text="Follow-up">
          <FontAwesomeIcon icon={faStopwatch} />
        </Icontext>
      </div>
      <div className="w-1/6">
        <Icontext text="Telegram Link">
          <FontAwesomeIcon icon={faTelegram} />
        </Icontext>
      </div>
      <div>
        <Icontext text="Notes">
          <FontAwesomeIcon icon={faPencil} />
        </Icontext>
      </div>
    </div>
  );
}
