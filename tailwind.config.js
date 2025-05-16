import { colors, spacing, borderRadius, boxShadow } from './src/styles/tailwind-colors.js'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius,
      boxShadow,
    },
  },
  plugins: [],
}

export default config
