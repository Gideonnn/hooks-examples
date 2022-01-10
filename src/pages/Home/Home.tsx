import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="pt-12 mx-auto prose text-center">
    <h1>React Hooks examples</h1>
    <p>Choose one of the examples below.</p>
    <Link to="/use-state">useState</Link>
  </div>
);
