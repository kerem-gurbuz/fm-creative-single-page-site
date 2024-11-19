import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-obsidian px-4 text-white">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <h1 className="text-[80px] font-extrabold leading-tight tracking-tighter">
          404
        </h1>
        <h2 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Page not found
        </h2>
        <p className="text-lg text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We couldn&apos;t find the page you were looking for. It might have
          been removed, renamed, or doesn&apos;t exist.
        </p>
        <div className="flex justify-center">
          <Button
            className="inline-flex h-[64px] w-[199px] items-center justify-center gap-4 bg-coral-red text-[16px] font-extrabold leading-[20px] text-white hover:bg-coral-blush"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
