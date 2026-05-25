import { Link } from 'react-router-dom';

export function NavChevron() {
  return (
    <svg
      className="ml-0.5 h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:rotate-180 motion-reduce:transition-none"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function NavDropdownDesktop({ link, activeLink, language }) {
  const isActive = activeLink === link.key;
  const showShortInvest =
    language === 'FR' && link.key === 'investissement' && link.children;

  return (
    <div className="group relative shrink-0">
      <Link
        to={link.href}
        className={`nav-link-hover interactive relative flex cursor-pointer items-center gap-0.5 rounded-full px-3 py-2.5 text-sm font-bold leading-tight transition-all duration-300 xl:text-[15px] whitespace-nowrap motion-reduce:transition-none ${
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
        }`}
      >
        {showShortInvest ? (
          <>
            <span className="xl:hidden">Investir</span>
            <span className="hidden xl:inline">{link.name}</span>
          </>
        ) : (
          link.name
        )}
        {link.children && <NavChevron />}
      </Link>

      {link.children && (
        <>
          {/* Pont hover entre le lien et le panneau */}
          <div
            className="pointer-events-none absolute left-0 top-full z-40 h-3 w-full"
            aria-hidden="true"
          />
          <div
            className="invisible absolute left-0 top-full z-50 w-[min(420px,calc(100vw-2rem))] origin-top-left scale-95 rounded-[1.75rem] border border-outline-variant/40 bg-surface p-4 opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
            style={{ marginTop: '0.5rem' }}
          >
            <div className="grid gap-2">
              {link.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.href}
                  className="interactive cursor-pointer rounded-2xl p-4 transition-all duration-200 hover:translate-x-1 hover:bg-surface-container-low motion-reduce:transition-none motion-reduce:hover:translate-x-0"
                >
                  <p className="font-bold text-on-surface">{child.name}</p>
                  <p className="mt-1 text-sm text-on-surface-variant">{child.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function NavDropdownMobile({ link, onNavigate, expanded, onToggle }) {
  const hasChildren = Boolean(link.children?.length);

  if (!hasChildren) {
    return (
      <Link
        to={link.href}
        className="interactive block cursor-pointer rounded-lg px-4 py-3 font-bold text-on-surface transition-all duration-200 hover:bg-surface-container hover:text-primary"
        onClick={onNavigate}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-2 rounded-lg px-2">
        <Link
          to={link.href}
          className="interactive flex-1 cursor-pointer rounded-lg px-2 py-3 font-bold text-on-surface transition-all duration-200 hover:bg-surface-container hover:text-primary"
          onClick={onNavigate}
        >
          {link.name}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          className="interactive flex cursor-pointer items-center justify-center rounded-lg p-3 text-on-surface transition-all duration-200 hover:bg-surface-container hover:text-primary"
          aria-expanded={expanded}
          aria-label={`Sous-menu ${link.name}`}
        >
          <NavChevron />
        </button>
      </div>
      <div
        className={`ml-4 grid gap-1 overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
          expanded ? 'max-h-96 opacity-100 pb-2' : 'max-h-0 opacity-0'
        }`}
      >
        {link.children.map((child) => (
          <Link
            key={child.name}
            to={child.href}
            className="interactive block cursor-pointer rounded-lg px-4 py-2 text-sm text-on-surface-variant transition-all duration-200 hover:translate-x-1 hover:bg-surface-container-low hover:text-primary motion-reduce:transition-none motion-reduce:hover:translate-x-0"
            onClick={onNavigate}
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
