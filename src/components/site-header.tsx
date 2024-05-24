import { siteNavItems } from '@/config/nav';
import CommandMenu from './command-menu';
import { NavLink, SidebarNav } from './sidebar-nav';
import { ThemeSwitcher } from './theme-switcher';
import { UserAvatar } from './user-avatar';

export default function SiteHeader() {
  return (
    <header className="w-ful sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {siteNavItems.map(({ href, title }) => (
          <NavLink key={href} href={href} title={title} />
        ))}
        <div className="flex flex-1 items-center space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <ThemeSwitcher />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
