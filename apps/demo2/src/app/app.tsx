// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';


export function App() {
  return (
    <div>
      <h1>这是 demo2 </h1>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/demo2/page-1">Home</Link>
          </li>
          <li>
            <Link to="/demo2/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
