/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                glacier: {
                    '50': '#f1f8fa',
                    '100': '#dcecf1',
                    '200': '#bddae4',
                    '300': '#77b0c680',
                    '400': '#5b9ab5',
                    '500': '#3f7e9b',
                    '600': '#376883',
                    '700': '#32566c',
                    '800': '#30495a',
                    '900': '#2b3e4e',
                    '950': '#192833',
                },
    
            }
        },
    },
    plugins: [],
}
