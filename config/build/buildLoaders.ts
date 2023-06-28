import webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildSvgrLoader } from './loaders/buildSvgrLoader'
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = buildBabelLoader(isDev)

  const fileLoader = buildFileLoader()

  const svgrLoader = buildSvgrLoader()

  const typescriptLoader = buildTypescriptLoader()

  const cssLoader = buildCssLoader(isDev)

  return [fileLoader, svgrLoader, babelLoader, typescriptLoader, cssLoader]
}
