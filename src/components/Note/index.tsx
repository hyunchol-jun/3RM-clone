import avatar from "../../assets/WebDev_Hyunchol_Jun.jpg";

interface NoteProps {
  children: React.ReactNode;
  name: string;
  time: string;
}

export default function Note({ children, name, time }: NoteProps) {
  return (
    <div className="flex gap-3 items-start w-full">
      <div className="avatar">
        <div className="w-6 rounded-full">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div>
          <span className="text-gray-600">{name}</span> &#183; {time}
        </div>
        {children}
      </div>
    </div>
  );
}
