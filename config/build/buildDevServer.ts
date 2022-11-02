import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port, open } = options
  return {
    port,
    open,
    historyApiFallback: true,
    hot: true,
  }
}
