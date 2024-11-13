import Image from 'next/image';

import type { ImageSource } from '@/lib/types';
import { cn } from '@/lib/utils';

type ResponsiveImageProps = {
  imageSource: ImageSource;
  className?: string;
  placeholder?: 'blur' | 'empty';
};

export function ResponsiveImage({
  className,
  imageSource,
  placeholder = 'blur',
}: ResponsiveImageProps) {
  return (
    <figure
      className={cn(
        'relative h-full w-full',
        imageSource.wrapperClassName,
        className,
      )}
    >
      <Image
        src={imageSource.src}
        alt={imageSource.alt}
        className={cn('object-cover', imageSource.className)}
        sizes={imageSource.sizes}
        quality={imageSource.quality}
        priority={imageSource.priority}
        placeholder={placeholder}
        blurDataURL={
          placeholder === 'blur' ? imageSource.src.blurDataURL : undefined
        }
        fill
      />
    </figure>
  );
}
