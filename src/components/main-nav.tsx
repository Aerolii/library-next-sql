'use client';

import { dashboardNav } from '@/config/nav';
import { NavLink, SidebarNav } from './sidebar-nav';
import { usePathname } from 'next/navigation';

export function MainNav() {
  return <div>sidebar</div>;
}

export function DashboardNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col">
      {dashboardNav.items.map(({ href, title }) => (
        <NavLink
          active={
            href === dashboardNav.base
              ? pathname === href
              : pathname.startsWith(href)
          }
          key={href}
          href={href}
          title={title}
        />
      ))}
    </nav>
  );
}
