import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Layout() {
  return (
    <div className="flex">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
