const express = require('express')
const app = express()

app.use(express.static('./dist/personalPortafolio'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/personalPortafolio/'}
);
});

app.listen(process.env.PORT || 8080);
