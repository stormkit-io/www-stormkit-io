/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },

      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '3/10': '30%',
        full: '100%',
      },

      colors: {
        white: '#ffffff',
        black: '#000000',
        link: '#0c75e4',

        transparent: {
          DEFAULT: 'transparent',
          80: 'rgba(0, 0, 0, 0.8)',
          50: 'rgba(0, 0, 0, 0.5)',
          30: 'rgba(0, 0, 0, 0.3)',
        },

        'transparent-white': {
          80: 'rgba(255, 255, 255, 0.8)',
          50: 'rgba(255, 255, 255, 0.5)',
          30: 'rgba(255, 255, 255, 0.3)',
        },

        gray: {
          100: '#ffffff',
          90: '#f9f9f9',
          80: '#f2f2f2',
          70: '#c2c2c2',
          40: '#4a4a4a',
          30: '#232323',
        },

        green: {
          70: '#2fa765',
          50: '#2fa765',
        },

        yellow: {
          90: '#fff5bf',
          70: '#f9e67f',
          50: '#f5d213',
        },

        red: {
          50: '#ff0000',
        },

        pink: {
          50: '#f6005c',
        },

        blue: {
          90: '#e2f2ff',
          70: '#0c75e4',
          50: '#0f092b',
        },
      },

      fontWeight: {
        light: 100,
        normal: 400,
        bold: 700,
      },
    },
  },
  variants: {},
  plugins: [],

  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './assets/**/*.css',
    './plugins/**/*.js',
    './nuxt.config.js',
  ],
}
