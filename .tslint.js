module.exports = {
  defaultSeverity: 'error',
  extends: 'typestrict',
  linterOptions: {
    include: [
      './src/**/*.ts'
    ],
    exclude: [
      '**/*.spec.js',
      './node_modules/**/*'
    ]
  },
  jsRules: {},
  rules: {
    'use-type-alias': true,
    'no-inferrable-types': true,
    'unified-signatures': true,
    'use-default-type-parameter': true,
    'no-undefined-argument': true,

    /* typestrict overrides */

    // Don't check params, for abstract methods
    'no-unused-variable': [true, { 'check-parameters': false }],

    // Useless with vue
    'no-invalid-this': false,

    // Retarded
    'restrict-plus-operands': false,

    // Fails with no-unused-variable for some reason
    'no-useless-cast': false
  },
  rulesDirectory: []
}
