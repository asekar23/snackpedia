
import { 
  Candy, IceCream, Pizza, Croissant, Cookie, 
  Coffee, Drumstick, Citrus, Milk, Grape 
} from 'lucide-react';

const iconComponents = {
  candy: Candy,
  cookie: Cookie,
  pizza: Pizza,
  croissant: Croissant,
  coffee: Coffee,
  icecream: IceCream,
  drumstick: Drumstick,
  citrus: Citrus,
  milk: Milk,
  grape: Grape
};

export default function SnackCard({ snack }) {
  const Icon = iconComponents[snack.iconType];
  
  return (
    <div className="flex items-start gap-3 p-4 bg-white/80 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
      {Icon && (
        <div className={`p-2 rounded-full ${snack.iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-gray-800">{snack.name}</h3>
        <p className="text-sm text-gray-600">{snack.description}</p>
      </div>
    </div>
  );
}