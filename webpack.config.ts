import * as path from 'path'
import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv } from './config/build/types/config'

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
  }
  const PORT = env.port || 3000
  const open = true

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    open,
  })

  return config
}
