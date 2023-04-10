interface ParticipantProps {
  name: string;
  id: string;
}

export default function Participant({ name, id }: ParticipantProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <span>{name}</span>
      <span>{id}</span>
    </div>
  );
}
