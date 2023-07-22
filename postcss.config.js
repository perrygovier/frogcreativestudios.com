module.exports = {
  plugins: {
    "postcss-auto-rem": {size: 16},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
}