'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Ticket,
  CalendarClock,
  BookOpen,
  User,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from '../themeToggle'

// Soxta autentifikatsiya holati
const isAuthenticated = true;

const navItems = [
  {
    name: 'Boshqaruv Paneli',
    href: '/',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: 'Mening Buyurtlarim',
    href: '/tickets',
    icon: <Ticket className="h-5 w-5" />,
  },
  {
    name: 'Ta’mirlashni Rejalashtirish',
    href: '/schedule',
    icon: <CalendarClock className="h-5 w-5" />,
  },
  {
    name: 'Ma’lumot Bazasi',
    href: '/knowledge',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: 'Profil',
    href: '/profile',
    icon: <User className="h-5 w-5" />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menyuni ochish/yopish</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="grid gap-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary',
                      pathname === item.href && 'text-primary font-medium bg-muted'
                    )}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Button variant="ghost" className="justify-start px-3">
                  <LogOut className="mr-2 h-5 w-5" />
                  <span>Chiqish</span>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Dern-Support</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors',
                pathname === item.href && 'text-primary'
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profil</span>
              </Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Kirish</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Ro‘yxatdan o‘tish</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}