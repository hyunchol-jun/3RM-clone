export default function Icontext({ children, text, className }) {
  return (
    <div
      className={`flex gap-2 items-center text-gray-500 text-lg ${className}`}
    >
      {children}
      <span>{text}</span>
    </div>
  );
}
