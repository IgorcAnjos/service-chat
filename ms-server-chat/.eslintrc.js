/* eslint-disable indent */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: [
			'error',
			2,
			{
				SwitchCase: 1,
			},
		],
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
			},
		],
		semi: ['error', 'always'],
		'@typescript-eslint/no-explicit-any': 'off', //Limita o uso de any, deixar off
		'@typescript-eslint/no-var-requires': 2, //
		'@typescript-eslint/no-non-null-assertion': 'off', //limita o uso de '!', deixar off
		'no-mixed-spaces-and-tabs': 'off', //Permite espaços e tabs, deixar off
		'no-self-assign': ['error', { props: false }],
		'no-useless-catch': 2,
		'@typescript-eslint/no-unused-vars': 2,
		'no-useless-escape': 2,
		'prefer-const': 2,
		'no-multi-spaces': 2,
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			},
		],
		'no-trailing-spaces': 2,
		'no-self-compare': 'error',
		'prefer-for-of': 'off',
		'guard-for-in': 'error',
	},
};
