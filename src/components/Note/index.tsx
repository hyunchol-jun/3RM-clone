interface NoteProps {
  children: React.ReactNode;
  name: string;
  time: string;
  photo: {} | null;
}

export default function Note({ children, name, time, photo }: NoteProps) {
  const profileImage =
    photo instanceof Uint8Array
      ? URL.createObjectURL(new Blob([photo.buffer], { type: "image/png" }))
      : undefined;
  return (
    <div className="flex gap-3 items-start w-full">
      <div className="avatar">
        <div className="w-6 rounded-full">
          <img src={profileImage} alt="" />
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
