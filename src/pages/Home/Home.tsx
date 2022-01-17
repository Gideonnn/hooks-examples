import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="pt-12 mx-auto prose text-center">
    <h1>React Hooks examples</h1>
    <p>Choose one of the examples below.</p>
    <div>
      <Link to="/use-state">useState</Link>
    </div>
    <div>
      <Link to="/use-effect">useEffect</Link>
    </div>
    <div>
      <Link to="/use-ref">useRef</Link>
    </div>
    <div>
      <Link to="/use-memo">useMemo</Link>
    </div>
    <div>
      <Link to="/use-layout-effect">useLayoutEffect</Link>
    </div>
    <div>
      <Link to="/use-callback">useCallback</Link>
    </div>
    <div>
      <Link to="/use-reducer">useReducer</Link>
    </div>
    <div>
      <Link to="/use-context">useContext</Link>
    </div>
  </div>
);
