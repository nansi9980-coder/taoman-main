/**
 * Carte avec bordure dégradée animée et effet halo au survol.
 */
export const PremiumGlowCard = ({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}) => (
  <Tag className={`premium-glow-card hover-card-premium interactive hover-glow ${className}`.trim()} {...rest}>
    <div className="premium-glow-card__inner">{children}</div>
  </Tag>
);
