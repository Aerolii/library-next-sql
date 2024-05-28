'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Logo from './logo';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { DashboardNav, DashboardSidebar } from './main-nav';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="inline-flex w-5 items-center px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-2">
        <div className="flex h-full flex-col">
          <div className="h-14">
            <Logo />
          </div>
          <div className="mt-2 flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <DashboardNav
                className="pr-2"
                onClickCallback={() => setOpen(false)}
              />
              <ScrollBar />
            </ScrollArea>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const { push } = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
