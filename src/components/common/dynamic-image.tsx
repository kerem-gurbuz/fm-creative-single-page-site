import type { ImageSourceMap } from '@/lib/types';
import { ResponsiveImage } from './responsive-image';

type DynamicImageProps = {
  imageConfig: Partial<ImageSourceMap>;
  className?: string;
  placeholder?: 'blur' | 'empty';
};

export function DynamicImage({
  className,
  imageConfig,
  placeholder = 'blur',
}: DynamicImageProps) {
  if (Object.keys(imageConfig).length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {Object.values(imageConfig).map((imageSource, index) => (
        <ResponsiveImage
          key={index}
          imageSource={imageSource}
          placeholder={placeholder}
        />
      ))}
    </div>
  );
}
