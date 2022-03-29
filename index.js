class tree {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('tree', (compilation, callback) => {
      var filelist = 'In this build:\n\n'
      for (var filename in compilation.assets) {
        filelist += ('- ' + filename + '\n')
      }
      // console.log(compilation.assets)
      compilation.assets['filelist.md'] = {
        source: function () {
          return filelist;
        },
        size: function () {
          return filelist.length;
        }
      }
      // console.log(compilation.assets)
      // callback()
    })
  }
}
module.exports = tree