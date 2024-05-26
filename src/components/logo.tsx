import Link from 'next/link';
import { Icons } from './icons';

export default function Logo() {
  return (
    <Link href="/" className="flex space-x-2 px-3 py-2">
      <Icons.logo className="h-6 w-6" />
      <span className="font-bold">Library</span>
    </Link>
  );
}
