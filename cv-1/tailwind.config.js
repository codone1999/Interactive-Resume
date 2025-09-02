export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#121212',
          secondary: '#1E1E1E',
          tertiary: '#2A2A2A'
        },
        teal: {
          400: '#4DD0E1',
          500: '#00BFA6',
          600: '#00A693'
        },
        orange: {
          400: '#FF8A65',
          500: '#FF6F61',
          600: '#E64A19'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(0, 191, 166, 0.5)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(0, 191, 166, 0.8)'
          }
        }
      }
    }
  }
}