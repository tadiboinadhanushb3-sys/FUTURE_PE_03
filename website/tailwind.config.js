/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        surface: {
          900: '#080c10',
          800: '#0f1419',
          700: '#161d26',
          600: '#1e2836',
        },
        accent: {
          emerald: '#10b981',
          teal: '#14b8a6',
          sky: '#38bdf8',
        },
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.3), transparent), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(56, 189, 248, 0.12), transparent)',
      },
    },
  },
  plugins: [],
}
