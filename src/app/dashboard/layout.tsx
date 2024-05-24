import MainNav from '@/components/main-nav';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function DashboardLayout() {
  return (
    <div className="grid grid-rows-[56px_1ft] lg:grid-cols-[220px_1fr]">
      <MainNav />
      <main>main</main>
    </div>
  );
}
