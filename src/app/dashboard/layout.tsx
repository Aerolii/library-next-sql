import CommandMenu from '@/components/command-menu';
import Logo from '@/components/logo';
import { DashboardNav } from '@/components/main-nav';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { UserAvatar } from '@/components/user-avatar';
import { ReactComponentChildrenType } from '@/types';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function DashboardLayout({
  children,
}: ReactComponentChildrenType) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[220px_1fr]">
      <div className="hidden border-r border-border/60 lg:block">
        <div className="flex h-14 items-center border-b border-border/60 px-2">
          <Logo />
        </div>
        <DashboardNav className="px-3 py-2" />
      </div>
      <div>
        <div className="flex h-14 items-center  space-x-2 border-b border-border/60 px-3">
          <div className="rounded-full bg-accent p-2 text-accent-foreground md:hidden">
            <HamburgerMenuIcon />
          </div>
          <div className="flex flex-1 items-center space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <ThemeSwitcher />
            <UserAvatar />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
