'use client';

import { NavLink } from '@/components/sidebar-nav';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <NavLink href={`${pathname}/1`} title="To 1" />
      <main>publishing</main>
    </>
  );
}
