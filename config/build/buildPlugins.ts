import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { apiUrl, isDev, paths } = options;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.localesSrc, to: paths.localesDest },
            ],
        }),

    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
        );
    }
    return plugins;
}
