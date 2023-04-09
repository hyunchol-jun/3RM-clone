import Icontext from "../IconText";
import avatar from "../../assets/WebDev_Hyunchol_Jun.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ListItem() {
  return (
    <div className="w-full flex border-b py-3 px-12 items-center text-lg">
      <div className="w-3/12 flex flex-col items-start">
        <span className="text-black">Bronze sponsors</span>
        <span>~Ryan~, LDF +4 others</span>
      </div>
      <div className="w-1/6 flex flex-col items-start">
        <span className="text-black">Jan 1</span>
        <span>12:03 PM</span>
      </div>
      <div className="w-1/6">
        <Icontext text="Jan 18" className="avatar">
          <div className="w-6 rounded-full">
            <img src={avatar} alt="" />
          </div>
        </Icontext>
      </div>
      <div className="w-1/6 flex gap-2 items-center">
        <span className="text-lg text-black">Chat Link</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3" />
      </div>
      <div>
        <p className="text-black">'Prepare notes for intro call'</p>
        <span>+2 others</span>
      </div>
    </div>
  );
}
