'use client';

import { dashboardNav } from '@/config/nav';
import { NavLink } from './sidebar-nav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { useScrollIntoViewWithRef } from '@/hooks/useScrollIntoViewWithRef';
import { FC } from 'react';

export function MainNav() {
  return <div>sidebar</div>;
}

export function DashboardNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const { scrollIntoView, setMap } = useScrollIntoViewWithRef();
  return (
    <nav className={cn('flex flex-col space-y-2', className)}>
      {dashboardNav.items.map(({ href, title }) => (
        <NavLink
          key={href}
          href={href}
          title={title}
          active={
            href === dashboardNav.base
              ? pathname === href
              : pathname.startsWith(href)
          }
          ref={(node: HTMLAnchorElement) => setMap(href, node)}
          onClick={() => scrollIntoView(href)}
          className="py-10"
        />
      ))}
    </nav>
  );
}

export const DashboardSidebar: FC = () => {
  return (
    <div className="lg:flex-block flex h-screen flex-col border-r border-border/60">
      <div className="flex h-14 items-center border-b border-border/60 px-3">
        <Logo />
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full whitespace-nowrap">
          <DashboardNav className="px-3 py-2" />
          <ScrollBar />
        </ScrollArea>
      </div>
    </div>
  );
};
