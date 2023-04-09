import avatar from "../../assets/WebDev_Hyunchol_Jun.jpg";
import logo from "../../assets/logo_3rm.svg";

export default function Header() {
  return (
    <div className="navbar bg-white border-b border-gray-100">
      <div className="flex-1">
        <a className="btn btn-ghost">
          <img className="w-12 h-12" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
