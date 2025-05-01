import { useParams } from 'react-router-dom';
import { snacks } from '../data/snacks';

export default function CountryDetail() {
  const { country } = useParams();
  const countrySnacks = snacks[country];

  if (!countrySnacks) return <p>No snacks found!</p>;

  return (
    <div>
      <h2>Snacks from {country.toUpperCase()}</h2>
      <ul>
        {countrySnacks.map((snack) => (
          <li key={snack.name}>
            <img src={snack.image} alt={snack.name} width={100} />
            <p>{snack.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
