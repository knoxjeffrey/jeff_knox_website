const htmlmin = require('html-minifier');
const manager = require('./src/_includes/manager.js')

module.exports = function(eleventyConfig) {
  manager(eleventyConfig)
  
  // .gitignore the compiled asset folder will break Eleventy from watching asset. Created a 
  // .eleventyignore in the root without this folder and now don't use .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Watch our compiled assets for changes
  eleventyConfig.addWatchTarget('./.tmp/compiled-assets/main.css');
  eleventyConfig.addWatchTarget('./.tmp/compiled-assets/main.js');
  // eleventyConfig.addWatchTarget('./src/compiled-assets/vendor.js');

  // Copy .tmp/compiled-assets to /assets
  eleventyConfig.addPassthroughCopy({ '.tmp/compiled-assets': 'assets' });
  // Copy all images
  eleventyConfig.addPassthroughCopy('src/images');
  
  // Minification for production html
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true,
        });
        return minified;
      }
      return content;
    });
  }

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    },
    // Allows using markup and JS features in markdown
    markdownTemplateEngine: '11ty.js',
    templateFormats: [
      '11ty.js',
      'md',
    ],
  };
};
