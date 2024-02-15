import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        build: path.join(__dirname, 'build'),
        html: path.join(__dirname, 'public', 'index.html'),
        src: path.join(__dirname, 'src'),
    };

    const mode = typeof env.mode === 'string' ? env.mode : 'development';
    const PORT = typeof env.port === 'number' ? env.port : 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
