require('core-js/es6');

var context = require.context('./test', true, /Test(\.js|\.jsx)$/);
context.keys().forEach(context);