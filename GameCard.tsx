interface GameCardProps {
  name: string;
  icon: string;
}

export default function GameCard({ name, icon }: GameCardProps) {
  return (
    <div className="bg-[#1a1a24] hover:bg-[#242432] transition rounded-2xl shadow-lg p-4 cursor-pointer flex flex-col items-center">
      <img src={icon} alt={name} className="w-16 h-16 mb-3" />
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  );
}