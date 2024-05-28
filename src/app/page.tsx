import { BookCarousel } from '@/components/book-carousel';
import Image from 'next/image';

import { AspectRatio } from '@/components/ui/aspect-ratio';

import SiteHeader from '@/components/site-header';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { siteConfig } from '@/config/site';
import { fetchBooks } from '@/data/data';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';
import { BookCardSkeleton } from '@/components/skeletons';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="container space-y-4 px-8 pt-4">
        <BookCarousel />
        <div className="space-y-2">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'flex items-center space-x-1 px-0 text-accent-foreground',
              )}
            >
              <h4 className="text-lg  font-semibold tracking-tight">
                最新书籍
              </h4>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
            <Suspense fallback={<BookCardSkeleton />}>
              <BooksCard />
              <BooksCard />
              <BooksCard />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}

async function BooksCard() {
  const books = await fetchBooks();
  const book = books[0];
  return (
    <Card className="border-0 bg-transparent p-0 shadow-none">
      <CardContent className="grid h-full space-x-2 p-0 md:grid-cols-[40%_60%]">
        <div>
          <AspectRatio ratio={345 / 500}>
            <Image
              loading="lazy"
              fill
              className="rounded-md object-cover"
              src={book.img}
              alt="Image"
            />
          </AspectRatio>
        </div>
        <div className="hidden flex-1 space-y-6 py-4 md:block">
          <div>
            <p className="text-lg font-semibold">{book.title}</p>
            <p className="text-md text-muted-foreground">{book.subtitle}</p>
          </div>
          <div className="h-0 border-b border-border/60"></div>
          <div className="text-md line-clamp-6 text-sm leading-snug text-muted-foreground">
            {book.summary}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
