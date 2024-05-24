import Logo from '@/components/logo';
import { DashboardNav } from '@/components/main-nav';
import { ReactComponentChildrenType } from '@/types';

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
      <div>{children}</div>
    </div>
  );
}
