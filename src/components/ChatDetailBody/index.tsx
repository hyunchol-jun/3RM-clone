import {
  faCalendarPlus,
  faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icontext from "../IconText";
import Participant from "../Participant";
import Note from "../Note";
import { User, Message } from "../../interfaces";
import { sendMessageToChat, getUserPhotos } from "../../utils/apiCalls";
import { useState } from "react";

interface ChatDetailBodyProps {
  users?: User[];
  messages?: Message[];
  loggedInUser: User | null;
  chatId: string;
}

export default function ChatDetailBody({
  loggedInUser,
  users,
  messages,
  chatId,
}: ChatDetailBodyProps) {
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("target value: ", e.currentTarget.content.value);
    sendMessageToChat(chatId, e.currentTarget.content.value).then(
      (res: any) => {
        console.log("sendMessageResponse: ", res);
      }
    );
    e.currentTarget.reset();
  };
  const [isEditorShown, setIsEditorShown] = useState(false);
  console.log("users: ", users);

  return (
    <div className="p-8 bg-slate-100 flex gap-8 h-full">
      <div className="flex flex-col gap-8 w-2/5">
        <div className="shadow-lg rounded-xl">
          <div className="bg-white text-black text-xl px-6 py-3 rounded-t-xl border-b">
            Follow-up Reminder
          </div>
          <div className="bg-white px-6 py-3 rounded-b-xl">
            <Icontext text="Add follow-up reminder">
              <FontAwesomeIcon icon={faCalendarPlus} />
            </Icontext>
          </div>
        </div>
        <div className="shadow-lg rounded-xl">
          <div className="bg-white text-black text-xl px-6 py-3 rounded-t-xl border-b">
            Active Participants
          </div>
          <div className="bg-white px-6 py-3 border-b">
            {users &&
              users.map((user) => (
                <Participant
                  key={user.id}
                  name={`${user.first_name} ${user.last_name}`}
                  id={`${
                    user.username || `${user.first_name}_${user.last_name}`
                  }`}
                />
              ))}
          </div>
          <div className="bg-white px-6 py-3 rounded-b-xl">
            Don't see everyone?&nbsp;
            <div
              className="tooltip tooltip-bottom bg-white"
              data-tip="Helpful message"
            >
              <span className="underline decoration-dotted hover:cursor-help">
                Here's why
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="shadow-lg rounded-xl">
          <div className="flex items-center justify-between bg-white px-6 py-3 rounded-t-xl border-b">
            <span className="text-black text-xl ">Notes</span>
            <div className="flex gap-8">
              <select
                className="bg-gray-100 border border-gray-200 rounded-2xl w-fit text-gray-600 p-1 focus:outline-none"
                defaultValue="All"
              >
                <option>All</option>
                <option>Today</option>
                <option>This week</option>
              </select>
              <button
                className="bg-white border border-gray-200 rounded-xl text-gray-400 px-3 py-0.5"
                onClick={() => setIsEditorShown(true)}
              >
                <span className="text-gray-500 text-lg">+</span>&nbsp;&nbsp;Add
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white px-6 py-6 rounded-b-xl">
            {isEditorShown && (
              <Note name="You" time="Just now">
                <form className="relative" onSubmit={(e) => handleSave(e)}>
                  <div className="absolute w-full pl-2 pr-6 bottom-2 flex items-center justify-between">
                    <div className="flex text-gray-500">
                      <button className="btn btn-square btn-ghost w-8 h-8">
                        <FontAwesomeIcon icon={faBold} />
                      </button>
                      <button className="btn btn-square btn-ghost w-8 h-8">
                        <FontAwesomeIcon icon={faItalic} />
                      </button>
                      <button className="btn btn-square btn-ghost w-8 h-8">
                        <FontAwesomeIcon icon={faStrikethrough} />
                      </button>
                      <button className="btn btn-square btn-ghost w-8 h-8">
                        <FontAwesomeIcon icon={faFaceSmile} />
                      </button>
                      <button className="btn btn-square btn-ghost w-8 h-8">
                        <FontAwesomeIcon icon={faLink} />
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => setIsEditorShown(false)}
                      >
                        Cancel
                      </button>
                      <button className="btn btn-sm">Save</button>
                    </div>
                  </div>
                  <textarea
                    className="bg-gray-100 border-2 border-gray-200 rounded-xl text-xl text-black p-4 pb-10 w-full"
                    rows={2}
                    name="content"
                  />
                </form>
              </Note>
            )}
            {messages &&
              messages.map((message) => {
                const foundUser = users
                  ? users.find((user) => user.id === message.from_id.user_id)
                  : null;
                return (
                  <Note
                    name={
                      !foundUser
                        ? ""
                        : foundUser.id === loggedInUser!.id
                        ? "You"
                        : `${foundUser.first_name}`
                    }
                    time={new Date(message.date * 1000).toLocaleString()}
                    key={message.id}
                  >
                    <p className="text-black text-xl">{message.message}</p>
                  </Note>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
