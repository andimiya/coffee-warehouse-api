'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var resolve = require('json-refs').resolveRefs;
var YAML = require('js-yaml');
var fs = require('fs');

var root = YAML.load(fs.readFileSync('index.yaml').toString());
var options = {
  processContent: function (content) {
    return YAML.load(content);
  }
};
resolve(root, options).then(function (results) {
  console.log(YAML.dump(results.resolved));
});
//
// var config = {
//   appRoot: __dirname // required config
// };

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
  //
  // if (swaggerExpress.runner.swagger.paths['/hello']) {
  //   console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  // }
});
