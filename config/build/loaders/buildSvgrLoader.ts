export function buildSvgrLoader() {
  const svgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  return svgrLoader
}
