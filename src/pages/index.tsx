import { trpc } from "@/utils/trpc";
import { getOptionForVotes } from "@/utils/getRandomPokemon";

export default function Home() {
  const [first, second] = getOptionForVotes();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokémon is rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="h-16 w-16 bg-red-800"> {first} </div>
        <div className="p-8">Vs</div>
        <div className="h-16 w-16 bg-red-800"> {second} </div>
      </div>
    </div>
  );
}
