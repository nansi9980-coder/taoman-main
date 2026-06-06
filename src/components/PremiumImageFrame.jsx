/**
 * Wrapper d'image cinématique :
 * - Color grading CSS (cine-image)
 * - Vignette + dégradé bas
 * - Halo bordure premium au hover
 * - Shine sweep au hover
 *
 * Le contenu enfant (badge, titre, méta) est positionné absolu et visible
 * par défaut. Utilisez les classes `absolute` Tailwind à l'intérieur si besoin.
 */
export const PremiumImageFrame = ({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  rounded = 'rounded-3xl',
  tone = 'cool', // 'cool' | 'warm' | 'neutral'
  loading = 'lazy',
  eager = false,
  priority = false,
  className = '',
  imageClassName = '',
  children,
  href,
  onClick,
}) => {
  const toneClass =
    tone === 'warm' ? 'cine-image-warm' : tone === 'neutral' ? 'cine-image' : 'cine-image-cool';

  const Wrapper = href ? 'a' : onClick ? 'button' : 'div';
  const wrapperProps = href
    ? { href }
    : onClick
    ? { type: 'button', onClick }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative isolate block overflow-hidden ${ratio} ${rounded} premium-halo premium-shine cine-vignette interactive interactive-lift hover-glow motion-reduce:hover:translate-y-0 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : loading}
        decoding="async"
        fetchpriority={priority ? 'high' : undefined}
        className={`absolute inset-0 h-full w-full object-cover ${toneClass} transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${imageClassName}`}
      />
      {children && <div className="absolute inset-0 z-10 pointer-events-none">{children}</div>}
    </Wrapper>
  );
};
