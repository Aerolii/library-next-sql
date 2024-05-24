'use client';

import { dashboardNav } from '@/config/nav';
import { NavLink } from './sidebar-nav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainNav() {
  return <div>sidebar</div>;
}

export function DashboardNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav className={cn('flex flex-col space-y-2', className)}>
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
