import { Link } from 'react-router-dom';
import { snacks } from '../data/snacks';

export default function Countries() {
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {Object.keys(snacks).map((country) => (
          <li key={country}>
            <Link to={`/countries/${country}`}>{country.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
