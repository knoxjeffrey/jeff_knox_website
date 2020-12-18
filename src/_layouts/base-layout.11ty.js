exports.render = data => {
  return `
    <!doctype html>
    <html lang="en">
      ${data.content}
    </html>
  `
}
