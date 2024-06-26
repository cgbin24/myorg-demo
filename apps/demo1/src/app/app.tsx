// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';


// import NxWelcome from './nx-welcome';

import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <div>
      <h1>这是 demo1 </h1>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/demo1/">Home</Link>
          </li>
          <li>
            <Link to="/demo1/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
