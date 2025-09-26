import BotPanel from "@/components/BotPanel";

interface Props { params: { game: string }; }

const gameNames: Record<string,string> = {
  "mines":"Mines","lucky-jet":"Lucky Jet","coinflip":"CoinFlip","rocket-x":"Rocket X",
  "rocket-queen":"Rocket Queen","spins-queen":"Spins Queen","speed-n-cash":"Speed-n-Cash",
  "brawl-pirates":"Brawl Pirates","royal-mines":"Royal Mines","lucky-loot":"Lucky Loot"
};

export default function GamePage({ params }: Props) {
  const gameTitle = gameNames[params.game] || "Игра";
  return (
    <main className="min-h-screen bg-[#0f0f16] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">{gameTitle} — Бот</h1>
      <BotPanel />
    </main>
  );
}