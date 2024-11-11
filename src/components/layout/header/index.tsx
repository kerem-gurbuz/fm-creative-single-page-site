import Image from 'next/image';
import Link from 'next/link';

import { MobileMenu } from './mobile-menu';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header id="header" className="relative py-[40px] md:py-[57px]">
      {/* Background Color */}
      <div className="absolute inset-y-0 left-[calc(50%-54px)] right-0 -z-10 hidden bg-coral-red md:block lg:left-[calc(50%+15px)]" />
      {/* Header Content  */}
      <div className="container max-w-[1110px] px-6 md:px-[39.5px] xl:px-0">
        <div className="flex h-[30px] items-center justify-between md:h-[64px]">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Creative Agency Logo"
              width={161}
              height={30}
              priority
            />
          </Link>
          {/* Mobile Navigation */}
          <MobileMenu className="w-[252px] md:hidden" />
          {/* Desktop Navigation */}
          <Navigation className="hidden md:block" />
        </div>
      </div>
    </header>
  );
}
