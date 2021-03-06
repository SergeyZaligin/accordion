var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3010));
app.use('/', express.static(__dirname));

app.listen(app.get('port'), function () {
  console.log('Server starting: http://localhost:' + app.get('port') + '/');
});
