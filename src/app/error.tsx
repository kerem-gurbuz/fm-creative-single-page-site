'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';

// TODO: Log the error to an error reporting service (such as Sentry)

/*
  Note: Error boundary reset doesn't seem to work
        https://github.com/vercel/next.js/issues/63369
  ------------------------------------------------------------------------
  "You need to call the startTransition() function to re-render both client-side and server-side components in a synchronized manner."
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleReset = () => {
    startTransition(() => {
      // Attempt to recover by trying to re-render the segment
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-obsidian px-4 text-white">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Something went wrong
        </h1>
        <p className="text-lg text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We apologize for the inconvenience. Please try again or contact our
          support team if the problem persists.{' '}
          {error.digest ? `(${error.digest})` : null}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleReset}
            className="inline-flex h-[64px] w-[199px] items-center justify-center gap-4 bg-coral-red text-[16px] font-extrabold leading-[20px] text-white hover:bg-coral-blush"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
