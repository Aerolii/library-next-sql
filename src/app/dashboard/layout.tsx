import { DashboardSidebar } from '@/components/main-nav';
import MobileNav from '@/components/mobile-nav';
import { CommonHeader } from '@/components/site-header';
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
        <div className="flex h-14 items-center space-x-2 border-b border-border/60 px-3">
          <MobileNav />
          <CommonHeader />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
