# mingwiki-webpack-tree-plugin


```js
const path = require('path')
const tree = require('mingwiki-webpack-tree-plugin')
module.exports = {
  entry: {
    index: "./test.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
    ]
  },
  plugins: [
    new tree()
  ]
}
```