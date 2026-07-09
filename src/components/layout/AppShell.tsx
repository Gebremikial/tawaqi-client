import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/feed', label: 'Feed' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/connections', label: 'Connections' },
  { to: '/search', label: 'Search' },
  { to: '/messages', label: 'Messages' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/profile', label: 'Profile' },
]

export const AppShell = () => {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <h2>TAWAQI</h2>
          <p className="subtle">Media networking platform</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/feed'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/register">Get started</NavLink>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
