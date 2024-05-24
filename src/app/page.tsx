import SiteHeader from '@/components/site-header';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/config/site';
import { Metadata, Viewport } from 'next';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="container"></main>
    </>
  );
}
