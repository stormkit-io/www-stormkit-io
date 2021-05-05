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
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      link: '#0c75e4',
      'transparent-80': 'rgba(0, 0, 0, 0.8)',
      'transparent-50': 'rgba(0, 0, 0, 0.5)',
      'transparent-30': 'rgba(0, 0, 0, 0.3)',
      'transparent-white-80': 'rgba(255, 255, 255, 0.8)',
      'transparent-white-50': 'rgba(255, 255, 255, 0.5)',
      'transparent-white-30': 'rgba(255, 255, 255, 0.3)',
      'gray-100': '#ffffff',
      'gray-90': '#f9f9f9',
      'gray-80': '#f2f2f2',
      'gray-70': '#c2c2c2',
      'gray-40': '#4a4a4a',
      'gray-30': '#232323',
      'green-70': '#2fa765',
      'green-50': '#2fa765',
      'yellow-90': '#fff5bf',
      'yellow-70': '#f9e67f',
      'yellow-50': '#f5d213',
      'red-50': '#ff0000',
      'pink-50': '#f6005c',
      'blue-90': '#e2f2ff',
      'blue-70': '#0c75e4',
      'blue-50': '#0f092b',
    },
    fontWeight: {
      light: 100,
      normal: 400,
      bold: 700,
    },
  },
  variants: {},
  plugins: [],
}
