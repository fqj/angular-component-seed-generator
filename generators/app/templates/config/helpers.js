/**
 * @author: @AngularClass
 */
var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

function extendAppConfig(enviromentVars,environment_config){
  enviromentVars['ENVIRONMENT_CONFIG'] = {}; 
  for(var newVar  in environment_config){
    if(!enviromentVars.hasOwnProperty(newVar)){
      enviromentVars.ENVIRONMENT_CONFIG[newVar] = JSON.stringify(environment_config[newVar]);
    }
  }
  return enviromentVars;
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.extendAppConfig = extendAppConfig;
