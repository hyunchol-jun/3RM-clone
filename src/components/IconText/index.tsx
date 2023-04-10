interface IcontextProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

export default function Icontext({ children, text, className }: IcontextProps) {
  return (
    <div
      className={`flex gap-2 items-center text-gray-500 text-lg ${className}`}
    >
      {children}
      <span>{text}</span>
    </div>
  );
}
