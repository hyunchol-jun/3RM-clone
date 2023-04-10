import { useNavigate } from "react-router-dom";
import Icontext from "../IconText";
import avatar from "../../assets/WebDev_Hyunchol_Jun.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Chat } from "../../interfaces";

interface ListItemProps {
  chat: Chat;
}

const getDate = (epoch: number) => {
  const date = new Date(epoch * 1000);
  return date.toDateString();
};

const getTime = (epoch: number) => {
  const date = new Date(epoch * 1000);
  return date.toLocaleTimeString();
};

export default function ListItem({ chat }: ListItemProps) {
  const navigate = useNavigate();
  const handleListItemClick = (id: string) => {
    navigate(`/chats/${id}`);
  };

  return (
    <div
      onClick={() => handleListItemClick(chat.id)}
      className="w-full flex border-b py-3 px-12 items-center text-lg"
    >
      <div className="w-3/12 flex flex-col items-start">
        <span className="text-black">{chat.title}</span>
        <span>
          {chat.participants_count === 1
            ? `${chat.participants_count} participant`
            : `${chat.participants_count} participants`}
        </span>
      </div>
      <div className="w-1/6 flex flex-col items-start">
        <span className="text-black">{getDate(chat.date)}</span>
        <span>{getTime(chat.date)}</span>
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
