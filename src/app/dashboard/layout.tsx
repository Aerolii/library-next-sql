import CommandMenu from '@/components/command-menu';
import Logo from '@/components/logo';
import { DashboardNav, DashboardSidebar } from '@/components/main-nav';
import { CommonHeader } from '@/components/site-header';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { UserAvatar } from '@/components/user-avatar';
import { ReactComponentChildrenType } from '@/types';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function DashboardLayout({
  children,
}: ReactComponentChildrenType) {
  return (
    <div className="grid h-screen overflow-hidden lg:grid-cols-[220px_1fr]">
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>
      <div>
        <div className="flex h-14 items-center  space-x-2 border-b border-border/60 px-3">
          <div className="rounded-full bg-accent p-2 text-accent-foreground lg:hidden">
            <HamburgerMenuIcon />
          </div>
          <CommonHeader />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
