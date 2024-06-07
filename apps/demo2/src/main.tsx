import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MyNav } from '@myorg-demo/my-nav';

const routes = [
  {
    path: '/demo2/page-1',
    element: 
      <div>
        demo2 的 page-1
        This is the generated root route.{' '}
        <Link to="/apps/demo2/page-2">Click here for page 2.</Link>
      </div>
  },
  {
    path: '/demo2/page-2',
    element: 
      <div>
        demo2 的 page-1
        <Link to="/demo1">Click here to go back to root page.</Link>
      </div>
  }
]
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter basename='/apps/'>
      <MyNav />
      <hr />
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
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
