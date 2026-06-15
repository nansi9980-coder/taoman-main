import { PhotoHeroBackground } from './PhotoHeroBackground';
import { FloatingDecor } from './FloatingDecor';
import { TextReveal } from './TextReveal';

/**
 * Hero secondaire unifié : photo + décor + titre animé.
 */
export const PageHeroEnhanced = ({
  photoProps,
  eyebrow,
  title,
  description,
  children,
  align = 'left',
  className = '',
  contentClassName = '',
}) => {
  const isCenter = align === 'center';

  return (
    <section
      className={`relative overflow-hidden min-h-[42vh] md:min-h-[48vh] flex items-center py-20 px-6 text-white ${className}`.trim()}
    >
      <PhotoHeroBackground {...photoProps} />
      <FloatingDecor className="z-[2]" />

      <div
        className={`relative z-10 max-w-[1400px] mx-auto w-full [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] ${
          isCenter ? 'text-center' : ''
        } ${contentClassName}`.trim()}
      >
        {eyebrow && (
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{eyebrow}</p>
        )}
        {title && (
          <h1 className="mb-6 text-4xl md:text-6xl font-black tracking-[-0.04em]">
            <TextReveal
              elementType="span"
              immediate
              center={isCenter}
              className="block bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent"
              text={title}
            />
          </h1>
        )}
        {description && (
          <p className={`text-lg md:text-xl text-white/90 mb-8 leading-relaxed ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
