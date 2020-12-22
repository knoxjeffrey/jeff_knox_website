const md5File = require('md5-file')

const cacheBust = () => {
  // A "map" of files to cache bust
  const files = {
    mainCss: './.tmp/compiled-assets/main.css',
    mainJs: './.tmp/compiled-assets/main.js',
    vendorJs: './.tmp/compiled-assets/vendor.js'
  };
  return Object.entries(files).reduce((acc, [key, path]) => {
    const now = Date.now()
    // current date in milliseconds for development, or the md5 hash for production in a new object
    const bust = process.env.ELEVENTY_ENV === 'production' ? md5File.sync(path, (_err, hash) => hash) : now
    acc[key] = bust
    return acc
  }, {})
};

module.exports = cacheBust
