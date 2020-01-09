module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	plugins: ['svelte3'],
	extends: ['airbnb-base'],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	rules: {
		'no-unused-vars': 'warn',
		'no-tabs': 0,
		indent: [2, 'tab'],
		'max-len': [
			'error',
			{
				code: 120,
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],

		// These are svelte specific
		'import/no-mutable-exports': 'off',
		'import/prefer-default-export': 'off',
		// https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
		'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
	},
};
