'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import { NavLinkProps, ReactFCProps } from '@/types';
import { useScrollIntoViewWithRef } from '@/hooks/useScrollIntoViewWithRef';

export function SidebarNav({
  className,
  items,
}: ReactFCProps<{ items: NavLinkProps[] }>) {
  const pathname = usePathname();
  const { scrollIntoView, setMap } = useScrollIntoViewWithRef();
  return (
    <ScrollArea className={cn('w-full whitespace-nowrap', className)}>
      <nav className={'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1'}>
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            title={item.title}
            ref={(node: HTMLAnchorElement) => setMap(item.href, node)}
            onClick={() => scrollIntoView(item.href)}
            active={pathname === item.href}
          />
        ))}
      </nav>
    </ScrollArea>
  );
}

export const NavLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithRef<'a'> & LinkProps & NavLinkProps
>(({ href, title, className, active, ...props }, ref) => {
  return (
    <Link
      href={href}
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        active
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-transparent hover:underline',
        'justify-start ',
        className,
      )}
      {...props}
    >
      {title}
    </Link>
  );
});

NavLink.displayName = 'NavLink';
