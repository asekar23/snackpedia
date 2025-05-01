import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>🍿 Welcome to Snackpedia!</h1>
      <p>Explore delicious snacks from around the world.</p>
      
      <Link 
        to="/countries"
        style={{
          marginTop: '1rem',
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#ffcc00',
          color: '#000',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        Browse Countries
      </Link>
    </div>
  );
}
