module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@config': './src/config',
        '@dotenv': './src/lib/dotenv'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
