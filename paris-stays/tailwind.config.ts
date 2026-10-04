const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#111315',
        graphite: '#1a1d1f',
        ivory: '#f3eee7',
        burgundy: '#6d2d2b',
        sand: '#d7b58d',
        mist: '#7b857d',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
