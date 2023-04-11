import { faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/WebDev_Hyunchol_Jun.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-white border-b border-gray-100 px-4">
      <div className="flex-1">
        <Link to="/chats" className="btn btn-ghost text-black text-2xl">
          <FontAwesomeIcon icon={faTree} />
          RM
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="avatar-group -space-x-5">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar z-10 focus:outline-none"
            >
              <div className="w-10 rounded-full">
                <img src={avatar} alt="" />
              </div>
            </label>
            <div className="btn btn-ghost btn-circle avatar placeholder border-white">
              <div className="w-10 rounded-full bg-neutral-focus text-white">
                <span>O_D</span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
