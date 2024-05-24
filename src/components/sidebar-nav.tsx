'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { Fragment, useRef } from 'react';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <nav
        className={cn(
          'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
          className,
        )}
        {...props}
      >
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            title={item.title}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              pathname === item.href
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-transparent hover:underline',
              'justify-start',
            )}
          ></NavLink>
        ))}
      </nav>
    </ScrollArea>
  );
}

export const NavLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithRef<'a'> & LinkProps
>(({ href, title, className, ...props }, ref) => {
  return (
    <Link
      href={href}
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'justify-start',
        className,
      )}
      {...props}
    >
      {title}
    </Link>
  );
});

NavLink.displayName = 'NavLink';
