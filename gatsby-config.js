module.exports = {
  siteMetadata: {
    title: "fave-food",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // `gatsby-plugin-react-redux`,
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // {
    //   resolve: `gatsby-plugin-react-redux`,
    //   options: {
    //     // [required] - path to your createStore module
    //     pathToCreateStoreModule: './src/state/createStore',
    //     // [optional] - options passed to `serialize-javascript`
    //     // info: https://github.com/yahoo/serialize-javascript#options
    //     // will be merged with these defaults:
    //     serialize: {
    //       space: 0,
    //       // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
    //       // otherwise `JSON.parse` is used
    //       isJSON: true,
    //       unsafe: false,
    //       ignoreFunction: true,
    //     },
    //     // [optional] - if true will clean up after itself on the client, default:
    //     cleanupOnClient: true,
    //     // [optional] - name of key on `window` where serialized state will be stored, default:
    //     windowKey: '__PRELOADED_STATE__',
    //   },
    // },
  ],
};
