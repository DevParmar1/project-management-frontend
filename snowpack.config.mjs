/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
    // {
    //   match: 'all',
    //   src: '/api/.*',
    //   dest: (req, res) => proxy.web(req, res),
    // },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    // Type 1: Package Import Alias
    // lodash: 'lodash-es',
    // react: 'preact/compat',
    // Type 2: Local Directory Import Alias (relative to cwd)
    '@app': './src',
    '@components': './src/components',
    '@utils': './src/utils',
    '@assets': './src/assets',
    '@services': './src/services',
  },
}
