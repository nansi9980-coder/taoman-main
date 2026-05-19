/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary, #003d9b)",
        "on-primary": "var(--color-on-primary, #ffffff)",
        "primary-container": "var(--color-primary-container, #0052cc)",
        "on-primary-container": "var(--color-on-primary-container, #c4d2ff)",
        "primary-fixed": "var(--color-primary-fixed, #dae2ff)",
        "on-primary-fixed": "var(--color-on-primary-fixed, #001848)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim, #b2c5ff)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant, #0040a2)",
        "inverse-primary": "var(--color-inverse-primary, #b2c5ff)",

        "secondary": "var(--color-secondary, #43617b)",
        "on-secondary": "var(--color-on-secondary, #ffffff)",
        "secondary-container": "var(--color-secondary-container, #c1e0ff)",
        "on-secondary-container": "var(--color-on-secondary-container, #46647e)",
        "secondary-fixed": "var(--color-secondary-fixed, #cce5ff)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed, #001e31)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim, #abcae8)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant, #2b4a62)",

        "tertiary": "var(--color-tertiary, #7b2600)",
        "on-tertiary": "var(--color-on-tertiary, #ffffff)",
        "tertiary-container": "var(--color-tertiary-container, #a33500)",
        "on-tertiary-container": "var(--color-on-tertiary-container, #ffc6b2)",
        "tertiary-fixed": "var(--color-tertiary-fixed, #ffdbcf)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed, #380d00)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim, #ffb59b)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant, #812800)",

        "error": "var(--color-error, #ba1a1a)",
        "on-error": "var(--color-on-error, #ffffff)",
        "error-container": "var(--color-error-container, #ffdad6)",
        "on-error-container": "var(--color-on-error-container, #93000a)",

        "surface": "var(--color-surface, #faf8ff)",
        "on-surface": "var(--color-on-surface, #191b23)",
        "surface-variant": "var(--color-surface-variant, #e1e2ec)",
        "on-surface-variant": "var(--color-on-surface-variant, #434654)",
        "inverse-surface": "var(--color-inverse-surface, #2e3038)",
        "inverse-on-surface": "var(--color-inverse-on-surface, #f0f0fb)",
        "background": "var(--color-background, #faf8ff)",
        "on-background": "var(--color-on-background, #191b23)",
        "outline": "var(--color-outline, #737685)",
        "outline-variant": "var(--color-outline-variant, #c3c6d6)",
        
        "surface-bright": "var(--color-surface-bright, #faf8ff)",
        "surface-dim": "var(--color-surface-dim, #d9d9e4)",
        "surface-tint": "var(--color-surface-tint, #0c56d0)",
        "surface-container": "var(--color-surface-container, #ededf8)",
        "surface-container-low": "var(--color-surface-container-low, #f3f3fd)",
        "surface-container-lowest": "var(--color-surface-container-lowest, #ffffff)",
        "surface-container-high": "var(--color-surface-container-high, #e7e7f2)",
        "surface-container-highest": "var(--color-surface-container-highest, #e1e2ec)",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "xxl": "64px",
        "xs": "4px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "sm": "8px"
      },
      fontFamily: {
        "display": ["Inter"],
        "body-sm": ["Inter"],
        "headline-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-md": ["Inter"],
        "label-sm": ["Inter"]
      },
      fontSize: {
        "display": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }]
      }
    },
  },
  plugins: [],
}