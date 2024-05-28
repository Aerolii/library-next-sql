import Link from 'next/link';
import { Icons } from './icons';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex space-x-2 px-3 py-2 pl-0', className)}>
      <Icons.logo className="h-6 w-6" />
      <span className="font-bold">Library</span>
    </Link>
  );
}
