export function buildTypescriptLoader() {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node-modules/',
  }

  return typescriptLoader
}
