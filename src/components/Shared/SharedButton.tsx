export default function SharedButton({
  title,
  bgColor,
  textColor,
  className = '',
}: {
  title: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <button
      className={`${bgColor} ${textColor} px-4 py-3 w-[110px] h-[43px] rounded-md capitalize cursor-pointer flex items-center justify-center ${className}`}
    >
      {title}
    </button>
  );
}
