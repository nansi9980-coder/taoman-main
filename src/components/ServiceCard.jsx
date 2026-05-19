import { useState } from 'react';

export const ServiceCard = ({ 
  image, 
  icon, 
  title, 
  description, 
  price,
  features = [],
  onRequestQuote,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group h-full animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-outline-variant/20 hover:border-primary/50">
        
        {/* Image Container with Overlay */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-primary-container/10">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-container to-primary/30">
              {icon && <div className="text-6xl mb-3 opacity-30">{icon}</div>}
              <p className="text-on-surface text-sm font-bold text-center px-4 opacity-70">
                {title}
              </p>
            </div>
          )}
          
          {/* Overlay on Hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm animate-fade-in">
              <button
                onClick={onRequestQuote}
                className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                Devis Gratuit
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Icon & Title */}
          <div className="flex items-start gap-4 mb-4">
            {icon && (
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                {icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              {price && (
                <p className="text-primary font-bold text-lg">À partir de {price}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4">
            {description}
          </p>

          {/* Features List */}
          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Button */}
          <button
            onClick={onRequestQuote}
            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Demander un Devis
          </button>
        </div>

        {/* Rating (Optional) */}
        <div className="px-6 sm:px-8 pb-4 sm:pb-6 flex items-center gap-1 text-sm text-on-surface-variant">
          <span className="text-yellow-400">★★★★★</span>
          <span>(4.8/5)</span>
        </div>
      </div>
    </div>
  );
};