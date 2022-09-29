import { defineConfig } from 'dumi';

const repo = 'stackoverflow';

export default defineConfig({
  title: repo,
  favicon: 'https://i.ibb.co/G5KtZCN/logo.png',
  logo: 'https://i.ibb.co/G5KtZCN/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [null],
});
