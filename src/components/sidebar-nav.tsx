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
          'flex w-max space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
          className,
        )}
        {...props}
      >
        {items.map((item) => (
          <Fragment key={item.href}>
            <NavLink
              title={item.title}
              href={item.href}
              className={cn(
                pathname === item.href
                  ? 'bg-primary text-primary-foreground hover:bg-primary'
                  : 'hover:bg-transparent hover:underline',
              )}
            />
          </Fragment>
        ))}
      </nav>
    </ScrollArea>
  );
}

export const NavLink: React.FC<
  LinkProps & { title: string } & React.ComponentProps<'a'>
> = ({ href, title, className, ...props }) => {
  const currentRef = useRef<React.ComponentRef<'a'>>(null);
  const handleClick = () => {
    currentRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'justify-start',
        className,
      )}
      ref={currentRef}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

NavLink.displayName = 'NavLink';
