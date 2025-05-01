import { Flag, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CountryCard({ country }) {
  const countryName = country.charAt(0).toUpperCase() + country.slice(1);
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-red-500" />
        <h2 className="text-xl font-bold">{countryName}</h2>
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
        <Flag className="w-4 h-4" />
        <span>{country.toUpperCase()}</span>
      </div>
    </motion.div>
  );
}