import { snacks } from '../data/snacks';
import SnackCard from '../components/SnackCard';

export default function Home() {
  // Flatten all snacks into one array
  const allSnacks = Object.values(snacks).flat();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Snackpedia</h1>
      
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <p className="flex items-center gap-2">
          <span className="text-blue-500">✓</span>
          Discover global snacks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allSnacks.map((snack) => (
          <SnackCard key={snack.id} snack={snack} />
        ))}
      </div>
    </div>
  );
}