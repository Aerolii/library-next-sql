import SiteHeader from '@/components/site-header';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <Input />
      </main>
    </>
  );
}
