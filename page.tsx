import Link from "next/link";
import GameCard from "@/components/GameCard";

export default function Home() {
  const games = [
    { id: "mines", name: "Mines", icon: "/icons/mines.png" },
    { id: "lucky-jet", name: "Lucky Jet", icon: "/icons/lucky-jet.png" },
    { id: "coinflip", name: "CoinFlip", icon: "/icons/coinflip.png" },
    { id: "rocket-x", name: "Rocket X", icon: "/icons/rocket-x.png" },
    { id: "rocket-queen", name: "Rocket Queen", icon: "/icons/rocket-queen.png" },
    { id: "spins-queen", name: "Spins Queen", icon: "/icons/spins-queen.png" },
    { id: "speed-n-cash", name: "Speed-n-Cash", icon: "/icons/speed-n-cash.png" },
    { id: "brawl-pirates", name: "Brawl Pirates", icon: "/icons/brawl-pirates.png" },
    { id: "royal-mines", name: "Royal Mines", icon: "/icons/royal-mines.png" },
    { id: "lucky-loot", name: "Lucky Loot", icon: "/icons/lucky-loot.png" },
    { id: "aviator", name: "Aviamaster", icon: "/icons/aviator.png" },
  ];

  return (
    <main className="min-h-screen bg-[#0f0f16] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Игры 1Win</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <Link key={game.id} href={`/games/${game.id}`}>
            <GameCard name={game.name} icon={game.icon} />
          </Link>
        ))}
      </div>
    </main>
  );
}