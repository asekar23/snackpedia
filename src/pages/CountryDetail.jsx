import { useParams } from 'react-router-dom';
import { snacks } from '../data/snacks';
import SnackCard from '../components/SnackCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CountryDetail() {
  const { country } = useParams();
  const countrySnacks = snacks[country] || [];
  const countryName = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button with Icon */}
      <Link to="/countries" className="flex items-center gap-1 text-blue-500 mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to Countries
      </Link>

      {/* Animated Title */}
      <motion.h1 
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-2xl font-bold mb-6"
      >
        Snacks from {countryName}
      </motion.h1>

      {/* Snack List with Staggered Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-3"
      >
        {countrySnacks.map((snack) => (
          <SnackCard key={snack.id} snack={snack} />
        ))}
      </motion.div>
    </div>
  );
}