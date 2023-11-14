export default {
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    useTabs: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '**/*.astro',
            options: {
                parser: 'astro'
            },
        },
    ],
};
