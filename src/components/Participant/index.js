export default function Participant({ name, id }) {
  return (
    <div className="w-full flex justify-between items-center">
      <span>{name}</span>
      <span>{id}</span>
    </div>
  );
}
