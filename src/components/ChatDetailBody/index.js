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

export default function ChatDetailBody() {
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
            <Participant name="Jocelyn Lubin" id="@jocelynlubin" />
            <Participant name="Jan Rosend" id="@janrosen" />
            <Participant name="Jacksonita" id="@jacksonrodriguez" />
            <Participant name="AK @ 3RM" id="@AK" />
            <Participant name="Ryan Gilly" id="@~Ryan~" />
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
              <select className="bg-gray-100 border border-gray-200 rounded-2xl w-fit text-gray-600 p-1 focus:outline-none">
                <option selected>All</option>
                <option>Today</option>
                <option>This week</option>
              </select>
              <button className="bg-white border border-gray-200 rounded-xl text-gray-400 px-3 py-0.5">
                <span className="text-gray-500 text-lg">+</span>&nbsp;&nbsp;Add
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white px-6 py-6 rounded-b-xl">
            <Note name="You" time="Just now">
              <div className="relative">
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
                    <button className="btn btn-ghost btn-sm">Cancel</button>
                    <button className="btn btn-sm">Save</button>
                  </div>
                </div>
                <textarea
                  className="bg-gray-100 border-2 border-gray-200 rounded-xl text-xl text-black p-4 pb-10 w-full"
                  rows="2"
                />
              </div>
            </Note>
            <Note name="James Nicholls" time="24m ago">
              <p className="text-black text-xl">
                Asked Jocelyn if she's at{" "}
                <a className="underline text-blue-500">rAAVE Bogota</a>, she
                said no
              </p>
            </Note>
            <Note name="You" time="Monday">
              <p className="text-black text-xl">
                Reached out through Aleo's Discord, booked demo for Monday
              </p>
            </Note>
          </div>
        </div>
      </div>
    </div>
  );
}
