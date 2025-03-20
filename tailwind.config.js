/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#112e82', // 主色调
          light: '#1e3a8f',   // 浅一点的主色
          dark: '#0a2575',    // 深一点的主色
        },
        secondary: {
          DEFAULT: '#3B82F6', // 蓝色作为次要色
          light: '#60A5FA',   // 浅一点的次要色
          dark: '#2563EB',    // 深一点的次要色
        },
        accent: {
          DEFAULT: '#22D3EE', // 科技蓝作为强调色
          light: '#67E8F9',   // 浅一点的强调色
          dark: '#06B6D4',    // 深一点的强调色
        },
        surface: {
          DEFAULT: '#FFFFFF', // 白色作为背景色
          dark: '#F1F5F9',    // 浅灰作为深一点的背景色
        }
      },
    },
  },
  plugins: [],
}
