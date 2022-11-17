import { Options } from "$fresh/plugins/twind.ts";


export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '600': '600px',
        '130xl': '130%'
      },
      left: {
        'm15p': "-50px"
      },
      height:{
        '155xl': "155%"
      },
      minWidth: {
        '800': '800px'
      }
    }
  }
} as Options;
