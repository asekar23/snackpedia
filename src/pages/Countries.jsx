import { Globe, Flag } from 'lucide-react';
import { snacks } from '../data/snacks';

export default function Countries() {
  const countries = Object.keys(snacks);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Updated Header with Icon */}
      <div className="flex items-center gap-2 mb-6">
        <Globe className="w-6 h-6 text-blue-500" />
        <h1 className="text-2xl font-bold">Countries</h1>
      </div>

      {/* Country List with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {countries.map((country) => (
          <motion.div
            key={country}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-white/80 border border-gray-200 rounded-lg flex items-center gap-3"
          >
            <Flag className="w-5 h-5 text-red-500" />
            <span className="font-medium">{country.charAt(0).toUpperCase() + country.slice(1)}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}