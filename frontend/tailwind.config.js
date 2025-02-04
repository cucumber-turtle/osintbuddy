/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Hind', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1C1C1B',
          50: '#90908C',
          100: '#84847F',
          200: '#6A6A66',
          300: '#50504D',
          400: '#363634',
          500: '#1C1C1B',
          600: '#151514',
          700: '#10100F',
          800: '#0A0A0A',
          900: '#080808',
        },

        light: {
          DEFAULT: '#EEEEEE',
          50: '#FCFCFC',
          100: '#FAFAFA',
          200: '#F7F7F7',
          300: '#F3F3F3',
          400: '#F1F1F1',
          500: '#EEEEEE',
          600: '#E4E4E4',
          700: '#DADADA',
          800: '#CFCFCF',
          900: '#C5C5C5',
        },
        gray: {
          DEFAULT: '#393D3F',
          50: '#878E92',
          100: '#7D858A',
          200: '#6C7377',
          300: '#5B6164',
          400: '#4A4F52',
          500: '#393D3F',
          600: '#323537',
          700: '#2A2D2F',
          800: '#232627',
          900: '#181A1B',
        },
        info: {
          DEFAULT: '#0E374D',
          50: '#38A2DB',
          100: '#279AD7',
          200: '#2181B5',
          300: '#1B6892',
          400: '#145070',
          500: '#0E374D',
          600: '#0C2E40',
          700: '#092533',
          800: '#071B26',
          900: '#051219',
        },

        yellow: {
          DEFAULT: '#CCCC2D',
          50: '#F9F9E5',
          100: '#F5F5D0',
          200: '#EBEBA7',
          300: '#E2E27D',
          400: '#D9D953',
          500: '#CCCC2D',
          600: '#A2A224',
          700: '#78781B',
          800: '#4F4F11',
          900: '#252508',
        },
        primary: {
          DEFAULT: '#42A951',
          50: '#7BCB87',
          100: '#74C980',
          200: '#65C373',
          300: '#56BD66',
          400: '#48B758',
          500: '#42A951',
          600: '#3B9649',
          700: '#348440',
          800: '#2C7237',
          900: '#255F2E',
        },
        navy: {
          DEFAULT: '#1E373E',
          50: '#61A1B3',
          100: '#5399AC',
          200: '#468090',
          300: '#396875',
          400: '#2B4F59',
          500: '#1E373E',
          600: '#1B3137',
          700: '#172B30',
          800: '#142529',
          900: '#111F23',
        },
        persian: {
          DEFAULT: '#1D1DB8',
          50: '#C5C5F6',
          100: '#AFAFF2',
          200: '#8383EB',
          300: '#5757E4',
          400: '#2A2ADE',
          500: '#1D1DB8',
          600: '#16168C',
          700: '#0F0F60',
          800: '#080834',
          900: '#010108',
        },
        pink: {
          DEFAULT: '#BF288D',
          50: '#F6D6EC',
          100: '#F2C1E2',
          200: '#E997CE',
          300: '#E06DBA',
          400: '#D842A6',
          500: '#BF288D',
          600: '#951F6E',
          700: '#6B164F',
          800: '#400E30',
          900: '#160510',
        },
        alert: {
          DEFAULT: '#FFBF00',
          50: '#FFF9E5',
          100: '#FFF2CC',
          200: '#FFE599',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#FFBF00',
          600: '#CC9900',
          700: '#997300',
          800: '#664C00',
          900: '#332600',
        },
        danger: {
          DEFAULT: '#C1292E',
          50: '#F7D9DA',
          100: '#F2C4C5',
          200: '#E99A9C',
          300: '#E16F73',
          400: '#D8454A',
          500: '#C1292E',
          600: '#972024',
          700: '#6D171A',
          800: '#430E10',
          900: '#190506',
        },
        warning: {
          DEFAULT: '#C16200',
          50: '#FFD4A8',
          100: '#FFC78E',
          200: '#FFAE5B',
          300: '#FF9528',
          400: '#F47C00',
          500: '#C16200',
          600: '#8E4800',
          700: '#5B2E00',
          800: '#422200',
          900: '#2E1700',
        },
        grape: {
          DEFAULT: '#642CA9',
          50: '#C3A5E8',
          100: '#B895E3',
          200: '#A274DB',
          300: '#8D54D3',
          400: '#7734C9',
          500: '#642CA9',
          600: '#512489',
          700: '#3E1B68',
          800: '#2B1348',
          900: '#170A28',
        },
        aquamarine: {
          DEFAULT: '#A1FCDF',
          50: '#FAFFFD',
          100: '#F0FFFA',
          200: '#DCFEF3',
          300: '#C9FDEC',
          400: '#B5FDE6',
          500: '#A1FCDF',
          600: '#61FAC9',
          700: '#21F8B3',
          800: '#07CF8F',
          900: '#058F63',
        },
        cerise: {
          DEFAULT: '#DB324D',
          50: '#F6CED5',
          100: '#F3BDC6',
          200: '#ED9AA7',
          300: '#E77789',
          400: '#E1556B',
          500: '#DB324D',
          600: '#B52038',
          700: '#851729',
          800: '#560F1A',
          900: '#26070C',
        },
      },
    },
  },
  plugins: [],
};
