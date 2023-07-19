module.exports = {
  plugins: {
    "postcss-auto-rem": {size: 100},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
}