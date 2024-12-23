import './App.css'
import { lazy, Suspense } from 'react';

// dynamic import
// const Sidebar = React.lazy(() => import('sidebar_app/button'))

// static import
// import Sidebar from 'sidebar_app/sidebar'

const Sidebar = lazy(() => import('sidebar_app/sidebar'));

export const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading..</div>}>
        <Sidebar />
      </Suspense>
      <div className="content">
          <h1>Second service</h1>
      </div>
    </div>
  );
};
