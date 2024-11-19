'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAV_LINKS } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { CrossIcon } from './cross-icon';
import { HamburgerIcon } from './hamburger-icon';

const WINDOW_SIZE_DEBOUNCE_DELAY = 100;
const MD_BREAKPOINT = 768;

type MobileMenuProps = {
  className?: string;
};

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize({
    initializeWithValue: false,
    debounceDelay: WINDOW_SIZE_DEBOUNCE_DELAY,
  });

  useEffect(() => {
    if (width >= MD_BREAKPOINT) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="md:hidden">
        {isOpen ? <CrossIcon /> : <HamburgerIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={45}
        align="end"
        className={cn(
          'z-50 flex flex-col gap-6 overflow-hidden bg-obsidian px-[26.5px] pb-[28px] pt-[32px] text-center text-white',
          className,
        )}
      >
        <DropdownMenuLabel className="sr-only">Mobile Menu</DropdownMenuLabel>
        {NAV_LINKS.map(({ path, label, variant }) => (
          <Link key={path} href="#">
            <DropdownMenuItem
              className={cn(
                'cursor-pointer transition-all duration-300 focus:bg-accent focus:text-accent-foreground',
                variant === 'link' &&
                  'text-[18px] font-normal leading-[32px] focus:font-bold',
                variant === 'button' &&
                  'flex h-[64px] w-full items-center justify-center bg-coral-red text-[16px] font-extrabold leading-[20px]',
              )}
            >
              {label}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
