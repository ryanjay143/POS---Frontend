import { ThemeProvider } from '@/components/themeProvider';
import { ModeToggle } from './components/mode-toogle';
import Profile from './views/admin/layouts/Profile';
import AdminSidebar from './views/admin/layouts/AdminSideabr';
import { Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="bg-background flex">
        <div className="absolute z-30 flex gap-3 items-center right-0 p-7">
          <ModeToggle />
          <Profile />
        </div>
        <div className='flex w-full'>
          <AdminSidebar />
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;