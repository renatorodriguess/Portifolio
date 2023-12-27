import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first-image': "url('assets/Instasany.png')" ,
        'second-image': "url('assets/realestate.jpg')",
        'third-image': "url('assets/DevBooks.png')",
      }
    },
  },
  plugins: [],
}
export default config
