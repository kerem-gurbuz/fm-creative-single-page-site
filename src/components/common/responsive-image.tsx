import Image from 'next/image';

import type { ImageSource } from '@/lib/types';
import { cn } from '@/lib/utils';

type ResponsiveImageProps = {
  imageSource: ImageSource;
  placeholder?: 'blur' | 'empty';
};

export function ResponsiveImage({
  imageSource,
  placeholder = 'blur',
}: ResponsiveImageProps) {
  return (
    <figure
      className={cn('relative h-full w-full', imageSource.wrapperClassName)}
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
