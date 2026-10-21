module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9f1ff',
          500: '#2e7df6',
          700: '#1c5fd6',
          900: '#1c2a5b'
        }
      }
    }
  },
  plugins: []
};
