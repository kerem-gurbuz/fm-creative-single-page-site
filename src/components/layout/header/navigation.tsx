import Link from 'next/link';

import { NAV_LINKS } from '@/config/navigation';
import { cn } from '@/lib/utils';

type NavigationProps = {
  className?: string;
};

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={cn('text-white', className)}>
      <ul className="flex items-center">
        {NAV_LINKS.map(({ path, label, variant }, index) => (
          <li
            key={path}
            className={cn(
              index > 0 && variant === 'link' && 'ml-[20px] lg:ml-[32px]',
              index > 0 && variant === 'button' && 'ml-[28px] lg:ml-[49px]',
            )}
          >
            <Link
              href="#" // > href={path}
              className={cn(
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                variant === 'link' &&
                  'text-[15px] leading-[32px] lg:text-[16px]',
                variant === 'button' &&
                  'hover:bg-stormy-gray flex h-[64px] w-[147px] items-center justify-center bg-obsidian text-[16px] font-extrabold leading-[20px] transition-all duration-300 xl:w-[199px]',
              )}
            >
              {variant === 'link' && (
                <span className="group relative inline-block">
                  {/* Normal weight text, fades out on hover */}
                  <span
                    className="pointer-events-none inline-block font-normal opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                    aria-hidden="true"
                  >
                    {label}
                  </span>
                  {/* Bold text, fades in on hover */}
                  <span
                    className="pointer-events-none absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    {label}
                  </span>
                  {/* Accessible label */}
                  <span className="sr-only">{label}</span>
                </span>
              )}
              {variant === 'button' && label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
