/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rtv: {
          orange: {
            DEFAULT: '#EE6E00',
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#EE6E00',
            600: '#D95C00',
            700: '#C85A00',
            800: '#9A3412',
            900: '#7C2D12',
          },
          navy: {
            950: '#070B13',
            900: '#0C1220',
            850: '#111A2E',
            800: '#16233B',
            750: '#1D2E4D',
            700: '#253960',
            600: '#344E82',
            500: '#4A6FA5',
          },
          tech: {
            blue: '#3B82F6',
            cyan: '#06B6D4',
            emerald: '#10B981',
            amber: '#F59E0B'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'brand': '0 8px 30px rgba(238, 110, 0, 0.2)',
        'brand-lg': '0 12px 40px rgba(238, 110, 0, 0.35)',
        'tech-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'tech-glow': '0 0 25px rgba(238, 110, 0, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
