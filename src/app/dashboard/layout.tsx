import { DashboardNav } from '@/components/main-nav';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ReactComponentChildrenType } from '@/types';

export default function DashboardLayout({
  children,
}: ReactComponentChildrenType) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[220px_1fr]">
      <div>
        <DashboardNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
