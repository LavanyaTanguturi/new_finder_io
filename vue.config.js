module.exports = {
  devServer: {
    proxy: {
      "/c": {
        target: "https://beta.qa.500apps.io",
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
