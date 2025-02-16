import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Book, Moon, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = () => (
    <div className="space-y-2">
      <NavLink
        to="/app"
        end
        onClick={() => setIsMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-indigo-100 text-indigo-900'
              : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/app/diary"
        onClick={() => setIsMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-indigo-100 text-indigo-900'
              : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        <Book size={20} />
        <span>Sleep Diary</span>
      </NavLink>

      <NavLink
        to="/app/relax"
        onClick={() => setIsMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-indigo-100 text-indigo-900'
              : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        <Moon size={20} />
        <span>Relaxation</span>
      </NavLink>

      <NavLink
        to="/app/learn"
        onClick={() => setIsMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-indigo-100 text-indigo-900'
              : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        <BookOpen size={20} />
        <span>Learn</span>
      </NavLink>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-900">Slumberly</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4">
          <NavItems />
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="hidden md:block w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-indigo-900">Slumberly</h1>
        </div>
        <NavItems />
      </nav>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;