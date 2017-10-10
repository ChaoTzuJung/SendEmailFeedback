// key.js - Figure out what set of credentials to return
if(process.env.NODE_ENV === 'production') {
  //we are in production - return the prod set of keys
  module.export = require('./prod');
}else {
  //we are in developer - return the dev keys
  module.export = require('./dev');
}
