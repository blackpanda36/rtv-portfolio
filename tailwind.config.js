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
        ms: {
          blue: {
            DEFAULT: '#0067b8',
            hover: '#005da6',
            dark: '#00508f',
            light: '#ebf3fc',
            subtle: '#f0f6fd',
          },
          red: '#f25022',
          green: '#7fba00',
          yellow: '#ffb900',
          cyan: '#00a4ef',
          dark: '#242424',
          heading: '#1b1b1b',
          muted: '#616161',
          border: '#e6e6e6',
          borderLight: '#f0f0f0',
          surface: '#f2f2f2',
          surfaceSubtle: '#f5f5f5',
        },
        rtv: {
          orange: {
            DEFAULT: '#FD5C08',
            hover: '#E44F00',
            dark: '#CA4400',
            light: '#FFF3EC',
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#FD5C08',
            600: '#E44F00',
            700: '#CA4400',
            800: '#9A3412',
            900: '#7C2D12',
          },
          charcoal: {
            DEFAULT: '#13191E',
            heading: '#13191E',
            surface: '#1A222B',
            border: '#2C3642',
            muted: '#5A6573',
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
        sans: ['"Segoe UI"', 'SegoeUI', '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        segoe: ['"Segoe UI"', 'SegoeUI', 'sans-serif'],
        heading: ['"Segoe UI"', 'SegoeUI', '-apple-system', 'sans-serif'],
        mono: ['Consolas', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        'fluent': '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)',
        'fluent-hover': '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)',
        'fluent-depth': '0 12px 24px -4px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)',
        'brand': '0 8px 30px rgba(0, 103, 184, 0.2)',
        'brand-lg': '0 12px 40px rgba(0, 103, 184, 0.35)',
        'tech-card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'tech-glow': '0 0 25px rgba(0, 103, 184, 0.15)',
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
