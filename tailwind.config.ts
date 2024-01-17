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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
primary: "#001aff",
        
secondary: "#0000ff",
        
accent: "#009aff",
        
neutral: "#051210",
        
"base-100": "#fcfcfc",
        
info: "#0096ff",
        
success: "#00994f",
        
warning: "#ffb521",
        
error: "#ff637f",
body:{
  "background-color":"#e3e6e6"
}
        },
      },
    ],
  },
}
export default config
