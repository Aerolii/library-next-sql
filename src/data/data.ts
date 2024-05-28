'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchBooks = async () => {
  noStore();
  try {
    const books = await sql`
      SELECT * FROM books b LEFT JOIN publishing_books pb ON b.book_id = pb.book_id
    `;
    await awaitFn();

    return books.rows;
  } catch (error) {
    console.error(`Error: Database Error: ${error}`);
    throw error;
  }
};

const awaitFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('await 3 seconds...');
      resolve(true);
    }, 3000);
  });
};
