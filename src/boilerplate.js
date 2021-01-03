const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="app/scss/style.css">
  <script defer src="./app/js/script.js"></script>
</head>
<body>

</body>
</html>
`
const CSS = `html {
  font-size: 100%;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.3;
  margin: 0;
  padding: 0;
}
`
const JS = 'console.log("JS file linked.");'
module.exports = [HTML, CSS, JS]
