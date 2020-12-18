module.exports = {
  eleventyComputed: {
    permalink: data => `${data.page.filePathStem.replace('/_pages', '').replace('/index', '') }/index.html`
  }
}
