import { FC, ReactNode } from 'react';

export const CommonLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="container flex flex-col items-center pt-14">
      {children}
    </main>
  );
};
