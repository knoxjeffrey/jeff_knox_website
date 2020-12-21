module.exports = {
  layout: 'main.11ty.js',
  eleventyComputed: {
    permalink: data => `${data.page.filePathStem.replace('/_pages', '').replace('/index', '') }/index.html`
  }
}
